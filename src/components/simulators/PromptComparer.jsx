import { useState } from 'react';
import { GitCompareArrows, Check, X } from 'lucide-react';

const POOR = 'Hazme un análisis financiero.';

const RICH =
  'Actúa como analista financiero senior con 15 años de experiencia. Analiza los estados financieros adjuntos de 2024-2025: calcula ratios de liquidez, rentabilidad y endeudamiento, identifica 3 riesgos principales y 3 oportunidades. Entrega el resultado en una tabla con: ratio, valor 2024, valor 2025 y comentario. Máximo 400 palabras, tono profesional, sin jerga innecesaria.';

const CRITERIA = [
  { label: 'Rol definido', poor: false, rich: true },
  { label: 'Objetivo claro', poor: false, rich: true },
  { label: 'Contexto aportado', poor: false, rich: true },
  { label: 'Restricciones', poor: false, rich: true },
  { label: 'Formato de salida', poor: false, rich: true },
];

function Mark({ ok }) {
  return ok ? (
    <span style={{ color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700 }}>
      <Check size={16} /> Sí
    </span>
  ) : (
    <span style={{ color: 'var(--danger, #ef4444)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700 }}>
      <X size={16} /> No
    </span>
  );
}

export function PromptComparer() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      <div className="grid-2" style={{ marginBottom: '1rem' }}>
        <div className="card">
          <h3 className="card-title">Prompt pobre</h3>
          <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--warning)', paddingLeft: '0.75rem' }}>
            «{POOR}»
          </p>
          {revealed && (
            <div style={{ marginTop: '0.75rem' }}>
              {CRITERIA.map((c) => (
                <div key={c.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <span>{c.label}</span>
                  <Mark ok={c.poor} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="card">
          <h3 className="card-title">Prompt mejorado</h3>
          <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--success)', paddingLeft: '0.75rem' }}>
            «{RICH}»
          </p>
          {revealed && (
            <div style={{ marginTop: '0.75rem' }}>
              {CRITERIA.map((c) => (
                <div key={c.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <span>{c.label}</span>
                  <Mark ok={c.rich} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button className="btn btn-primary" onClick={() => setRevealed((r) => !r)}>
          <GitCompareArrows size={16} style={{ marginRight: '0.4rem' }} />
          {revealed ? 'Ocultar comparativa' : 'Comparar'}
        </button>
      </div>

      {revealed && (
        <div className="callout tip">
          <strong>Por qué funciona el mejorado:</strong> reduce la ambigüedad (rol + objetivo concretos),
          guía el formato de salida (tabla con columnas definidas), acota el alcance (3 riesgos, 3 oportunidades,
          máximo 400 palabras) y fija el tono. Menos decisiones para el modelo = respuesta más útil y predecible.
        </div>
      )}
    </div>
  );
}
