import { useState } from 'react';
import { Thermometer, Code2, Lightbulb } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

function labelFor(temp) {
  if (temp <= 0.3) return { key: 'determinista', Icon: Code2 };
  if (temp <= 0.7) return { key: 'equilibrado', Icon: Thermometer };
  return { key: 'creativo', Icon: Lightbulb };
}

export function TemperatureLab() {
  const { lang, t } = useLang();
  const [temp, setTemp] = useState(0.7);
  const { key, Icon } = labelFor(temp);

  const numFmt = (v) =>
    v.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US', { minimumFractionDigits: 1 });
  const levelName = t(`temperaturelab.level.${key}`);
  const prompt = t('temperaturelab.prompt');
  const samples = {
    determinista: [0, 1, 2].map((i) => t(`temperaturelab.samples.determinista.${i}`)),
    equilibrado: [0, 1, 2].map((i) => t(`temperaturelab.samples.equilibrado.${i}`)),
    creativo: [0, 1, 2].map((i) => t(`temperaturelab.samples.creativo.${i}`)),
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Thermometer size={18} /> {t('temperaturelab.title')}</h3>
        <p className="card-sub">
          {t('temperaturelab.fixedPrompt')}{' '}
          <strong>{t('temperaturelab.promptQuoted', { prompt })}</strong>
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
            {numFmt(temp)} · {levelName}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>{t('temperaturelab.axis.deterministic')}</span>
          <span>{t('temperaturelab.axis.balanced')}</span>
          <span>{t('temperaturelab.axis.creative')}</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">{t('temperaturelab.simulatedTitle', { temp: numFmt(temp) })}</h3>
        {samples[key].map((frase, i) => (
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
            {t('temperaturelab.sampleQuoted', { phrase: frase })}
          </div>
        ))}
      </div>

      <div className="callout info">
        <strong>{t('temperaturelab.callout.title')}</strong> {t('temperaturelab.callout.body1')}
        <em>{t('temperaturelab.callout.predictable')}</em>{t('temperaturelab.callout.body2')}
      </div>
    </div>
  );
}
