import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../data/modules';
import { useProgress, moduleStatus } from '../hooks/ProgressContext';
import { getIcon } from '../utils/icons';

const BADGE_CLASS = {
  done: 'badge-ok',
  progress: 'badge-info',
  todo: 'badge-muted',
};

const clamp2 = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

export function Course() {
  const { state } = useProgress();

  return (
    <div className="page">
      <h1>Curso</h1>
      <p className="card-sub" style={{ maxWidth: 640 }}>
        Los 28 módulos del itinerario, de los fundamentos de la IA hasta la
        construcción de aplicaciones con modelos de lenguaje. Completa el test
        de cada módulo para avanzar.
      </p>

      <div className="grid-3">
        {modules.map((m, i) => {
          const st = moduleStatus(state, m.id);
          const best = state.bestScores[m.id];
          return (
            <Link
              key={m.id}
              to={`/modulo/${m.id}`}
              className="card hoverable"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.6rem',
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    display: 'grid',
                    placeItems: 'center',
                    background: 'var(--primary-soft)',
                    color: 'var(--primary-strong)',
                    flexShrink: 0,
                  }}
                >
                  {getIcon(m.icon, 22)}
                </span>
                <span className="card-sub" style={{ fontWeight: 700 }}>
                  Módulo {i + 1}
                </span>
                <span
                  className={`badge ${BADGE_CLASS[st.status]}`}
                  style={{ marginLeft: 'auto' }}
                >
                  {st.label}
                </span>
              </div>
              <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.02rem' }}>
                {m.title}
              </h3>
              <p className="card-sub" style={{ ...clamp2, minHeight: '3.2em' }}>
                {m.description}
              </p>
              <div className="progress" style={{ marginTop: '0.8rem' }}>
                <div className="progress-fill" style={{ width: `${st.pct}%` }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '0.45rem',
                }}
              >
                <span className="card-sub">{st.pct}%</span>
                {best != null && (
                  <span className="card-sub">
                    Mejor nota: <strong>{best}%</strong>
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
