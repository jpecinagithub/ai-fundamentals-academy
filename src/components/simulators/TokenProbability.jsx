import { useState } from 'react';
import { Dices, RotateCcw } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

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
  const { lang, t } = useLang();
  const [step, setStep] = useState(0);
  const [generated, setGenerated] = useState([]);
  const [lastPicked, setLastPicked] = useState(null);

  const STEPS = [
    {
      dist: [
        { token: t('tokenprobability.tok.paris'), p: 97 },
        { token: t('tokenprobability.tok.lyon'), p: 1 },
        { token: t('tokenprobability.tok.madrid'), p: 0.1 },
        { token: t('tokenprobability.tok.rome'), p: 0.1 },
      ],
    },
    {
      dist: [
        { token: t('tokenprobability.tok.is'), p: 88 },
        { token: t('tokenprobability.tok.lies'), p: 6 },
        { token: t('tokenprobability.tok.remains'), p: 3 },
        { token: t('tokenprobability.tok.was'), p: 3 },
      ],
    },
    {
      dist: [
        { token: t('tokenprobability.tok.a'), p: 70 },
        { token: t('tokenprobability.tok.the'), p: 20 },
        { token: t('tokenprobability.tok.famous'), p: 8 },
        { token: t('tokenprobability.tok.renowned'), p: 2 },
      ],
    },
    {
      dist: [
        { token: t('tokenprobability.tok.city'), p: 60 },
        { token: t('tokenprobability.tok.metropolis'), p: 25 },
        { token: t('tokenprobability.tok.capital'), p: 10 },
        { token: t('tokenprobability.tok.gem'), p: 5 },
      ],
    },
  ];

  const finished = step >= STEPS.length;

  const dist = finished ? null : STEPS[step].dist;
  const maxP = dist ? Math.max(...dist.map((d) => d.p)) : 0;
  const prompt = t('tokenprobability.prompt');

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
        <h3 className="card-title"><Dices size={18} /> {t('tokenprobability.title')}</h3>
        <p className="card-sub">
          Prompt: <strong>{t('tokenprobability.promptQuoted', { prompt })}</strong>. {t('tokenprobability.intro1', { button: t('tokenprobability.generate') })}
          <em>{t('tokenprobability.weighted')}</em>{t('tokenprobability.intro2')}
        </p>
        <p style={{ fontSize: '1.05rem', marginTop: '0.75rem' }}>
          <strong>{t('tokenprobability.generatedText')}</strong>{' '}
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            {prompt}{generated.length > 0 ? ' ' + generated.join(' ') : ''}
            {!finished && ' ▌'}
          </span>
        </p>
      </div>

      {!finished && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <h3 className="card-title">{t('tokenprobability.distribution', { step: step + 1 })}</h3>
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
                  {d.p.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')} %
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button className="btn btn-primary" onClick={generar}>
              {t('tokenprobability.generate')}
            </button>
            <button className="btn" onClick={reiniciar}>
              <RotateCcw size={15} style={{ marginRight: '0.4rem' }} /> {t('tokenprobability.restart')}
            </button>
          </div>
        </div>
      )}

      {finished && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <h3 className="card-title">{t('tokenprobability.completed')}</h3>
          <p>{t('tokenprobability.completedText', { prompt, generated: generated.join(' ') })}</p>
          <button className="btn" onClick={reiniciar} style={{ marginTop: '0.75rem' }}>
            <RotateCcw size={15} style={{ marginRight: '0.4rem' }} /> {t('tokenprobability.restart')}
          </button>
        </div>
      )}

      <div className="callout info">
        <strong>{t('tokenprobability.keyIdea')}</strong> {t('tokenprobability.callout1')}
        <em>{t('tokenprobability.samples')}</em>{t('tokenprobability.callout2')}
      </div>
    </div>
  );
}
