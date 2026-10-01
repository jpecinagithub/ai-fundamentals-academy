import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { useQuestions } from '../hooks/useContent';
import { useProgress } from '../hooks/ProgressContext';
import { Quiz } from '../components/Quiz';
import { getIcon } from '../utils/icons';
import { pickRandom, examBand } from '../utils/format';

export function FinalExam() {
  const { lang, t } = useLang();
  const questions = useQuestions();
  const { state, recordFinal } = useProgress();
  const [started, setStarted] = useState(false);
  const [seed, setSeed] = useState(0);

  const BANDS = [
    { range: '90–100', label: t('finalexam.band.advanced') },
    { range: '75–89', label: t('finalexam.band.good') },
    { range: '60–74', label: t('finalexam.band.enough') },
    { range: t('finalexam.band.rangeLow'), label: t('finalexam.band.repeat') },
  ];

  const start = () => {
    setSeed(Date.now());
    setStarted(true);
  };

  if (!started) {
    return (
      <div className="page-narrow">
        <h1>{t('finalexam.title')}</h1>
        <div className="card">
          <h2 className="card-title">
            {getIcon('GraduationCap', 20)} {t('finalexam.cardTitle')}
          </h2>
          <p className="card-sub">{t('finalexam.rulesTitle')}</p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li>{t('finalexam.rule1')}</li>
            <li>{t('finalexam.rule2')}</li>
            <li>{t('finalexam.rule3')}</li>
            <li>{t('finalexam.rule4')}</li>
          </ul>

          <h3 style={{ marginTop: '1.25rem' }}>{t('finalexam.bandsTitle')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {BANDS.map((b) => (
              <div
                key={b.range}
                style={{ display: 'flex', gap: '0.7rem', alignItems: 'baseline' }}
              >
                <span className="badge badge-primary" style={{ minWidth: 84, justifyContent: 'center' }}>
                  {b.range}
                </span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>

          {state.bestScores.final != null && (
            <p style={{ marginTop: '1rem' }}>
              {t('finalexam.bestSoFar')} <strong>{state.bestScores.final}%</strong>{' '}
              <span className="card-sub">
                ({examBand(state.bestScores.final, lang).label})
              </span>
            </p>
          )}

          <button
            className="btn btn-primary btn-block"
            onClick={start}
            style={{ marginTop: '1rem' }}
          >
            {getIcon('Play', 16)} {t('finalexam.start')}
          </button>
          <p className="card-sub" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
            {t('finalexam.repeatNote')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-narrow">
      <Quiz
        key={seed}
        questions={pickRandom(questions, 50)}
        title={t('finalexam.title')}
        final
        onDone={({ correct, total, failed }) =>
          recordFinal({ correct, total, failedQs: failed })
        }
      />
    </div>
  );
}
