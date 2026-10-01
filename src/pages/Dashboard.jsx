import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useModules, useStages } from '../hooks/useContent';
import {
  useProgress, moduleStatus, globalProgressPct,
  pendingReview, accuracyPct,
} from '../hooks/ProgressContext';
import { getIcon } from '../utils/icons';
import { CertificateCard } from '../components/CertificateCard';

export function Dashboard() {
  const { state } = useProgress();
  const { t } = useLang();
  const modules = useModules();
  const stages = useStages();

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
      label: t('dashboard.stats.modulesCompleted'),
      to: '/curso',
    },
    {
      icon: 'ListChecks',
      num: answered,
      label: t('dashboard.stats.questionsAnswered'),
      to: '/tests',
    },
    {
      icon: 'Target',
      num: `${acc}%`,
      label: t('dashboard.stats.accuracy'),
      to: '/progreso',
    },
    {
      icon: 'RotateCcw',
      num: pending.length,
      label: t('dashboard.stats.pendingReview'),
      to: '/repasar',
    },
  ];

  return (
    <div className="page">
      <div className="hero">
        <h1>AI Fundamentals Academy</h1>
        <p>{t('dashboard.heroText')}</p>
      </div>

      <div className="grid-2" style={{ marginBottom: '1rem' }}>
        <div className="card">
          <h3 className="card-title">{getIcon('BarChart3', 18)} {t('dashboard.yourProgress')}</h3>
          <div className="stat-card">
            <span className="stat-num">{pct}%</span>
          </div>
          <div className="progress progress-lg" style={{ margin: '0.6rem 0' }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="card-sub" style={{ margin: 0 }}>
            {t('dashboard.modulesProgress', { done: completedIds.length, total: modules.length })}
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">{getIcon('Play', 18)} {t('dashboard.keepLearning')}</h3>
          {lastMod ? (
            <>
              <p className="card-sub">{t('dashboard.lastVisited')}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
                {getIcon(lastMod.icon, 20)} {lastMod.title}
              </p>
              <Link className="btn btn-primary" to={`/modulo/${lastMod.id}`}>
                {t('dashboard.continueCourse')} {getIcon('ArrowRight', 16)}
              </Link>
            </>
          ) : (
            <>
              <p className="card-sub">
                {t('dashboard.startFromBeginning')}
              </p>
              <Link className="btn btn-primary" to="/modulo/m1">
                {t('dashboard.startCourse')} {getIcon('ArrowRight', 16)}
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
        <span className="section-kicker">{getIcon('Map', 14)} {t('dashboard.itinerary')}</span>
        <h2 className="section-title">{t('dashboard.learningPath')}</h2>
        <div className="route">
          {stages.map((stageName, i) => {
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
                      {t('dashboard.stageModules', { done, total: stageModules.length })}
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
