import { useState, useEffect, useCallback } from 'react';

function read(key, initial) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return typeof initial === 'function' ? initial() : initial;
    return JSON.parse(raw);
  } catch {
    return typeof initial === 'function' ? initial() : initial;
  }
}

/** useLocalStorage(key, initial) — persistent state hook. */
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => read(key, initial));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or unavailable — fail silently */
    }
  }, [key, value]);

  const set = useCallback((v) => {
    setValue((prev) => (typeof v === 'function' ? v(prev) : v));
  }, []);

  return [value, set];
}
