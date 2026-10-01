import { useState } from 'react';
import { Scissors, Coins } from 'lucide-react';

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
  const [text, setText] = useState('Quiero aprender inteligencia artificial');
  const [tokens, setTokens] = useState(() => fakeTokenize('Quiero aprender inteligencia artificial'));

  const tokenizar = () => setTokens(fakeTokenize(text));
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const ratio = words > 0 ? (tokens.length / words).toFixed(2).replace('.', ',') : '0';
  const cost = (tokens.length * 0.002) / 1000;

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Scissors size={18} /> Tokenizador visual</h3>
        <p className="card-sub">
          Escribe una frase y pulsa «Tokenizar» para ver cómo un modelo la trocearía en tokens.
        </p>
        <textarea
          className="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', marginBottom: '0.75rem' }}
        />
        <button className="btn btn-primary" onClick={tokenizar}>
          Tokenizar
        </button>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">Tokens ({tokens.length})</h3>
        <div style={{ marginTop: '0.5rem' }}>
          {tokens.map((t, i) => (
            <span
              key={i}
              className="token-chip"
              style={{ background: PALETTE[i % PALETTE.length] }}
            >
              <span className="tok-idx">{i}</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="card-title"><Coins size={18} /> Estadísticas</h3>
        <div className="grid-2" style={{ marginTop: '0.5rem' }}>
          <div><strong>Nº de tokens:</strong> {tokens.length}</div>
          <div><strong>Nº de caracteres:</strong> {text.length}</div>
          <div><strong>≈ tokens por palabra:</strong> {ratio}</div>
          <div>
            <strong>Coste estimado:</strong> esta frase costaría ≈{' '}
            {cost.toLocaleString('es-ES', { minimumFractionDigits: 6, maximumFractionDigits: 6 })} €
          </div>
        </div>
        <p className="card-sub" style={{ marginTop: '0.75rem' }}>
          Tarifa de ejemplo: 0,002 € por cada 1.000 tokens de entrada. Los modelos
          cobran por token, no por palabra: por eso conviene vigilar la longitud de los prompts.
        </p>
      </div>
    </div>
  );
}
