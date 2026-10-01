import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, BookOpen, Check, X } from 'lucide-react';
import { quizBand, examBand, cx } from '../utils/format';

/**
 * QuizResults — score ring, performance band, list of failed questions
 * with your answer vs the correct one, retry button and review link.
 */
export function QuizResults({
  correct,
  total,
  failed = [],
  answers = null,
  onRetry,
  retryLabel = 'Reintentar test',
  final = false,
}) {
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  const band = final ? examBand(pct) : quizBand(pct);
  const bandLabel = final ? band.label : band;
  const bandTone = final ? band.tone : (pct >= 70 ? 'ok' : 'warn');

  return (
    <div className="card">
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="score-ring" style={{ '--pct': pct }}>
          <span className="score-val">{pct}%</span>
        </div>
        <div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>
            {correct} / {total}
          </div>
          <div style={{ marginTop: '0.4rem' }}>
            <span className={cx('badge', bandTone === 'ok' && 'badge-ok', bandTone === 'warn' && 'badge-warn', bandTone === 'ko' && 'badge-muted')}>
              {bandLabel}
            </span>
          </div>
        </div>
      </div>

      {failed.length > 0 ? (
        <div style={{ marginTop: '1.4rem' }}>
          <h3 className="card-title">Preguntas falladas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '0.8rem' }}>
            {failed.map((q) => {
              const chosen = answers ? answers[q.id] : undefined;
              return (
                <div key={q.id} className="callout warn" style={{ display: 'block' }}>
                  <p style={{ fontWeight: 700, margin: '0 0 0.5rem' }}>{q.question}</p>
                  {typeof chosen === 'number' && (
                    <p style={{ margin: '0 0 0.35rem', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      <X size={15} />
                      <span>
                        <strong>Tu respuesta:</strong> {q.options[chosen]}
                      </span>
                    </p>
                  )}
                  <p style={{ margin: '0 0 0.35rem', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <Check size={15} />
                    <span>
                      <strong>Respuesta correcta:</strong> {q.options[q.correctIndex]}
                    </span>
                  </p>
                  {q.explanation && (
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                      {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="callout tip" style={{ marginTop: '1.4rem' }}>
          <Check size={16} className="callout-ico" />
          <span><strong>Pleno:</strong> no has fallado ninguna pregunta. ¡Enhorabuena!</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.7rem', marginTop: '1.4rem', flexWrap: 'wrap' }}>
        {onRetry && (
          <button type="button" className="btn btn-primary" onClick={onRetry}>
            <RotateCcw size={16} />
            {retryLabel}
          </button>
        )}
        {failed.length > 0 && (
          <Link to="/repasar" className="btn btn-ghost">
            <BookOpen size={16} />
            Repasar conceptos fallados
          </Link>
        )}
      </div>
    </div>
  );
}
