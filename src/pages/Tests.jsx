import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useModules, useQuestions } from '../hooks/useContent';
import { useProgress } from '../hooks/ProgressContext';
import { Quiz } from '../components/Quiz';
import { getIcon } from '../utils/icons';
import { pickRandom } from '../utils/format';

export function Tests() {
  const { state, recordQuiz } = useProgress();
  const { t } = useLang();
  const modules = useModules();
  const questions = useQuestions();
  const [openId, setOpenId] = useState(null);
  const [seed, setSeed] = useState(0);

  const toggle = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setSeed(Date.now());
      setOpenId(id);
    }
  };

  return (
    <div className="page">
      <h1>{t('tests.title')}</h1>
      <p className="card-sub" style={{ maxWidth: 680 }}>
        {t('tests.intro')}
      </p>

      <div
        className="card"
        style={{
          marginBottom: '1.5rem',
          borderColor: 'var(--primary)',
          background: 'var(--primary-soft)',
        }}
      >
        <h2 className="card-title">{getIcon('GraduationCap', 20)} AI Fundamentals Final Exam</h2>
        <p className="card-sub">
          {t('tests.finalBands')}
        </p>
        {state.bestScores.final != null && (
          <p>
            {t('tests.bestScore')} <strong>{state.bestScores.final}%</strong>
          </p>
        )}
        <Link className="btn btn-primary" to="/examen-final">
          {t('tests.goExam')} {getIcon('ArrowRight', 16)}
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {modules.map((m, i) => {
          const best = state.bestScores[m.id];
          const attempts = state.attempts[m.id] || 0;
          const isOpen = openId === m.id;
          return (
            <div key={m.id} className="card" style={{ padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ color: 'var(--primary-strong)', flexShrink: 0 }}>
                  {getIcon(m.icon, 20)}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong>
                    {t('tests.moduleTitle', { n: i + 1, title: m.title })}
                  </strong>
                  <div className="card-sub">
                    {best != null ? (
                      <>{t('tests.bestScore')} <strong>{best}%</strong> · </>
                    ) : (
                      <>{t('tests.noScore')} · </>
                    )}
                    {attempts} {attempts === 1 ? t('tests.attempt') : t('tests.attempts')}
                  </div>
                </div>
                <button className="btn btn-sm" onClick={() => toggle(m.id)}>
                  {isOpen ? t('tests.close') : t('tests.takeQuiz')}
                </button>
              </div>
              {isOpen && (
                <div
                  style={{
                    marginTop: '1rem',
                    borderTop: '1px solid var(--border-soft)',
                    paddingTop: '1rem',
                  }}
                >
                  <Quiz
                    key={seed}
                    questions={pickRandom(
                      questions.filter((q) => q.moduleId === m.id),
                      10
                    )}
                    moduleId={m.id}
                    title={t('tests.quizTitle', { title: m.title })}
                    onDone={({ correct, total, failed }) =>
                      recordQuiz(m.id, { correct, total, failedQs: failed })
                    }
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
