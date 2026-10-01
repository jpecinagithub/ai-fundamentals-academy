import React from 'react';
import { Sun, Moon, Menu, GraduationCap } from 'lucide-react';
import { useProgress, globalProgressPct } from '../../hooks/ProgressContext';
import { modules } from '../../data/modules';

export function Header({ onMenu }) {
  const { state, toggleTheme } = useProgress();
  const pct = globalProgressPct(state, modules.length);

  return (
    <header className="topbar">
      <button className="icon-btn hamburger" onClick={onMenu} aria-label="Abrir menú">
        <Menu size={20} />
      </button>
      <div className="topbar-brand">
        <span className="logo"><GraduationCap size={20} /></span>
        <span className="name">AI Fundamentals Academy</span>
      </div>
      <div className="topbar-spacer" />
      <div className="topbar-progress">
        <span className="lbl">Progreso general:</span>
        <span style={{ fontWeight: 800, color: 'var(--text)' }}>{pct} %</span>
        <div className="progress"><div className="progress-fill" style={{ width: pct + '%' }} /></div>
      </div>
      <button className="icon-btn" onClick={toggleTheme} aria-label="Cambiar tema">
        {state.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
