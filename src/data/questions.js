import es from './questions_es.js';
import en1 from './questions_en_1.js';
import en2 from './questions_en_2.js';

/**
 * All 252 quiz questions, in both languages.
 * `en` preserves the exact order, ids and correctIndex of `es` —
 * only the text (question, options, explanation, concept) is translated.
 * difficulty is 'básico'|'intermedio'|'avanzado' in es,
 * 'basic'|'intermediate'|'advanced' in en.
 */
export const questions = {
  es,
  en: [...en1, ...en2],
};

export function questionsById(lang) {
  const list = questions[lang] || questions.en;
  return Object.fromEntries(list.map((q) => [q.id, q]));
}
