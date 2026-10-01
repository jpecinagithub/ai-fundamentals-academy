import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const KEY = 'aifa-progress-v1';

const defaultState = () => ({
  theme: 'dark',            // 'dark' | 'light'
  visited: {},              // { m1: isoDate }
  completed: {},             // { m1: isoDate }
  bestScores: {},            // { m1: 80, final: 84 }
  attempts: {},              // { m1: 2, final: 1 }
  lastVisited: null,         // module id
  lastActivity: null,        // isoDate
  stats: { answered: 0, correct: 0 },
  failed: {},                // { qid: { id, moduleId, question, options, correctIndex, explanation, concept, fails, streak, mastered } }
  finalProject: null,        // { choices: {...}, doneAt }
});

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [state, setState] = useLocalStorage(KEY, defaultState);

  const touch = useCallback((patch) => {
    setState((s) => ({ ...s, ...patch, lastActivity: new Date().toISOString() }));
  }, [setState]);

  const toggleTheme = useCallback(() => {
    setState((s) => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }));
  }, [setState]);

  const markVisited = useCallback((moduleId) => {
    setState((s) => {
      if (s.visited[moduleId] && s.lastVisited === moduleId) return s;
      return {
        ...s,
        visited: { ...s.visited, [moduleId]: s.visited[moduleId] || new Date().toISOString() },
        lastVisited: moduleId,
        lastActivity: new Date().toISOString(),
      };
    });
  }, [setState]);

  /** Record a module quiz result. failedQs = array of full question objects answered wrong. */
  const recordQuiz = useCallback((moduleId, { correct, total, failedQs }) => {
    const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
    setState((s) => {
      const failed = { ...s.failed };
      (failedQs || []).forEach((q) => {
        const prev = failed[q.id];
        failed[q.id] = prev
          ? { ...prev, fails: prev.fails + 1, streak: 0, mastered: false }
          : {
              id: q.id, moduleId: q.moduleId, question: q.question,
              options: q.options, correctIndex: q.correctIndex,
              explanation: q.explanation, concept: q.concept || '',
              fails: 1, streak: 0, mastered: false,
            };
      });
      return {
        ...s,
        completed: { ...s.completed, [moduleId]: new Date().toISOString() },
        bestScores: { ...s.bestScores, [moduleId]: Math.max(s.bestScores[moduleId] || 0, pct) },
        attempts: { ...s.attempts, [moduleId]: (s.attempts[moduleId] || 0) + 1 },
        stats: { answered: s.stats.answered + total, correct: s.stats.correct + correct },
        failed,
        lastActivity: new Date().toISOString(),
      };
    });
    return pct;
  }, [setState]);

  /** Record the final exam result. */
  const recordFinal = useCallback(({ correct, total, failedQs }) => {
    const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
    setState((s) => {
      const failed = { ...s.failed };
      (failedQs || []).forEach((q) => {
        const prev = failed[q.id];
        failed[q.id] = prev
          ? { ...prev, fails: prev.fails + 1, streak: 0, mastered: false }
          : {
              id: q.id, moduleId: q.moduleId, question: q.question,
              options: q.options, correctIndex: q.correctIndex,
              explanation: q.explanation, concept: q.concept || '',
              fails: 1, streak: 0, mastered: false,
            };
      });
      return {
        ...s,
        bestScores: { ...s.bestScores, final: Math.max(s.bestScores.final || 0, pct) },
        attempts: { ...s.attempts, final: (s.attempts.final || 0) + 1 },
        stats: { answered: s.stats.answered + total, correct: s.stats.correct + correct },
        failed,
        lastActivity: new Date().toISOString(),
      };
    });
    return pct;
  }, [setState]);

  /**
   * Answer a review question. If correct, streak++ ; streak >= 2 → mastered.
   * Returns the updated entry.
   */
  const answerReview = useCallback((qid, wasCorrect) => {
    let updated = null;
    setState((s) => {
      const prev = s.failed[qid];
      if (!prev) return s;
      const streak = wasCorrect ? prev.streak + 1 : 0;
      updated = { ...prev, streak, mastered: streak >= 2 };
      return {
        ...s,
        stats: { answered: s.stats.answered + 1, correct: s.stats.correct + (wasCorrect ? 1 : 0) },
        failed: { ...s.failed, [qid]: updated },
        lastActivity: new Date().toISOString(),
      };
    });
    return updated;
  }, [setState]);

  const saveFinalProject = useCallback((choices) => {
    touch({ finalProject: { choices, doneAt: new Date().toISOString() } });
  }, [touch]);

  const resetAll = useCallback(() => {
    let theme = 'dark';
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) theme = JSON.parse(raw).theme || 'dark';
    } catch { /* ignore */ }
    setState({ ...defaultState(), theme });
  }, [setState]);

  const value = useMemo(() => ({
    state, toggleTheme, markVisited, recordQuiz, recordFinal,
    answerReview, saveFinalProject, resetAll,
  }), [state, toggleTheme, markVisited, recordQuiz, recordFinal, answerReview, saveFinalProject, resetAll]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}

/* ---------- derived helpers (pure, usable anywhere) ---------- */

/** Module status: 'done' | 'progress' | 'todo' + display percent. */
export function moduleStatus(state, moduleId) {
  if (state.completed[moduleId]) return { status: 'done', pct: 100, label: 'Completado' };
  if (state.visited[moduleId]) {
    const attempted = (state.attempts[moduleId] || 0) > 0;
    return { status: 'progress', pct: attempted ? 70 : 35, label: 'En progreso' };
  }
  return { status: 'todo', pct: 0, label: 'No iniciado' };
}

/** Global completion % = completed modules / total. */
export function globalProgressPct(state, totalModules) {
  if (!totalModules) return 0;
  return Math.round((Object.keys(state.completed).length / totalModules) * 100);
}

/** Failed questions pending review (not mastered). */
export function pendingReview(state) {
  return Object.values(state.failed).filter((f) => !f.mastered);
}

export function masteredCount(state) {
  return Object.values(state.failed).filter((f) => f.mastered).length;
}

export function accuracyPct(state) {
  if (!state.stats.answered) return 0;
  return Math.round((state.stats.correct / state.stats.answered) * 100);
}
