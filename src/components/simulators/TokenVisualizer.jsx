import { useState } from 'react';
import { Scissors, Coins } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

/** Tokenizador simulado: divide por palabras, parte las largas y separa la puntuación. */
function fakeTokenize(text) {
  const parts =
    text.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+|[^\sA-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]/g) || [];
  const tokens = [];
  for (const part of parts) {
    if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+$/.test(part) && part.length > 6) {
      const chunks = part.length > 10 ? 3 : 2;
      const size = Math.ceil(part.length / chunks);
      for (let i = 0; i < part.length; i += size) {
        tokens.push(part.slice(i, i + size));
      }
    } else {
      tokens.push(part);
    }
  }
  return tokens;
}

const PALETTE = ['#dbeafe', '#dcfce7', '#fef3c7', '#f3e8ff', '#ffe4e6', '#e0e7ff'];

export function TokenVisualizer() {
  const { lang, t } = useLang();
  const [text, setText] = useState(() => t('tokenvisualizer.defaultText'));
  const [tokens, setTokens] = useState(() => fakeTokenize(t('tokenvisualizer.defaultText')));

  const tokenizar = () => setTokens(fakeTokenize(text));
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const ratioRaw = words > 0 ? (tokens.length / words).toFixed(2) : '0';
  const ratio = lang === 'es' ? ratioRaw.replace('.', ',') : ratioRaw;
  const cost = (tokens.length * 0.002) / 1000;
  const costFmt = cost.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US', {
    minimumFractionDigits: 6,
    maximumFractionDigits: 6,
  });

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Scissors size={18} /> {t('tokenvisualizer.title')}</h3>
        <p className="card-sub">
          {t('tokenvisualizer.subtitle', { button: t('tokenvisualizer.tokenize') })}
        </p>
        <textarea
          className="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', marginBottom: '0.75rem' }}
        />
        <button className="btn btn-primary" onClick={tokenizar}>
          {t('tokenvisualizer.tokenize')}
        </button>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">{t('tokenvisualizer.tokensTitle', { count: tokens.length })}</h3>
        <div style={{ marginTop: '0.5rem' }}>
          {tokens.map((tok, i) => (
            <span
              key={i}
              className="token-chip"
              style={{ background: PALETTE[i % PALETTE.length] }}
            >
              <span className="tok-idx">{i}</span>
              {tok}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="card-title"><Coins size={18} /> {t('tokenvisualizer.stats')}</h3>
        <div className="grid-2" style={{ marginTop: '0.5rem' }}>
          <div><strong>{t('tokenvisualizer.statTokens')}</strong> {tokens.length}</div>
          <div><strong>{t('tokenvisualizer.statChars')}</strong> {text.length}</div>
          <div><strong>{t('tokenvisualizer.statRatio')}</strong> {ratio}</div>
          <div>
            <strong>{t('tokenvisualizer.statCost')}</strong>{' '}
            {t('tokenvisualizer.costLine', { cost: costFmt })}
          </div>
        </div>
        <p className="card-sub" style={{ marginTop: '0.75rem' }}>
          {t('tokenvisualizer.tariffNote')}
        </p>
      </div>
    </div>
  );
}
