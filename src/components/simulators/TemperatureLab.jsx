import { useState } from 'react';
import { Thermometer, Code2, Lightbulb } from 'lucide-react';

const PROMPT = 'Escribe una frase sobre el mar al amanecer.';

const LEVELS = {
  determinista: [
    'El mar al amanecer refleja la luz del sol sobre sus olas tranquilas.',
    'El mar al amanecer muestra el reflejo del sol en aguas serenas.',
    'Al amanecer, el mar refleja la luz solar sobre sus olas calmadas.',
  ],
  equilibrado: [
    'El mar al amanecer se tiñe de dorado mientras las olas susurran en la orilla.',
    'Al amanecer, la niebla se disipa y el mar despierta en tonos cobrizos.',
    'Un amanecer plateado acaricia el mar y las gaviotas anuncian el día.',
  ],
  creativo: [
    'El amanecer derrama cobre fundido sobre un mar que sueña despierto.',
    'El mar, pintor sonámbulo, firma el alba con brochazos de fuego líquido.',
    'Entre la bruma, el horizonte bebe luz y el mar inventa un idioma de espuma.',
  ],
};

function labelFor(t) {
  if (t <= 0.3) return { key: 'determinista', name: 'Determinista', Icon: Code2 };
  if (t <= 0.7) return { key: 'equilibrado', name: 'Equilibrado', Icon: Thermometer };
  return { key: 'creativo', name: 'Creativo', Icon: Lightbulb };
}

export function TemperatureLab() {
  const [temp, setTemp] = useState(0.7);
  const { key, name, Icon } = labelFor(temp);

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Thermometer size={18} /> Laboratorio de temperatura</h3>
        <p className="card-sub">
          Prompt fijo: <strong>«{PROMPT}»</strong>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temp}
            onChange={(e) => setTemp(parseFloat(e.target.value))}
            className="slider"
            style={{ flex: 1 }}
          />
          <span className="badge badge-primary" style={{ minWidth: '150px', justifyContent: 'center' }}>
            <Icon size={14} style={{ marginRight: '0.35rem' }} />
            {temp.toLocaleString('es-ES', { minimumFractionDigits: 1 })} · {name}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>0 · Determinista</span>
          <span>0,5 · Equilibrado</span>
          <span>1 · Creativo</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">Respuestas simuladas (temperatura {temp.toLocaleString('es-ES', { minimumFractionDigits: 1 })})</h3>
        {LEVELS[key].map((frase, i) => (
          <div
            key={i}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1rem',
              marginTop: '0.6rem',
              fontStyle: 'italic',
            }}
          >
            «{frase}»
          </div>
        ))}
      </div>

      <div className="callout info">
        <strong>Importante:</strong> la temperatura no hace al modelo «más inteligente», solo más
        o menos <em>predecible</em>. Con temperatura baja, el muestreo favorece siempre los tokens
        más probables (ideal para código, datos o respuestas fácticas). Con temperatura alta, los
        tokens menos probables aparecen más a menudo (ideal para brainstorming o escritura creativa,
        a cambio de más riesgo de errores).
      </div>
    </div>
  );
}
