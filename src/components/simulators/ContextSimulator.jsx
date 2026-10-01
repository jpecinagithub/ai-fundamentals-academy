import { useState } from 'react';
import { Settings, User, FileText, Database, Wrench, Trash2, TriangleAlert } from 'lucide-react';
import { estimateTokens } from '../../utils/format';
import { useLang } from '../../i18n/LanguageContext';

const CONTEXT_LIMIT = 128000;
const WARN_RATIO = 0.85;

const BLOCK_TYPES = {
  system: {
    labelKey: 'contextsimulator.block.system.label',
    Icon: Settings,
    exampleKey: 'contextsimulator.block.system.example',
  },
  user: {
    labelKey: 'contextsimulator.block.user.label',
    Icon: User,
    exampleKey: 'contextsimulator.block.user.example',
  },
  file: {
    labelKey: 'contextsimulator.block.file.label',
    Icon: FileText,
    exampleKey: 'contextsimulator.block.file.example',
  },
  memory: {
    labelKey: 'contextsimulator.block.memory.label',
    Icon: Database,
    exampleKey: 'contextsimulator.block.memory.example',
  },
  tool: {
    labelKey: 'contextsimulator.block.tool.label',
    Icon: Wrench,
    exampleKey: 'contextsimulator.block.tool.example',
  },
};

let nextId = 3;

export function ContextSimulator() {
  const { lang, t } = useLang();
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  const blockLabel = (type) => t(BLOCK_TYPES[type].labelKey);
  const blockExample = (type) => t(BLOCK_TYPES[type].exampleKey);

  const [blocks, setBlocks] = useState([
    { id: 1, type: 'system', text: blockExample('system') },
    { id: 2, type: 'user', text: blockExample('user') },
  ]);

  const addBlock = (type) => {
    setBlocks((b) => [...b, { id: nextId++, type, text: blockExample(type) }]);
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
    .map((blk) => `### ${blockLabel(blk.type).toUpperCase()}\n${blk.text}`)
    .join('\n\n');

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">{t('contextsimulator.palette_title')}</h3>
        <p className="card-sub">{t('contextsimulator.palette_sub')}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
          {Object.entries(BLOCK_TYPES).map(([key, { Icon }]) => (
            <button key={key} className="btn btn-sm" onClick={() => addBlock(key)}>
              <Icon size={14} style={{ marginRight: '0.35rem' }} /> {blockLabel(key)}
            </button>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">{t('contextsimulator.added_blocks', { count: blocks.length })}</h3>
        {blocks.length === 0 && <p className="card-sub">{t('contextsimulator.no_blocks')}</p>}
        {blocks.map((blk) => {
          const { Icon } = BLOCK_TYPES[blk.type];
          const label = blockLabel(blk.type);
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
                  <span className="badge badge-info">≈ {estimateTokens(blk.text).toLocaleString(locale)} {t('contextsimulator.tokens')}</span>
                  <button className="btn btn-sm" onClick={() => removeBlock(blk.id)} aria-label={t('contextsimulator.remove_block')}>
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
        <h3 className="card-title">{t('contextsimulator.usage_title')}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
          <span><strong>{totalTokens.toLocaleString(locale)}</strong> / {CONTEXT_LIMIT.toLocaleString(locale)} {t('contextsimulator.tokens')}</span>
          <span>{(ratio * 100).toLocaleString(locale, { maximumFractionDigits: 1 })} %</span>
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
              <strong>{t('contextsimulator.warn_title')}</strong> {t('contextsimulator.warn_body')}
            </span>
          </div>
        )}
      </div>

      <div className="card">
        <h3 className="card-title">{t('contextsimulator.final_title')}</h3>
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
          {finalContext || t('contextsimulator.empty')}
        </pre>
      </div>
    </div>
  );
}
