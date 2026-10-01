import React, { useMemo, useRef, useState } from 'react';
import { Check, X, ArrowRight, ClipboardList } from 'lucide-react';
import { shuffle, cx } from '../utils/format';
import { useLang } from '../i18n/LanguageContext';
import { QuizResults } from './QuizResults';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Quiz — interactive multiple-choice test, one question at a time.
 * Option order is shuffled per question at display time; the original
 * correctIndex is re-mapped so feedback stays accurate.
 * On finish it renders <QuizResults> and calls onDone({ correct, total, failed })
 * exactly once, where failed holds the ORIGINAL question objects.
 */
export function Quiz({ questions, moduleId = null, title = 'Test', onDone = () => {}, final = false }) {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null); // displayed position (0..3)
  const [answers, setAnswers] = useState({});     // { [qid]: chosenIndex (original) }
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const doneFired = useRef(false);

  const total = questions ? questions.length : 0;

  // Stable per-question shuffle: order[d] = original option index shown at position d.
  const display = useMemo(() => {
    if (!questions) return [];
    return questions.map((q) => {
      const order = shuffle([0, 1, 2, 3].slice(0, q.options.length));
      return { q, order, correctDisplay: order.indexOf(q.correctIndex) };
    });
  }, [questions]);

  const empty = total === 0;

  function fireDone(finalCorrect, finalAnswers) {
    if (doneFired.current) return;
    doneFired.current = true;
    const failed = (questions || []).filter(
      (q) => finalAnswers[q.id] !== q.correctIndex,
    );
    onDone({ correct: finalCorrect, total, failed });
  }

  function choose(d) {
    if (selected !== null) return; // locked after answering
    const { q, order } = display[idx];
    const originalIndex = order[d];
    const isCorrect = originalIndex === q.correctIndex;
    setSelected(d);
    setAnswers((prev) => ({ ...prev, [q.id]: originalIndex }));
    if (isCorrect) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (idx + 1 < total) {
      setIdx(idx + 1);
      setSelected(null);
    } else {
      setDone(true);
      fireDone(correctCount, answers);
    }
  }

  function retry() {
    setIdx(0);
    setSelected(null);
    setAnswers({});
    setCorrectCount(0);
    setDone(false);
    doneFired.current = false;
  }

  if (empty) {
    return (
      <div className="card">
        <div className="empty-state">
          <ClipboardList size={36} className="big-ico" />
          <p><strong>{t('quiz.empty.title')}</strong></p>
          <p className="card-sub">{t('quiz.empty.subtitle')}</p>
        </div>
      </div>
    );
  }

  if (done) {
    const failed = questions.filter((q) => answers[q.id] !== q.correctIndex);
    return (
      <QuizResults
        correct={correctCount}
        total={total}
        failed={failed}
        answers={answers}
        onRetry={retry}
        retryLabel={t('quiz.retryLabel')}
        final={final}
      />
    );
  }

  const { q, order, correctDisplay } = display[idx];
  const answered = selected !== null;
  const pickedOriginal = answered ? order[selected] : null;
  const isOk = answered && pickedOriginal === q.correctIndex;
  const pct = Math.round(((idx + (answered ? 1 : 0)) / total) * 100);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.6rem' }}>
        <span className="card-sub">{title}</span>
        <span className="badge badge-info">{t('quiz.questionOf', { current: idx + 1, total })}</span>
      </div>

      <div className="progress" style={{ marginBottom: '1.2rem' }}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <h3 style={{ margin: '0 0 1rem', fontSize: '1.15rem', lineHeight: 1.45 }}>{q.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {order.map((originalIndex, d) => {
          const cls = cx(
            'quiz-option',
            answered && d === selected && isOk && 'correct',
            answered && d === selected && !isOk && 'wrong',
            answered && d === correctDisplay && d !== selected && 'correct',
            answered && d !== selected && d !== correctDisplay && 'dimmed',
          );
          return (
            <button
              key={d}
              type="button"
              className={cls}
              onClick={() => choose(d)}
              disabled={answered}
            >
              <span className="opt-letter">{LETTERS[d]}</span>
              <span>{q.options[originalIndex]}</span>
              {answered && d === correctDisplay && <Check size={18} />}
              {answered && d === selected && !isOk && <X size={18} />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="fade-in" style={{ marginTop: '1.1rem' }}>
          <div className={cx('feedback', isOk ? 'ok' : 'ko')}>
            {isOk ? <Check size={18} /> : <X size={18} />}
            <strong>{isOk ? t('quiz.correct') : t('quiz.incorrect')}</strong>
          </div>
          {q.explanation && (
            <p style={{ marginTop: '0.6rem', color: 'var(--text-muted)', fontSize: '0.93rem' }}>
              {q.explanation}
            </p>
          )}
          <div style={{ marginTop: '0.9rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-primary" onClick={next}>
              {idx + 1 === total ? t('quiz.viewResults') : t('quiz.next')}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
