import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, BookOpen, ListChecks, RotateCcw, BookMarked, BarChart3, PenLine, Check,
} from 'lucide-react';
import { useProgress, moduleStatus, pendingReview } from '../../hooks/ProgressContext';
import { modules } from '../../data/modules';
import { getIcon } from '../../utils/icons';

const NAV = [
  { to: '/', label: 'Inicio', icon: <Home size={18} />, end: true },
  { to: '/curso', label: 'Curso', icon: <BookOpen size={18} /> },
  { to: '/tests', label: 'Tests', icon: <ListChecks size={18} /> },
  { to: '/repasar', label: 'Repasar errores', icon: <RotateCcw size={18} />, badge: true },
  { to: '/glosario', label: 'Glosario', icon: <BookMarked size={18} /> },
  { to: '/progreso', label: 'Mi progreso', icon: <BarChart3 size={18} /> },
  { to: '/proyecto-final', label: 'Proyecto final', icon: <PenLine size={18} /> },
];

function NavList({ onNavigate }) {
  const { state } = useProgress();
  const pending = pendingReview(state).length;
  return (
    <nav className="sidebar-nav">
      {NAV.map((n) => (
        <NavLink
          key={n.to}
          to={n.to}
          end={n.end}
          onClick={onNavigate}
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
        >
          {n.icon}
          {n.label}
          {n.badge && pending > 0 && <span className="nav-badge">{pending}</span>}
        </NavLink>
      ))}
    </nav>
  );
}

function ModuleList({ onNavigate }) {
  const { state } = useProgress();
  return (
    <>
      <p className="sidebar-heading">Módulos del curso</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {modules.map((m, i) => {
          const st = moduleStatus(state, m.id);
          return (
            <NavLink
              key={m.id}
              to={'/modulo/' + m.id}
              onClick={onNavigate}
              className={({ isActive }) => 'module-link' + (isActive ? ' active' : '') + (st.status === 'done' ? ' done' : '')}
              title={m.title}
            >
              <span className="m-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="m-ico">{getIcon(m.icon, 15)}</span>
              <span className="m-title">{m.short || m.title}</span>
              {st.status === 'done'
                ? <Check size={14} style={{ color: 'var(--success)' }} />
                : <span className="m-pct">{st.pct > 0 ? st.pct + '%' : ''}</span>}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <NavList />
      <ModuleList />
    </aside>
  );
}

export function Drawer({ open, onClose }) {
  return (
    <>
      <div className={'drawer-overlay' + (open ? ' open' : '')} onClick={onClose} />
      <div className={'drawer' + (open ? ' open' : '')}>
        <NavList onNavigate={onClose} />
        <ModuleList onNavigate={onClose} />
      </div>
    </>
  );
}
