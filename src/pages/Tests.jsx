import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../data/modules';
import { questions } from '../data/questions';
import { useProgress } from '../hooks/ProgressContext';
import { Quiz } from '../components/Quiz';
import { getIcon } from '../utils/icons';
import { pickRandom } from '../utils/format';

export function Tests() {
  const { state, recordQuiz } = useProgress();
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
      <h1>Tests</h1>
      <p className="card-sub" style={{ maxWidth: 680 }}>
        Pon a prueba lo aprendido con un test por módulo de 10 preguntas
        aleatorias, o atrévete con el examen final completo.
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
          50 preguntas aleatorias de todos los módulos. Bandas de resultado:
          90–100 Dominio avanzado · 75–89 Buen dominio · 60–74 Suficientes ·
          menos de 60 Repetir fundamentos.
        </p>
        {state.bestScores.final != null && (
          <p>
            Mejor nota: <strong>{state.bestScores.final}%</strong>
          </p>
        )}
        <Link className="btn btn-primary" to="/examen-final">
          Ir al examen {getIcon('ArrowRight', 16)}
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
                    Módulo {i + 1} · {m.title}
                  </strong>
                  <div className="card-sub">
                    {best != null ? (
                      <>Mejor nota: <strong>{best}%</strong> · </>
                    ) : (
                      'Sin nota todavía · '
                    )}
                    {attempts} {attempts === 1 ? 'intento' : 'intentos'}
                  </div>
                </div>
                <button className="btn btn-sm" onClick={() => toggle(m.id)}>
                  {isOpen ? 'Cerrar' : 'Hacer test'}
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
                    title={`Test · ${m.title}`}
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
