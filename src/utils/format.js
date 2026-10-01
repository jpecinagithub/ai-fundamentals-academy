/** Small pure utilities shared across the app. */

/** Fisher–Yates shuffle; returns a NEW array. */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick n random elements (or all if fewer). */
export function pickRandom(arr, n) {
  return shuffle(arr).slice(0, n);
}

export function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

/** classnames helper */
export function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

/** Format ISO date to a readable string in the active language. */
export function formatDate(iso, lang) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString(lang === 'es' ? 'es-ES' : 'en-US', {
      day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return '—';
  }
}

/** Estimate tokens for a piece of text (rough heuristic ~ 1 token / 4 chars). */
export function estimateTokens(text) {
  if (!text) return 0;
  return Math.max(1, Math.ceil(text.length / 4));
}

/** Final exam band for a percentage. */
export function examBand(pct, lang) {
  const en = lang !== 'es';
  if (pct >= 90) return { label: en ? 'Advanced mastery of fundamentals' : 'Dominio avanzado de fundamentos', tone: 'ok' };
  if (pct >= 75) return { label: en ? 'Good mastery' : 'Buen dominio', tone: 'ok' };
  if (pct >= 60) return { label: en ? 'Sufficient knowledge, review recommended' : 'Conocimientos suficientes, conviene repasar', tone: 'warn' };
  return { label: en ? 'Repeating the core modules is recommended' : 'Recomendado repetir módulos fundamentales', tone: 'ko' };
}

/** Module quiz band. */
export function quizBand(pct, lang) {
  const en = lang !== 'es';
  if (pct >= 90) return en ? 'Excellent' : 'Excelente';
  if (pct >= 70) return en ? 'Good' : 'Bien';
  return en ? 'You need to review' : 'Necesitas repasar';
}
