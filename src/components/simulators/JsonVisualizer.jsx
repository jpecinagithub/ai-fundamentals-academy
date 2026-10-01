import { useState, useEffect, useRef } from 'react';
import { Braces, ChevronRight, ChevronDown, TriangleAlert } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const TYPE_COLORS = {
  string: '#16a34a',
  number: '#2563eb',
  boolean: '#ea580c',
  null: '#6b7280',
  key: '#7c3aed',
};

function typeOf(v) {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'array';
  return typeof v; // object, string, number, boolean
}

function typeLabel(v) {
  const t = typeOf(v);
  return t === 'array' ? 'array' : t;
}

function Node({ k, value, path, depth, selected, onSelect }) {
  const { t: tr } = useLang();
  const [open, setOpen] = useState(true);
  const t = typeOf(value);
  const isContainer = t === 'object' || t === 'array';
  const isSel = selected && selected.path === path;

  const indent = { marginLeft: `${depth * 18}px` };

  if (isContainer) {
    const entries = t === 'array' ? value.map((v, i) => [i, v]) : Object.entries(value);
    const empty = entries.length === 0;
    return (
      <div style={indent}>
        <div
          onClick={() => setOpen((o) => !o)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', userSelect: 'none' }}
        >
          {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          {k !== null && <span style={{ color: TYPE_COLORS.key, fontWeight: 600 }}>«{k}»:</span>}
          <span style={{ color: 'var(--text-muted)' }}>{t === 'array' ? '[' : '{'}</span>
          {!open && (
            <span style={{ color: 'var(--text-muted)' }}>
              {empty ? (t === 'array' ? ']' : '}') : `${tr(t === 'array' ? 'jsonvisualizer.collapsed_items' : 'jsonvisualizer.collapsed_keys', { n: entries.length })} ${t === 'array' ? ']' : '}'}`}
            </span>
          )}
        </div>
        {open && (
          <div>
            {entries.map(([ek, ev]) => (
              <Node
                key={String(ek)}
                k={t === 'array' ? null : ek}
                value={ev}
                path={`${path}.${ek}`}
                depth={depth + 1}
                selected={selected}
                onSelect={onSelect}
              />
            ))}
            <div style={{ ...indent, marginLeft: `${(depth + 1) * 18}px`, color: 'var(--text-muted)' }}>
              {t === 'array' ? ']' : '}'}
            </div>
          </div>
        )}
      </div>
    );
  }

  const display =
    t === 'string' ? `«${value}»` : t === 'null' ? 'null' : String(value);

  return (
    <div style={indent}>
      {k !== null && <span style={{ color: TYPE_COLORS.key, fontWeight: 600 }}>«{k}»:</span>}{' '}
      <span
        onClick={() => onSelect({ path, type: typeLabel(value), value: display })}
        style={{
          color: TYPE_COLORS[t],
          fontWeight: 600,
          cursor: 'pointer',
          background: isSel ? 'var(--primary-soft)' : 'transparent',
          borderRadius: '4px',
          padding: '0.1rem 0.3rem',
        }}
        title={tr('jsonvisualizer.click_type')}
      >
        {display}
      </span>
    </div>
  );
}

export function JsonVisualizer() {
  const { t } = useLang();
  const [raw, setRaw] = useState(() => t('jsonvisualizer.example'));
  const [data, setData] = useState(() => JSON.parse(t('jsonvisualizer.example')));
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const timer = useRef(null);

  const parse = (text) => {
    try {
      setData(JSON.parse(text));
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  // Visualización en vivo con debounce simple
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => parse(raw), 500);
    return () => clearTimeout(timer.current);
  }, [raw]);

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Braces size={18} /> {t('jsonvisualizer.title')}</h3>
        <p className="card-sub">
          {t('jsonvisualizer.sub')}
        </p>
        <textarea
          className="textarea"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          style={{ width: '100%', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.75rem' }}
          spellCheck={false}
        />
        <button className="btn btn-primary" onClick={() => parse(raw)} style={{ marginTop: '0.75rem' }}>
          {t('jsonvisualizer.visualize')}
        </button>
        {error && (
          <div className="callout warn" style={{ marginTop: '0.75rem' }}>
            <TriangleAlert size={16} className="callout-ico" />
            <span><strong>{t('jsonvisualizer.parse_error')}</strong> {error}</span>
          </div>
        )}
      </div>

      {!error && (
        <div className="card">
          <h3 className="card-title">
            {t('jsonvisualizer.tree')}
            {selected && (
              <span className="badge badge-primary" style={{ marginLeft: '0.75rem' }}>
                {t('jsonvisualizer.type_badge', { type: selected.type })}
              </span>
            )}
          </h3>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.75rem', lineHeight: 1.8 }}>
            <Node k={null} value={data} path="$" depth={0} selected={selected} onSelect={setSelected} />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem', fontSize: '0.82rem' }}>
            <span style={{ color: TYPE_COLORS.string }}>● string</span>
            <span style={{ color: TYPE_COLORS.number }}>● number</span>
            <span style={{ color: TYPE_COLORS.boolean }}>● boolean</span>
            <span style={{ color: TYPE_COLORS.null }}>● null</span>
            <span style={{ color: TYPE_COLORS.key }}>● key</span>
          </div>
        </div>
      )}
    </div>
  );
}
