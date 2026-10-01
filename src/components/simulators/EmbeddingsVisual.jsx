import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const WORD_POINTS = [
  { id: 'dog', x: 120, y: 150 },
  { id: 'cat', x: 160, y: 170 },
  { id: 'puppy', x: 100, y: 120 },
  { id: 'car', x: 320, y: 80 },
  { id: 'plane', x: 340, y: 120 },
  { id: 'apple', x: 300, y: 220 },
  { id: 'banana', x: 270, y: 240 },
];

const LINKS = [
  { from: 'dog', to: 'cat', pct: '96 %' },
  { from: 'dog', to: 'puppy', pct: '93 %' },
  { from: 'dog', to: 'car', pct: '21 %' },
];

export function EmbeddingsVisual() {
  const { t } = useLang();
  const [showLinks, setShowLinks] = useState(false);
  const [tip, setTip] = useState(null); // { x, y, text }

  const words = WORD_POINTS.map((p) => ({ ...p, w: t(`embeddingsvisual.word.${p.id}`) }));

  function byWord(id) {
    return words.find((p) => p.id === id);
  }

  const wordName = (id) => t(`embeddingsvisual.word.${id}`);

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><MapPin size={18} /> {t('embeddingsvisual.title')}</h3>
        <p className="card-sub">
          {t('embeddingsvisual.sub')}
        </p>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showLinks}
            onChange={(e) => setShowLinks(e.target.checked)}
          />
          <strong>{t('embeddingsvisual.show_similarities')}</strong>
        </label>

        <div style={{ position: 'relative', marginTop: '0.75rem' }}>
          <svg
            viewBox="0 0 400 300"
            style={{ width: '100%', maxWidth: '560px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--bg-raised)' }}
          >
            {/* ejes */}
            <line x1="20" y1="280" x2="390" y2="280" stroke="var(--border)" strokeWidth="1" />
            <line x1="20" y1="280" x2="20" y2="10" stroke="var(--border)" strokeWidth="1" />

            {showLinks &&
              LINKS.map((l) => {
                const a = byWord(l.from);
                const b = byWord(l.to);
                const strong = parseInt(l.pct, 10) > 50;
                return (
                  <g key={l.from + l.to}>
                    <line
                      x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                      stroke={strong ? 'var(--success)' : 'var(--warning)'}
                      strokeWidth={strong ? 2.5 : 1.5}
                      strokeDasharray={strong ? 'none' : '6 4'}
                    />
                    <text
                      x={(a.x + b.x) / 2 + 6}
                      y={(a.y + b.y) / 2 - 6}
                      fontSize="11"
                      fill="var(--text)"
                      fontFamily="var(--font-mono)"
                    >
                      {l.pct}
                    </text>
                  </g>
                );
              })}

            {words.map((p) => (
              <g
                key={p.id}
                onMouseEnter={() => setTip({ x: p.x, y: p.y, text: t('embeddingsvisual.tooltip', { w: p.w, x: p.x, y: p.y }) })}
                onMouseLeave={() => setTip(null)}
                style={{ cursor: 'pointer' }}
              >
                <circle cx={p.x} cy={p.y} r="7" fill="var(--primary)" stroke="#fff" strokeWidth="1.5" />
                <text x={p.x + 11} y={p.y + 4} fontSize="13" fill="var(--text)" fontWeight="600">
                  {p.w}
                </text>
              </g>
            ))}
          </svg>

          {tip && (
            <div
              style={{
                position: 'absolute',
                left: `${(tip.x / 400) * 100}%`,
                top: `${(tip.y / 300) * 100}%`,
                transform: 'translate(12px, -130%)',
                background: 'var(--text)',
                color: 'var(--bg)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                zIndex: 5,
              }}
            >
              {tip.text}
            </div>
          )}
        </div>
      </div>

      <div className="callout info">
        <strong>{t('embeddingsvisual.legend_label')}</strong>{' '}
        {t('embeddingsvisual.legend_body', {
          dog: wordName('dog'),
          cat: wordName('cat'),
          puppy: wordName('puppy'),
          car: wordName('car'),
        })}
        <em>{t('embeddingsvisual.legend_em')}</em>.
      </div>
    </div>
  );
}
