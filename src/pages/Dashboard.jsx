import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../data/modules';
import {
  useProgress, moduleStatus, globalProgressPct,
  pendingReview, accuracyPct,
} from '../hooks/ProgressContext';
import { getIcon } from '../utils/icons';
import { CertificateCard } from '../components/CertificateCard';

const STAGES = [
  'Fundamentos', 'LLM', 'Prompts y contexto', 'Tools y MCP', 'Agentes',
  'Arquitectura', 'APIs', 'GitHub', 'Vercel', 'Aplicaciones con IA',
];

export function Dashboard() {
  const { state } = useProgress();

  const pct = globalProgressPct(state, modules.length);
  const completedIds = Object.keys(state.completed || {}).filter((id) =>
    modules.some((m) => m.id === id)
  );
  const answered = state.stats?.answered || 0;
  const acc = accuracyPct(state);
  const pending = pendingReview(state);
  const lastMod = state.lastVisited
    ? modules.find((m) => m.id === state.lastVisited)
    : null;

  const stats = [
    {
      icon: 'BookOpen',
      num: `${completedIds.length}/${modules.length}`,
      label: 'Módulos completados',
      to: '/curso',
    },
    {
      icon: 'ListChecks',
      num: answered,
      label: 'Preguntas respondidas',
      to: '/tests',
    },
    {
      icon: 'Target',
      num: `${acc}%`,
      label: 'Porcentaje de aciertos',
      to: '/progreso',
    },
    {
      icon: 'RotateCcw',
      num: pending.length,
      label: 'Pendientes de repasar',
      to: '/repasar',
    },
  ];

  return (
    <div className="page">
      <div className="hero">
        <h1>AI Fundamentals Academy</h1>
        <p>
          Un curso completo de fundamentos de inteligencia artificial moderna:
          desde cómo piensan los modelos de lenguaje hasta construir tus
          propias aplicaciones con LLM, paso a paso y con práctica real.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: '1rem' }}>
        <div className="card">
          <h3 className="card-title">{getIcon('BarChart3', 18)} Tu progreso</h3>
          <div className="stat-card">
            <span className="stat-num">{pct}%</span>
          </div>
          <div className="progress progress-lg" style={{ margin: '0.6rem 0' }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="card-sub" style={{ margin: 0 }}>
            {completedIds.length} de {modules.length} módulos completados
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">{getIcon('Play', 18)} Continúa aprendiendo</h3>
          {lastMod ? (
            <>
              <p className="card-sub">Último módulo visitado</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
                {getIcon(lastMod.icon, 20)} {lastMod.title}
              </p>
              <Link className="btn btn-primary" to={`/modulo/${lastMod.id}`}>
                Continuar curso {getIcon('ArrowRight', 16)}
              </Link>
            </>
          ) : (
            <>
              <p className="card-sub">
                Empieza desde el principio con el primer módulo del curso.
              </p>
              <Link className="btn btn-primary" to="/modulo/m1">
                Empezar el curso {getIcon('ArrowRight', 16)}
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: '1.75rem' }}>
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.to}
            className="card hoverable stat-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="stat-ico">{getIcon(s.icon, 22)}</div>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </Link>
        ))}
      </div>

      <CertificateCard />

      <div className="section">
        <span className="section-kicker">{getIcon('Map', 14)} Itinerario</span>
        <h2 className="section-title">Ruta de aprendizaje</h2>
        <div className="route">
          {STAGES.map((stageName, i) => {
            const stageModules = modules.filter((m) => m.stage === stageName);
            const done = stageModules.filter(
              (m) => moduleStatus(state, m.id).status === 'done'
            ).length;
            const allDone = stageModules.length > 0 && done === stageModules.length;
            const isCurrent =
              !allDone &&
              stageModules.some((m) => m.id === state.lastVisited);
            const target =
              stageModules.find(
                (m) => moduleStatus(state, m.id).status !== 'done'
              ) || stageModules[0];
            return (
              <React.Fragment key={stageName}>
                {i > 0 && <div className="route-connector" />}
                <Link
                  to={target ? `/modulo/${target.id}` : '/curso'}
                  className={`route-step${allDone ? ' done' : ''}${isCurrent ? ' current' : ''}`}
                >
                  <span className="rs-dot">
                    {allDone ? getIcon('Check', 16) : i + 1}
                  </span>
                  <span>
                    <strong>{stageName}</strong>
                    <div className="card-sub">
                      {done}/{stageModules.length} módulos
                    </div>
                  </span>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
