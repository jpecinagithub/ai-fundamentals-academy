import React, { createContext, useContext, useCallback, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STRINGS, DEFAULT_LANG, LANG_STORAGE_KEY } from './strings';

const LanguageContext = createContext(null);

function lookup(lang, key) {
  const dict = STRINGS[lang] || {};
  if (typeof dict[key] === 'string') return dict[key];
  // Fallback: nested path traversal for dicts written as nested objects.
  const parts = key.split('.');
  let node = dict;
  for (const p of parts) {
    if (node == null) return null;
    node = node[p];
  }
  return typeof node === 'string' ? node : null;
}

/**
 * LanguageProvider — 'en' (default) | 'es', persisted in localStorage.
 * Exposes { lang, setLang, t }.
 * t(key, vars) resolves STRINGS[lang][key], falls back to the other
 * language, then to the key itself. Supports {var} interpolation.
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useLocalStorage(LANG_STORAGE_KEY, DEFAULT_LANG);

  const setLang = useCallback(
    (l) => setLangState(l === 'es' ? 'es' : 'en'),
    [setLangState]
  );

  const t = useCallback(
    (key, vars) => {
      let s =
        lookup(lang, key) ??
        lookup(lang === 'en' ? 'es' : 'en', key) ??
        key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          s = s.split(`{${k}}`).join(String(v));
        }
      }
      return s;
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    // Drives the per-language brand palette in CSS:
    // [data-theme][data-lang="es"] overrides the blue/violet brand with reds.
    document.documentElement.setAttribute('data-lang', lang);
    document.title = t('core.meta.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('core.meta.description'));
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
