import { useState } from 'react';
import { Dices, RotateCcw } from 'lucide-react';

const PROMPT = 'La capital de Francia es';

const STEPS = [
  {
    prompt: PROMPT,
    dist: [
      { token: 'París', p: 97 },
      { token: 'Lyon', p: 1 },
      { token: 'Madrid', p: 0.1 },
      { token: 'Roma', p: 0.1 },
    ],
  },
  {
    prompt: null,
    dist: [
      { token: 'es', p: 88 },
      { token: 'está', p: 6 },
      { token: 'se', p: 3 },
      { token: 'fue', p: 3 },
    ],
  },
  {
    prompt: null,
    dist: [
      { token: 'una', p: 70 },
      { token: 'la', p: 20 },
      { token: 'famosa', p: 8 },
      { token: 'conocida', p: 2 },
    ],
  },
  {
    prompt: null,
    dist: [
      { token: 'ciudad', p: 60 },
      { token: 'metrópolis', p: 25 },
      { token: 'capital', p: 10 },
      { token: 'joya', p: 5 },
    ],
  },
];

function weightedPick(dist) {
  const total = dist.reduce((s, d) => s + d.p, 0);
  let r = Math.random() * total;
  for (const d of dist) {
    r -= d.p;
    if (r <= 0) return d;
  }
  return dist[dist.length - 1];
}

export function TokenProbability() {
  const [step, setStep] = useState(0);
  const [generated, setGenerated] = useState([]);
  const [lastPicked, setLastPicked] = useState(null);
  const finished = step >= STEPS.length;

  const dist = finished ? null : STEPS[step].dist;
  const maxP = dist ? Math.max(...dist.map((d) => d.p)) : 0;

  const generar = () => {
    if (finished) return;
    const picked = weightedPick(dist);
    setGenerated((g) => [...g, picked.token]);
    setLastPicked(picked.token);
    setStep((s) => s + 1);
  };

  const reiniciar = () => {
    setStep(0);
    setGenerated([]);
    setLastPicked(null);
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Dices size={18} /> El modelo muestrea probabilidades</h3>
        <p className="card-sub">
          Prompt: <strong>«{PROMPT}...»</strong>. Cada vez que pulsas «Generar siguiente token»,
          el modelo elige al azar <em>ponderado</em> entre los candidatos y pasa a la siguiente distribución.
        </p>
        <p style={{ fontSize: '1.05rem', marginTop: '0.75rem' }}>
          <strong>Texto generado:</strong>{' '}
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            {PROMPT}{generated.length > 0 ? ' ' + generated.join(' ') : ''}
            {!finished && ' ▌'}
          </span>
        </p>
      </div>

      {!finished && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <h3 className="card-title">Distribución de probabilidad · paso {step + 1}</h3>
          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {dist.map((d) => (
              <div key={d.token} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '90px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {d.token}
                </span>
                <div className="progress" style={{ flex: 1 }}>
                  <div
                    className="progress-fill"
                    style={{
                      width: `${Math.max(1, (d.p / maxP) * 100)}%`,
                      background: d.token === lastPicked ? 'var(--primary)' : 'var(--info)',
                    }}
                  />
                </div>
                <span style={{ width: '70px', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>
                  {d.p.toLocaleString('es-ES')} %
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button className="btn btn-primary" onClick={generar}>
              Generar siguiente token
            </button>
            <button className="btn" onClick={reiniciar}>
              <RotateCcw size={15} style={{ marginRight: '0.4rem' }} /> Reiniciar
            </button>
          </div>
        </div>
      )}

      {finished && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <h3 className="card-title">Secuencia completada</h3>
          <p>«{PROMPT} {generated.join(' ')}». Prueba a reiniciar: a veces saldrá «Lyon» o «Roma».</p>
          <button className="btn" onClick={reiniciar} style={{ marginTop: '0.75rem' }}>
            <RotateCcw size={15} style={{ marginRight: '0.4rem' }} /> Reiniciar
          </button>
        </div>
      )}

      <div className="callout info">
        <strong>Idea clave:</strong> el modelo no «sabe» que la capital es París. En cada paso
        asigna probabilidades a miles de tokens candidatos y <em>muestrea</em> uno. Con un 97 %,
        casi siempre sale «París»... pero a veces saldrá «Lyon». Así nacen las alucinaciones.
      </div>
    </div>
  );
}
