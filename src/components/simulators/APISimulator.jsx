import { useState, useEffect, useRef } from 'react';
import { Send, MonitorSmartphone, FileJson, Cpu, KeyRound, TriangleAlert } from 'lucide-react';
import { estimateTokens } from '../../utils/format';
import { useLang } from '../../i18n/LanguageContext';

const PHASES = ['idle', 'request', 'model', 'response', 'done'];

function panelStyle(active) {
  return active
    ? { border: '2px solid var(--primary)', boxShadow: 'var(--glow)' }
    : {};
}

export function APISimulator() {
  const { lang, t } = useLang();
  const locale = lang === 'es' ? 'es-ES' : 'en-US';

  const defaultRequest = `{
  "model": "muse-spark-1.3",
  "messages": [
    { "role": "user", "content": "${t('apisimulator.default_request_content')}" }
  ],
  "temperature": 0.7
}`;

  const [requestRaw, setRequestRaw] = useState(defaultRequest);
  const [phase, setPhase] = useState('idle');
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const timeouts = useRef([]);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => clearTimers, []);

  const send = () => {
    clearTimers();
    setError(null);
    setResult(null);

    let req;
    try {
      req = JSON.parse(requestRaw);
    } catch (e) {
      setError(t('apisimulator.error_invalid_json', { message: e.message }));
      return;
    }

    const content = req?.messages?.map((m) => m.content).join(' ') ?? requestRaw;
    const reply = t('apisimulator.sample_reply');

    const inTokens = estimateTokens(content);
    const outTokens = estimateTokens(reply);
    const cost = ((inTokens + outTokens) * 0.002) / 1000;

    const response = {
      id: 'resp_8f3a21',
      model: req.model ?? 'muse-spark-1.3',
      choices: [{ message: { role: 'assistant', content: reply } }],
      usage: { prompt_tokens: inTokens, completion_tokens: outTokens, total_tokens: inTokens + outTokens },
    };

    // Animación: APP → API → MODEL → RESPONSE → APP
    const order = ['request', 'model', 'response', 'done'];
    order.forEach((p, i) => {
      timeouts.current.push(
        setTimeout(() => {
          setPhase(p);
          if (p === 'done') {
            setResult({ response, inTokens, outTokens, cost });
          }
        }, 700 * (i + 1))
      );
    });
  };

  const phaseIndex = PHASES.indexOf(phase);
  const dotLabels = ['APP', 'API', 'MODEL', t('apisimulator.flow_response')];

  return (
    <div>
      <div className="grid-3" style={{ marginBottom: '1rem' }}>
        <div className="card" style={panelStyle(phase === 'request')}>
          <h3 className="card-title"><MonitorSmartphone size={18} /> APP</h3>
          <p className="card-sub">{t('apisimulator.app_sub')}</p>
        </div>
        <div className="card" style={panelStyle(phase === 'request' || phase === 'response')}>
          <h3 className="card-title"><FileJson size={18} /> REQUEST</h3>
          <textarea
            className="textarea"
            value={requestRaw}
            onChange={(e) => setRequestRaw(e.target.value)}
            style={{ width: '100%', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', minHeight: '170px' }}
            spellCheck={false}
          />
        </div>
        <div className="card" style={panelStyle(phase === 'model')}>
          <h3 className="card-title"><Cpu size={18} /> AI API</h3>
          <p className="card-sub">{t('apisimulator.api_sub')}</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button className="btn btn-primary" onClick={send} disabled={phase !== 'idle' && phase !== 'done'}>
          <Send size={15} style={{ marginRight: '0.4rem' }} />
          {t('apisimulator.send')}
        </button>
      </div>

      {phase !== 'idle' && phase !== 'done' && (
        <div className="flow-row" style={{ marginBottom: '1rem' }}>
          {dotLabels.map((label, i) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span
                className="chip"
                style={
                  i + 1 <= phaseIndex
                    ? { background: 'var(--primary-soft)', borderColor: 'var(--primary)', fontWeight: 700 }
                    : {}
                }
              >
                {label}
              </span>
              {i < dotLabels.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      )}

      {error && (
        <div className="callout warn" style={{ marginBottom: '1rem' }}>
          <TriangleAlert size={16} className="callout-ico" />
          <span>{error}</span>
        </div>
      )}

      {phase === 'done' && result && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <h3 className="card-title">{t('apisimulator.result_title')}</h3>
          <pre
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              background: 'var(--code-bg)',
              color: '#c9d4ff',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              whiteSpace: 'pre-wrap',
              marginTop: '0.75rem',
            }}
          >
            {JSON.stringify(result.response, null, 2)}
          </pre>
          <div className="grid-3" style={{ marginTop: '0.75rem' }}>
            <div><strong>{t('apisimulator.tokens_in')}</strong> {result.inTokens.toLocaleString(locale)}</div>
            <div><strong>{t('apisimulator.tokens_out')}</strong> {result.outTokens.toLocaleString(locale)}</div>
            <div>
              <strong>{t('apisimulator.cost')}</strong>{' '}
              {result.cost.toLocaleString(locale, { minimumFractionDigits: 6, maximumFractionDigits: 6 })} €
            </div>
          </div>
        </div>
      )}

      <div className="callout info">
        <KeyRound size={16} className="callout-ico" />
        <span>
          <strong>{t('apisimulator.security_title')}</strong> {t('apisimulator.security_before')}{' '}
          <em>backend</em>{t('apisimulator.security_after')}
        </span>
      </div>
    </div>
  );
}
