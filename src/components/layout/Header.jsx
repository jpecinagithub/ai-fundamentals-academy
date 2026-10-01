import React from 'react';
import { Sun, Moon, Menu, GraduationCap } from 'lucide-react';
import { useProgress, globalProgressPct } from '../../hooks/ProgressContext';
import { useLang } from '../../i18n/LanguageContext';
import { useModules } from '../../hooks/useContent';

export function Header({ onMenu }) {
  const { state, toggleTheme } = useProgress();
  const { lang, setLang, t } = useLang();
  const modules = useModules();
  const pct = globalProgressPct(state, modules.length);

  return (
    <header className="topbar">
      <button className="icon-btn hamburger" onClick={onMenu} aria-label={t('header.openMenu')}>
        <Menu size={20} />
      </button>
      <div className="topbar-brand">
        <span className="logo"><GraduationCap size={20} /></span>
        <span className="name">AI Fundamentals Academy</span>
      </div>
      <div className="topbar-spacer" />
      <div className="lang-toggle" role="group" aria-label={t('header.langLabel')}>
        <button
          type="button"
          className={lang === 'en' ? 'active' : ''}
          aria-pressed={lang === 'en'}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={lang === 'es' ? 'active' : ''}
          aria-pressed={lang === 'es'}
          onClick={() => setLang('es')}
        >
          ES
        </button>
      </div>
      <div className="topbar-progress">
        <span className="lbl">{t('header.progress')}</span>
        <span style={{ fontWeight: 800, color: 'var(--text)' }}>{pct} %</span>
        <div className="progress"><div className="progress-fill" style={{ width: pct + '%' }} /></div>
      </div>
      <button className="icon-btn" onClick={toggleTheme} aria-label={t('header.toggleTheme')}>
        {state.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
