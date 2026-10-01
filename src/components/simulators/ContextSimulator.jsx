import { useState } from 'react';
import { Settings, User, FileText, Database, Wrench, Trash2, TriangleAlert } from 'lucide-react';
import { estimateTokens } from '../../utils/format';

const CONTEXT_LIMIT = 128000;
const WARN_RATIO = 0.85;

const BLOCK_TYPES = {
  system: {
    label: 'System Prompt',
    Icon: Settings,
    example: 'Eres un asistente experto en finanzas que responde de forma concisa y profesional.',
  },
  user: {
    label: 'User Prompt',
    Icon: User,
    example: 'Analiza los estados financieros adjuntos y dime los 3 riesgos principales.',
  },
  file: {
    label: 'Archivo',
    Icon: FileText,
    example: '[balance-2024.pdf] Activo total: 12,4 M€ · Pasivo: 7,1 M€ · Patrimonio: 5,3 M€ ...',
  },
  memory: {
    label: 'Memoria recuperada',
    Icon: Database,
    example: 'El usuario prefiere respuestas en español y con ejemplos numéricos.',
  },
  tool: {
    label: 'Tool output',
    Icon: Wrench,
    example: '{ "ratio_liquidez": 1.8, "roe": 0.14, "endeudamiento": 0.57 }',
  },
};

let nextId = 3;

export function ContextSimulator() {
  const [blocks, setBlocks] = useState([
    { id: 1, type: 'system', text: BLOCK_TYPES.system.example },
    { id: 2, type: 'user', text: BLOCK_TYPES.user.example },
  ]);

  const addBlock = (type) => {
    setBlocks((b) => [...b, { id: nextId++, type, text: BLOCK_TYPES[type].example }]);
  };

  const updateBlock = (id, text) => {
    setBlocks((b) => b.map((blk) => (blk.id === id ? { ...blk, text } : blk)));
  };

  const removeBlock = (id) => {
    setBlocks((b) => b.filter((blk) => blk.id !== id));
  };

  const totalTokens = blocks.reduce((s, blk) => s + estimateTokens(blk.text), 0);
  const ratio = totalTokens / CONTEXT_LIMIT;
  const overWarn = ratio > WARN_RATIO;

  const finalContext = blocks
    .map((blk) => `### ${BLOCK_TYPES[blk.type].label.toUpperCase()}\n${blk.text}`)
    .join('\n\n');

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">Paleta de bloques de contexto</h3>
        <p className="card-sub">Añade bloques para simular lo que entra en la ventana de contexto del modelo.</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
          {Object.entries(BLOCK_TYPES).map(([key, { label, Icon }]) => (
            <button key={key} className="btn btn-sm" onClick={() => addBlock(key)}>
              <Icon size={14} style={{ marginRight: '0.35rem' }} /> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">Bloques añadidos ({blocks.length})</h3>
        {blocks.length === 0 && <p className="card-sub">Sin bloques. Añade alguno desde la paleta.</p>}
        {blocks.map((blk) => {
          const { label, Icon } = BLOCK_TYPES[blk.type];
          return (
            <div
              key={blk.id}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem',
                marginTop: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="chip">
                  <Icon size={13} style={{ marginRight: '0.35rem' }} /> {label}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge badge-info">≈ {estimateTokens(blk.text).toLocaleString('es-ES')} tokens</span>
                  <button className="btn btn-sm" onClick={() => removeBlock(blk.id)} aria-label="Eliminar bloque">
                    <Trash2 size={14} />
                  </button>
                </span>
              </div>
              <textarea
                className="textarea"
                value={blk.text}
                onChange={(e) => updateBlock(blk.id, e.target.value)}
                style={{ width: '100%', minHeight: '70px' }}
              />
            </div>
          );
        })}
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">Uso de la ventana de contexto</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
          <span><strong>{totalTokens.toLocaleString('es-ES')}</strong> / {CONTEXT_LIMIT.toLocaleString('es-ES')} tokens</span>
          <span>{(ratio * 100).toLocaleString('es-ES', { maximumFractionDigits: 1 })} %</span>
        </div>
        <div className="progress progress-lg">
          <div
            className="progress-fill"
            style={{
              width: `${Math.min(100, ratio * 100)}%`,
              background: overWarn ? 'var(--warning)' : 'var(--primary)',
            }}
          />
        </div>
        {overWarn && (
          <div className="callout warn" style={{ marginTop: '0.75rem' }}>
            <TriangleAlert size={16} className="callout-ico" />
            <span>
              <strong>Atención:</strong> superas el 85 % de la ventana de contexto de ejemplo (128.000 tokens).
              En un caso real habría que resumir, recortar archivos o usar RAG.
            </span>
          </div>
        )}
      </div>

      <div className="card">
        <h3 className="card-title">Contexto final enviado al modelo</h3>
        <pre
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            background: 'var(--code-bg)',
            color: '#c9d4ff',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            whiteSpace: 'pre-wrap',
            marginTop: '0.75rem',
          }}
        >
          {finalContext || '(vacío)'}
        </pre>
      </div>
    </div>
  );
}
