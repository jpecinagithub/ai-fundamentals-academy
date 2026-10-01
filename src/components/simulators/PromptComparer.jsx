import { useState } from 'react';
import { GitCompareArrows, Check, X } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const CRITERIA = [
  { key: 'role', poor: false, rich: true },
  { key: 'goal', poor: false, rich: true },
  { key: 'context', poor: false, rich: true },
  { key: 'constraints', poor: false, rich: true },
  { key: 'format', poor: false, rich: true },
];

function Mark({ ok }) {
  const { t } = useLang();
  return ok ? (
    <span style={{ color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700 }}>
      <Check size={16} /> {t('promptcomparer.yes')}
    </span>
  ) : (
    <span style={{ color: 'var(--danger, #ef4444)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700 }}>
      <X size={16} /> {t('promptcomparer.no')}
    </span>
  );
}

export function PromptComparer() {
  const { t } = useLang();
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      <div className="grid-2" style={{ marginBottom: '1rem' }}>
        <div className="card">
          <h3 className="card-title">{t('promptcomparer.poor_title')}</h3>
          <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--warning)', paddingLeft: '0.75rem' }}>
            «{t('promptcomparer.poor_prompt')}»
          </p>
          {revealed && (
            <div style={{ marginTop: '0.75rem' }}>
              {CRITERIA.map((c) => (
                <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <span>{t(`promptcomparer.crit.${c.key}`)}</span>
                  <Mark ok={c.poor} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="card">
          <h3 className="card-title">{t('promptcomparer.rich_title')}</h3>
          <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--success)', paddingLeft: '0.75rem' }}>
            «{t('promptcomparer.rich_prompt')}»
          </p>
          {revealed && (
            <div style={{ marginTop: '0.75rem' }}>
              {CRITERIA.map((c) => (
                <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <span>{t(`promptcomparer.crit.${c.key}`)}</span>
                  <Mark ok={c.rich} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button className="btn btn-primary" onClick={() => setRevealed((r) => !r)}>
          <GitCompareArrows size={16} style={{ marginRight: '0.4rem' }} />
          {revealed ? t('promptcomparer.hide') : t('promptcomparer.compare')}
        </button>
      </div>

      {revealed && (
        <div className="callout tip">
          <strong>{t('promptcomparer.why_title')}</strong> {t('promptcomparer.why_body')}
        </div>
      )}
    </div>
  );
}
