import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Send, Github, HardDrive, Database, Usb } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const NODES = ['AI APP', 'MCP CLIENT', 'MCP SERVER'];

export function MCPSimulator() {
  const { t } = useLang();
  const [toolKey, setToolKey] = useState('github');
  const [highlight, setHighlight] = useState(-1);
  const [log, setLog] = useState([]);
  const [busy, setBusy] = useState(false);
  const timeouts = useRef([]);

  const TOOLS = {
    github: {
      label: 'GitHub',
      Icon: Github,
      request: t('mcpsimulator.tool.github.request'),
      response: t('mcpsimulator.tool.github.response'),
    },
    drive: {
      label: 'Google Drive',
      Icon: HardDrive,
      request: t('mcpsimulator.tool.drive.request'),
      response: t('mcpsimulator.tool.drive.response'),
    },
    database: {
      label: 'Database',
      Icon: Database,
      request: t('mcpsimulator.tool.database.request'),
      response: t('mcpsimulator.tool.database.response'),
    },
  };

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => clearTimers, []);

  const send = () => {
    if (busy) return;
    clearTimers();
    setBusy(true);
    setLog([]);
    setHighlight(-1);

    // Recorre los 4 nodos secuencialmente
    for (let i = 0; i < 4; i++) {
      timeouts.current.push(
        setTimeout(() => {
          setHighlight(i);
          if (i === 1) {
            setLog((l) => [...l, { cls: 'log-info', text: t('mcpsimulator.log_request', { text: TOOLS[toolKey].request }) }]);
          }
          if (i === 3) {
            timeouts.current.push(
              setTimeout(() => {
                setLog((l) => [...l, { cls: 'log-ok', text: t('mcpsimulator.log_response', { text: TOOLS[toolKey].response }) }]);
                setBusy(false);
              }, 600)
            );
          }
        }, i * 750)
      );
    }
  };

  const toolNodeLabel = `${t('mcpsimulator.tool_prefix')} ${TOOLS[toolKey].label}`;

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Usb size={18} /> {t('mcpsimulator.title')}</h3>
        <p className="card-sub">{t('mcpsimulator.sub')}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
          {Object.entries(TOOLS).map(([key, { label, Icon }]) => (
            <button
              key={key}
              className={`btn ${toolKey === key ? 'btn-primary' : ''}`}
              onClick={() => setToolKey(key)}
              disabled={busy}
            >
              <Icon size={15} style={{ marginRight: '0.4rem' }} /> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <div className="flow">
          {NODES.map((label, i) => (
            <div key={label}>
              <div className={`flow-node ${highlight === i ? 'highlight' : ''}`}>
                <div className="fn-label">{label}</div>
              </div>
              <div className="flow-arrow"><ArrowDown size={18} /></div>
            </div>
          ))}
          <div className={`flow-node ${highlight === 3 ? 'highlight' : ''}`}>
            <div className="fn-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {(() => { const { Icon } = TOOLS[toolKey]; return <Icon size={18} />; })()}
              {toolNodeLabel}
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-block" onClick={send} disabled={busy}>
          <Send size={15} style={{ marginRight: '0.4rem' }} />
          {busy ? t('mcpsimulator.sending') : t('mcpsimulator.send')}
        </button>
      </div>

      <div className="sim-log" style={{ marginBottom: '1rem' }}>
        {log.length === 0 && <span style={{ color: 'var(--text-muted)' }}>{t('mcpsimulator.log_placeholder')}</span>}
        {log.map((entry, i) => (
          <div key={i} className={entry.cls} style={{ wordBreak: 'break-all' }}>{entry.text}</div>
        ))}
      </div>

      <div className="callout tip">
        <Usb size={16} className="callout-ico" />
        <span>
          <strong>{t('mcpsimulator.analogy_title')}</strong> {t('mcpsimulator.analogy_body')}
        </span>
      </div>
    </div>
  );
}
