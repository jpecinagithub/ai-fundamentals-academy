/**
 * String registry.
 *
 * Every UI-text module lives in `src/i18n/dict_<name>.js` and exports
 * `export const dict = { es: {...}, en: {...} }` with FLAT keys prefixed by
 * its own namespace (e.g. 'dashboard.title'). This file auto-merges all of
 * them via import.meta.glob, so adding a new dict file needs no wiring.
 */
const modules = import.meta.glob('./dict_*.js', { eager: true });

function merge(lang) {
  const out = {};
  for (const mod of Object.values(modules)) {
    const d = mod.dict && mod.dict[lang];
    if (d) Object.assign(out, d);
  }
  return out;
}

export const STRINGS = {
  es: merge('es'),
  en: merge('en'),
};

export const DEFAULT_LANG = 'en';
export const LANG_STORAGE_KEY = 'aifa-lang-v1';
