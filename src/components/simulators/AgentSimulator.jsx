import { useState, useEffect, useRef } from 'react';
import { Bot, Play, RotateCcw } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const STEP_MS = 900;

// Timestamp simulado: arranca en 10:00:00 y avanza un paso por segundo redondeado
function fakeTs(i) {
  return `10:00:${String(i).padStart(2, '0')}`;
}

export function AgentSimulator() {
  const { lang, t } = useLang();

  const objective = t('agentsimulator.objective');
  const STEPS = [
    { text: t('agentsimulator.step_analyzing'), cls: 'log-info' },
    { text: t('agentsimulator.step_need_tool'), cls: 'log-info' },
    { text: t('agentsimulator.step_selecting'), cls: 'log-info' },
    { text: t('agentsimulator.step_executing'), cls: 'log-warn' },
    { text: t('agentsimulator.step_result'), cls: 'log-ok' },
    { text: t('agentsimulator.step_preparing'), cls: 'log-info' },
    { text: t('agentsimulator.step_done'), cls: 'log-ok' },
  ];

  const [log, setLog] = useState([]);
  const [current, setCurrent] = useState(-1); // -1 idle, 0..6 en curso, 7 terminado
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => stop, []); // limpieza al desmontar

  const start = () => {
    stop();
    setLog([]);
    setCurrent(0);
    setRunning(true);
    let i = 0;
    intervalRef.current = setInterval(() => {
      setLog((l) => [...l, { ts: fakeTs(i), ...STEPS[i] }]);
      i += 1;
      if (i >= STEPS.length) {
        stop();
        setCurrent(7);
        setRunning(false);
      } else {
        setCurrent(i);
      }
    }, STEP_MS);
  };

  const reset = () => {
    stop();
    setLog([]);
    setCurrent(-1);
    setRunning(false);
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Bot size={18} /> {t('agentsimulator.title')}</h3>
        <p className="card-sub">
          {t('agentsimulator.fixed_objective')}{' '}
          <strong>{lang === 'es' ? `«${objective}»` : `"${objective}"`}</strong>.{' '}
          {t('agentsimulator.loop_desc')}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
          <button className="btn btn-primary" onClick={start} disabled={running}>
            <Play size={15} style={{ marginRight: '0.4rem' }} />
            {log.length > 0 && !running ? t('agentsimulator.repeat') : t('agentsimulator.start')}
          </button>
          <button className="btn" onClick={reset} disabled={running}>
            <RotateCcw size={15} style={{ marginRight: '0.4rem' }} /> {t('agentsimulator.reset')}
          </button>
        </div>
      </div>

      <div className="stepper">
        {STEPS.map((s, i) => (
          <span
            key={i}
            className={`step-dot ${i === current ? 'active' : ''} ${i < current || current === 7 ? 'done' : ''}`}
          >
            {i + 1}
          </span>
        ))}
      </div>

      <div className="sim-log">
        {log.length === 0 && <span style={{ color: 'var(--text-muted)' }}>{t('agentsimulator.empty_hint')}</span>}
        {log.map((entry, i) => (
          <div key={i}>
            <span style={{ opacity: 0.55 }}>[{entry.ts}]</span>{' '}
            <span className={entry.cls}>{entry.text}</span>
          </div>
        ))}
        {running && <span style={{ opacity: 0.6 }}>▌</span>}
      </div>
    </div>
  );
}
