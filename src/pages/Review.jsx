import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../data/modules';
import { useProgress, pendingReview } from '../hooks/ProgressContext';
import { RichText } from '../components/RichText';
import { getIcon } from '../utils/icons';

export function Review() {
  const { state, answerReview } = useProgress();
  // qid -> { picked, ok, streak, mastered }
  const [results, setResults] = useState({});

  const pending = pendingReview(state);
  const mastered = Object.values(state.failed || {}).filter((f) => f.mastered);

  // Preguntas dominadas en esta sesión: se siguen mostrando con el mensaje "¡Dominado!"
  const sessionMastered = Object.entries(results)
    .filter(([, r]) => r.mastered)
    .map(([qid]) => state.failed[qid])
    .filter(Boolean)
    .filter((q) => !pending.some((p) => p.id === q.id));
  const visible = [...pending, ...sessionMastered];

  const moduleTitle = (moduleId) =>
    modules.find((m) => m.id === moduleId)?.title || moduleId;

  const answer = (q, idx) => {
    if (results[q.id]) return; // ya respondida en esta sesión
    const ok = idx === q.correctIndex;
    const prev = state.failed[q.id];
    const returned = answerReview(q.id, ok);
    const streak = ok ? (prev?.streak || 0) + 1 : 0;
    const entry = returned && typeof returned === 'object' ? returned : {};
    setResults((r) => ({
      ...r,
      [q.id]: {
        picked: idx,
        ok,
        streak: entry.streak != null ? entry.streak : streak,
        mastered: entry.mastered != null ? entry.mastered : streak >= 2,
      },
    }));
  };

  return (
    <div className="page">
      <h1>Repasar errores</h1>
      <p className="card-sub" style={{ maxWidth: 680 }}>
        Aquí aparecen las preguntas que has fallado en los tests. Responde bien
        una pregunta <strong>2 veces</strong> para marcarla como{' '}
        <strong>Dominada</strong> y sacarla de la lista.
      </p>

      {visible.length === 0 ? (
        <div className="empty-state">
          <div className="big-ico">{getIcon('Check', 48)}</div>
          <h3>Sin errores pendientes</h3>
          <p>
            Cuando falles preguntas en los tests aparecerán aquí para que puedas
            repasarlas.
          </p>
          <Link className="btn btn-primary" to="/tests">
            Ir a los tests
          </Link>
        </div>
      ) : (
        <div className="grid-2">
          {visible.map((q) => {
            const res = results[q.id];
            return (
              <div key={q.id} className="card">
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary">{moduleTitle(q.moduleId)}</span>
                  {q.concept && <span className="badge badge-muted">{q.concept}</span>}
                  {q.fails > 1 && (
                    <span className="badge badge-warn">{q.fails} fallos</span>
                  )}
                </div>
                <p style={{ fontWeight: 600 }}>{q.question}</p>
                <div>
                  {(q.options || []).map((opt, idx) => {
                    let cls = 'quiz-option';
                    if (res) {
                      if (idx === q.correctIndex) cls += ' correct';
                      else if (idx === res.picked) cls += ' wrong';
                      else cls += ' dimmed';
                    }
                    return (
                      <button
                        key={idx}
                        className={cls}
                        disabled={!!res}
                        onClick={() => answer(q, idx)}
                      >
                        <span className="opt-letter">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {res && (
                  <div className={`feedback ${res.ok ? 'ok' : 'ko'}`}>
                    <span style={{ flexShrink: 0, marginTop: '0.15rem' }}>
                      {getIcon(res.ok ? 'Check' : 'X', 18)}
                    </span>
                    <div>
                      <strong>
                        {res.ok
                          ? res.mastered
                            ? '¡Dominado!'
                            : `¡Correcto! Racha: ${res.streak}/2`
                          : 'Incorrecto. La racha se reinicia.'}
                      </strong>
                      {q.explanation && (
                        <div style={{ marginTop: '0.4rem' }}>
                          <RichText text={q.explanation} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {mastered.length > 0 && (
        <div className="section" style={{ marginTop: '2.25rem' }}>
          <span className="section-kicker">{getIcon('Trophy', 14)} Logros</span>
          <h2 className="section-title">Dominados ({mastered.length})</h2>
          <div className="grid-2">
            {mastered.map((q) => (
              <div
                key={q.id}
                className="card"
                style={{
                  padding: '0.9rem 1.1rem',
                  display: 'flex',
                  gap: '0.7rem',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: 'var(--success)', flexShrink: 0, marginTop: '0.15rem' }}>
                  {getIcon('Check', 18)}
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                    {q.question}
                  </div>
                  <div className="card-sub" style={{ fontSize: '0.82rem' }}>
                    {moduleTitle(q.moduleId)}
                    {q.concept ? ` · ${q.concept}` : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
