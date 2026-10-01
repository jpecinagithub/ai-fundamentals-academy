import React, { useState } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import { cx } from '../utils/format';
import { useLang } from '../i18n/LanguageContext';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * MiniExercise — small self-contained exercise card: prompt + question,
 * 4 clickable options, instant feedback + explanation, retry button.
 */
export function MiniExercise({ prompt, question, options, correctIndex, explanation }) {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);

  const answered = selected !== null;
  const isOk = answered && selected === correctIndex;

  function choose(i) {
    if (answered) return;
    setSelected(i);
  }

  function retry() {
    setSelected(null);
  }

  return (
    <div className="card">
      {prompt && <p className="card-sub" style={{ marginTop: 0 }}>{prompt}</p>}
      <h3 style={{ margin: '0 0 1rem', fontSize: '1.08rem', lineHeight: 1.45 }}>{question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {(options || []).map((opt, i) => {
          const cls = cx(
            'quiz-option',
            answered && i === selected && isOk && 'correct',
            answered && i === selected && !isOk && 'wrong',
            answered && i === correctIndex && i !== selected && 'correct',
            answered && i !== selected && i !== correctIndex && 'dimmed',
          );
          return (
            <button
              key={i}
              type="button"
              className={cls}
              onClick={() => choose(i)}
              disabled={answered}
            >
              <span className="opt-letter">{LETTERS[i] || i + 1}</span>
              <span>{opt}</span>
              {answered && i === correctIndex && <Check size={18} />}
              {answered && i === selected && !isOk && <X size={18} />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="fade-in" style={{ marginTop: '1.1rem' }}>
          <div className={cx('feedback', isOk ? 'ok' : 'ko')}>
            {isOk ? <Check size={18} /> : <X size={18} />}
            <strong>{isOk ? t('miniexercise.correct') : t('miniexercise.incorrect')}</strong>
          </div>
          {explanation && (
            <p style={{ marginTop: '0.6rem', color: 'var(--text-muted)', fontSize: '0.93rem' }}>
              {explanation}
            </p>
          )}
          <div style={{ marginTop: '0.9rem' }}>
            <button type="button" className="btn btn-ghost" onClick={retry}>
              <RotateCcw size={16} />
              {t('miniexercise.retry')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
