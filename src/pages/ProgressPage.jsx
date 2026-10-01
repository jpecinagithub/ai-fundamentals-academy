import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { useModules } from '../hooks/useContent';
import {
  useProgress, moduleStatus, globalProgressPct,
  masteredCount, accuracyPct,
} from '../hooks/ProgressContext';
import { KnowledgeMap } from '../components/KnowledgeMap';
import { CertificateCard } from '../components/CertificateCard';
import { getIcon } from '../utils/icons';
import { formatDate } from '../utils/format';

const GROUPS = [
  { key: 'llm', modules: ['m2', 'm3'] },
  { key: 'context', modules: ['m4', 'm5'] },
  { key: 'memory', modules: ['m6'] },
  { key: 'tools', modules: ['m7', 'm8', 'm9'] },
  { key: 'agents', modules: ['m10', 'm11', 'm12', 'm13'] },
  { key: 'web', modules: ['m14', 'm15', 'm16'] },
  { key: 'apis', modules: ['m17', 'm18', 'm19', 'm20', 'm21', 'm22'] },
  { key: 'github', modules: ['m23', 'm24'] },
  { key: 'vercel', modules: ['m25', 'm26'] },
  { key: 'aiapps', modules: ['m27', 'm28'] },
];

const BADGE_CLASS = {
  done: 'badge-ok',
  progress: 'badge-info',
  todo: 'badge-muted',
};

export function ProgressPage() {
  const { lang, t } = useLang();
  const modules = useModules();
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
    if (window.confirm(t('progresspage.confirmReset'))) {
      resetAll();
    }
  };

  return (
    <div className="page">
      <h1>{t('progresspage.title')}</h1>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <div className="stat-card">
          <span className="stat-num">{pct}%</span>
          <div className="stat-label">{t('progresspage.globalProgress')}</div>
        </div>
        <div className="progress progress-lg" style={{ margin: '0.8rem 0' }}>
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: '1.75rem' }}>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('BookOpen', 22)}</div>
          <div className="stat-num">{completedCount}/{modules.length}</div>
          <div className="stat-label">{t('progresspage.modulesDone')}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('ListChecks', 22)}</div>
          <div className="stat-num">{answered}</div>
          <div className="stat-label">{t('progresspage.questionsAnswered')}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('Target', 22)}</div>
          <div className="stat-num">{acc}%</div>
          <div className="stat-label">{t('progresspage.accuracy')}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-ico">{getIcon('Check', 22)}</div>
          <div className="stat-num">{mastered}</div>
          <div className="stat-label">{t('progresspage.mastered')}</div>
        </div>
      </div>

      <CertificateCard />

      <div className="card" style={{ marginBottom: '1.75rem', padding: '1rem 1.25rem' }}>
        <span className="card-sub">
          {t('progresspage.lastActivity')}{' '}
          <strong>{formatDate(state.lastActivity, lang)}</strong>
        </span>
      </div>

      <div className="section">
        <h2 className="section-title">{t('progresspage.detailTitle')}</h2>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>{t('progresspage.colModule')}</th>
                <th>{t('progresspage.colStatus')}</th>
                <th>{t('progresspage.colProgress')}</th>
                <th>{t('progresspage.colBest')}</th>
                <th>{t('progresspage.colAttempts')}</th>
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
                        {t(`progresspage.status.${st.status}`)}
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
        <span className="section-kicker">{getIcon('BarChart3', 14)} {t('progresspage.areasKicker')}</span>
        <h2 className="section-title">{t('progresspage.knowledgeMap')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
          {GROUPS.map((g) => {
            const p = groupPct(g.modules);
            return (
              <div key={g.key}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem',
                    fontSize: '0.92rem',
                  }}
                >
                  <strong>{t(`progresspage.group.${g.key}`)}</strong>
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
          <h3 className="card-title">{getIcon('AlertTriangle', 18)} {t('progresspage.dangerTitle')}</h3>
          <p className="card-sub">
            {t('progresspage.dangerText')}
          </p>
          <button className="btn" onClick={handleReset}>
            {getIcon('RotateCcw', 16)} {t('progresspage.resetButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
