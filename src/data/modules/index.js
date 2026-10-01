import m01 from './m01';
import m02 from './m02';
import m03 from './m03';
import m04 from './m04';
import m05 from './m05';
import m06 from './m06';
import m07 from './m07';
import m08 from './m08';
import m09 from './m09';
import m10 from './m10';
import m11 from './m11';
import m12 from './m12';
import m13 from './m13';
import m14 from './m14';
import m15 from './m15';
import m16 from './m16';
import m17 from './m17';
import m18 from './m18';
import m19 from './m19';
import m20 from './m20';
import m21 from './m21';
import m22 from './m22';
import m23 from './m23';
import m24 from './m24';
import m25 from './m25';
import m26 from './m26';
import m27 from './m27';
import m28 from './m28';

/**
 * All 28 course modules, in order. Each module file exports { es, en }
 * with identical structure; only the text differs.
 * Content lives in data/, never in components.
 */
const all = [
  m01, m02, m03, m04, m05, m06, m07, m08, m09, m10,
  m11, m12, m13, m14, m15, m16, m17, m18, m19, m20,
  m21, m22, m23, m24, m25, m26, m27, m28,
];

/** Modules in the requested language ('en' default, falls back to es). */
export function getModules(lang) {
  const l = lang === 'es' ? 'es' : 'en';
  return all.map((m) => m[l] || m.es);
}

export function getModuleById(lang, id) {
  return getModules(lang).find((m) => m.id === id);
}

/** The 10 learning-path stages, in order, both languages. */
export const STAGES = {
  es: [
    'Fundamentos',
    'LLM',
    'Prompts y contexto',
    'Tools y MCP',
    'Agentes',
    'Arquitectura',
    'APIs',
    'GitHub',
    'Vercel',
    'Aplicaciones con IA',
  ],
  en: [
    'Fundamentals',
    'LLM',
    'Prompts & Context',
    'Tools & MCP',
    'Agents',
    'Architecture',
    'APIs',
    'GitHub',
    'Vercel',
    'AI Applications',
  ],
};

export function getStages(lang) {
  return STAGES[lang === 'es' ? 'es' : 'en'];
}

export function modulesByStage(lang, stage) {
  return getModules(lang).filter((m) => m.stage === stage);
}
