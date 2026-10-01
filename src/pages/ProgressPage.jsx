import React from 'react';
import { modules } from '../data/modules';
import {
  useProgress, moduleStatus, globalProgressPct,
  masteredCount, accuracyPct,
} from '../hooks/ProgressContext';
import { KnowledgeMap } from '../components/KnowledgeMap';
import { getIcon } from '../utils/icons';
import { formatDate } from '../utils/format';

const GROUPS = [
  { label: 'LLM', modules: ['m2', 'm3'] },
  { label: 'Contexto y prompts', modules: ['m4', 'm5'] },
  { label: 'Memoria', modules: ['m6'] },
  { label: 'Tools y MCP', modules: ['m7', 'm8', 'm9'] },
  { label: 'Agentes', modules: ['m10', 'm11', 'm12', 'm13'] },
  { label: 'Arquitectura web', modules: ['m14', 'm15', 'm16'] },
  { label: 'APIs', modules: ['m17', 'm18', 'm19', 'm20', 'm21', 'm22'] },
  { label: 'GitHub', modules: ['m23', 'm24'] },
  { label: 'Vercel', modules: ['m25', 'm26'] },
  { label: 'Apps con IA', modules: ['m27', 'm28'] },
];

const BADGE_CLASS = {
  done: 'badge-ok',
  progress: 'badge-info',
  todo: 'badge-muted',
};

export function ProgressPage() {
  const { state, resetAll } = useProgress();

  const pct = globalProgressPct(state, modules.length);
  const completedCount = modules.filter(
    (m) => moduleStatus(state, m.id).status === 'done'
  ).length;
  const answered = state.stats?.answered || 0;
  const acc = accuracyPct(state);
  const mastered = masteredCount(state);

  const groupPct = (ids) => {
    if (!ids.length) return 0;
    const sum = ids.reduce((a, id) => a + (state.bestScores[id] || 0), 0);
    return Math.round(sum / ids.length);
  };

  const handleReset = () => {
    if (
      window.confirm(
        '¿Seguro que quieres reiniciar todo el progreso? Esta acción no se puede deshacer.'
      )
    ) {
      resetAll();
    }
  };

  return (
    <div className="page">
      <h1>Mi progreso</h1>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <div className="stat-card">
          <span className="stat-num">{pct}%</span>
          <div className="stat-label">Progreso global del curso</div>
        </div>
        <div className="progress progress-lg" style={{ margin: '0.8rem 0' }}>
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: '1.75rem' }}>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('BookOpen', 22)}</div>
          <div className="stat-num">{completedCount}/{modules.length}</div>
          <div className="stat-label">Módulos completados</div>
        </div>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('ListChecks', 22)}</div>
          <div className="stat-num">{answered}</div>
          <div className="stat-label">Preguntas respondidas</div>
        </div>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('Target', 22)}</div>
          <div className="stat-num">{acc}%</div>
          <div className="stat-label">Aciertos</div>
        </div>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('Check', 22)}</div>
          <div className="stat-num">{mastered}</div>
          <div className="stat-label">Preguntas dominadas</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1.75rem', padding: '1rem 1.25rem' }}>
        <span className="card-sub">
          Última actividad: <strong>{formatDate(state.lastActivity)}</strong>
        </span>
      </div>

      <div className="section">
        <h2 className="section-title">Detalle por módulo</h2>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>Módulo</th>
                <th>Estado</th>
                <th>Progreso</th>
                <th>Mejor nota</th>
                <th>Intentos</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m, i) => {
                const st = moduleStatus(state, m.id);
                const best = state.bestScores[m.id];
                const attempts = state.attempts[m.id] || 0;
                return (
                  <tr key={m.id}>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        {getIcon(m.icon, 16)}
                        <strong>M{i + 1}.</strong> {m.title}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${BADGE_CLASS[st.status]}`}>
                        {st.label}
                      </span>
                    </td>
                    <td style={{ minWidth: 140 }}>
                      <div className="progress">
                        <div className="progress-fill" style={{ width: `${st.pct}%` }} />
                      </div>
                      <span className="card-sub" style={{ fontSize: '0.78rem' }}>
                        {st.pct}%
                      </span>
                    </td>
                    <td>{best != null ? `${best}%` : '—'}</td>
                    <td>{attempts}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <span className="section-kicker">{getIcon('BarChart3', 14)} Por áreas</span>
        <h2 className="section-title">Mapa de conocimientos</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
          {GROUPS.map((g) => {
            const p = groupPct(g.modules);
            return (
              <div key={g.label}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem',
                    fontSize: '0.92rem',
                  }}
                >
                  <strong>{g.label}</strong>
                  <span className="card-sub">{p}%</span>
                </div>
                <div className="progress">
                  <div className="progress-fill" style={{ width: `${p}%` }} />
                </div>
              </div>
            );
          })}
        </div>
        <KnowledgeMap />
      </div>

      <div className="section" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ borderColor: 'var(--danger)' }}>
          <h3 className="card-title">{getIcon('AlertTriangle', 18)} Zona de peligro</h3>
          <p className="card-sub">
            Borra todo tu progreso: módulos visitados, notas, intentos y
            preguntas repasadas. Esta acción no se puede deshacer.
          </p>
          <button className="btn" onClick={handleReset}>
            {getIcon('RotateCcw', 16)} Reiniciar todo el progreso
          </button>
        </div>
      </div>
    </div>
  );
}
