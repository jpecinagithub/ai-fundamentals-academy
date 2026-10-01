import React, { useState } from 'react';
import { questions } from '../data/questions';
import { useProgress } from '../hooks/ProgressContext';
import { Quiz } from '../components/Quiz';
import { getIcon } from '../utils/icons';
import { pickRandom, examBand } from '../utils/format';

const BANDS = [
  { range: '90–100', label: 'Dominio avanzado de fundamentos' },
  { range: '75–89', label: 'Buen dominio' },
  { range: '60–74', label: 'Conocimientos suficientes, conviene repasar' },
  { range: 'Menos de 60', label: 'Recomendado repetir módulos fundamentales' },
];

export function FinalExam() {
  const { state, recordFinal } = useProgress();
  const [started, setStarted] = useState(false);
  const [seed, setSeed] = useState(0);

  const start = () => {
    setSeed(Date.now());
    setStarted(true);
  };

  if (!started) {
    return (
      <div className="page-narrow">
        <h1>Examen final</h1>
        <div className="card">
          <h2 className="card-title">
            {getIcon('GraduationCap', 20)} AI Fundamentals Final Exam
          </h2>
          <p className="card-sub">Reglas del examen:</p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li>50 preguntas aleatorias de todos los módulos del curso.</li>
            <li>Solo tienes un intento por pregunta: elige con calma.</li>
            <li>
              Al terminar verás tu nota, la banda de resultado y la explicación
              de cada fallo.
            </li>
            <li>Los fallos se añaden a tu lista de repaso.</li>
          </ul>

          <h3 style={{ marginTop: '1.25rem' }}>Bandas de resultado</h3>
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
              Mejor nota hasta ahora: <strong>{state.bestScores.final}%</strong>{' '}
              <span className="card-sub">
                ({examBand(state.bestScores.final).label})
              </span>
            </p>
          )}

          <button
            className="btn btn-primary btn-block"
            onClick={start}
            style={{ marginTop: '1rem' }}
          >
            {getIcon('Play', 16)} Comenzar examen
          </button>
          <p className="card-sub" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
            Puedes repetir el examen cuando quieras.
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
        title="Examen final"
        final
        onDone={({ correct, total, failed }) =>
          recordFinal({ correct, total, failedQs: failed })
        }
      />
    </div>
  );
}
