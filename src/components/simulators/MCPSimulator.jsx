import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Send, Github, HardDrive, Database, Usb } from 'lucide-react';

const TOOLS = {
  github: {
    label: 'GitHub',
    Icon: Github,
    request: "mcp.call_tool('github.list_repos')",
    response: '{ "repos": ["ai-fundamentals", "mi-portfolio", "chatbot"], "count": 3 }',
  },
  drive: {
    label: 'Google Drive',
    Icon: HardDrive,
    request: "mcp.call_tool('drive.search_files', { q: 'informe' })",
    response: '{ "files": ["informe-2025.pdf", "notas.txt"], "count": 2 }',
  },
  database: {
    label: 'Database',
    Icon: Database,
    request: "mcp.call_tool('db.query', { sql: 'SELECT * FROM clientes LIMIT 5' })",
    response: '{ "rows": 5, "ms": 12 }',
  },
};

const NODES = ['AI APP', 'MCP CLIENT', 'MCP SERVER'];

export function MCPSimulator() {
  const [toolKey, setToolKey] = useState('github');
  const [highlight, setHighlight] = useState(-1);
  const [log, setLog] = useState([]);
  const [busy, setBusy] = useState(false);
  const timeouts = useRef([]);

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
            setLog((l) => [...l, { cls: 'log-info', text: `→ request: ${TOOLS[toolKey].request}` }]);
          }
          if (i === 3) {
            timeouts.current.push(
              setTimeout(() => {
                setLog((l) => [...l, { cls: 'log-ok', text: `← response: ${TOOLS[toolKey].response}` }]);
                setBusy(false);
              }, 600)
            );
          }
        }, i * 750)
      );
    }
  };

  const toolNodeLabel = `TOOL: ${TOOLS[toolKey].label}`;

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Usb size={18} /> Simulador MCP</h3>
        <p className="card-sub">Elige una herramienta y envía una petición para ver el recorrido.</p>
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
          {busy ? 'Enviando…' : 'Enviar petición'}
        </button>
      </div>

      <div className="sim-log" style={{ marginBottom: '1rem' }}>
        {log.length === 0 && <span style={{ color: 'var(--text-muted)' }}>// el request y la response aparecerán aquí…</span>}
        {log.map((entry, i) => (
          <div key={i} className={entry.cls} style={{ wordBreak: 'break-all' }}>{entry.text}</div>
        ))}
      </div>

      <div className="callout tip">
        <Usb size={16} className="callout-ico" />
        <span>
          <strong>La analogía «USB-C»:</strong> el mismo MCP CLIENT sirve para GitHub, Google Drive
          y la base de datos sin escribir integraciones a medida para cada una. Cambias de herramienta
          y el protocolo es idéntico: un solo conector estándar para todo.
        </span>
      </div>
    </div>
  );
}
