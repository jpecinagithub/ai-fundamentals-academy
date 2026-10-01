import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { useGlossary } from '../hooks/useContent';
import { getIcon } from '../utils/icons';

export function GlossaryPage() {
  const { t } = useLang();
  const glossary = useGlossary();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const q = query.trim().toLowerCase();
  const filtered = glossary.filter((g) =>
    g.term.toLowerCase().includes(q)
  );

  return (
    <div className="page">
      <h1>{t('glossarypage.title')}</h1>
      <p className="card-sub">
        {filtered.length}{' '}
        {filtered.length === 1
          ? t('glossarypage.termOne')
          : t('glossarypage.termOther')}
      </p>

      <div className="search-box">
        <span className="search-ico">{getIcon('Search', 18)}</span>
        <input
          className="input"
          type="text"
          placeholder={t('glossarypage.searchPlaceholder')}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(null);
          }}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="big-ico">{getIcon('Search', 48)}</div>
          <h3>{t('glossarypage.noResults')}</h3>
          <p>{t('glossarypage.noMatch', { query })}</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {filtered.map((g, i) => (
            <div key={`${g.term}-${i}`}>
              <button
                className="gloss-term"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{g.term}</span>
                <span
                  style={{
                    display: 'inline-flex',
                    transform: open === i ? 'rotate(90deg)' : 'none',
                    transition: 'var(--transition)',
                    color: 'var(--text-faint)',
                  }}
                >
                  {getIcon('ChevronRight', 18)}
                </span>
              </button>
              {open === i && (
                <div className="gloss-def">
                  <p style={{ margin: 0 }}>{g.def}</p>
                  {g.example && (
                    <div className="ex">
                      <strong>{t('glossarypage.example')}</strong> {g.example}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
