import { useMemo } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { getModules, getModuleById, getStages, modulesByStage } from '../data/modules';
import { questions, questionsById } from '../data/questions';
import { glossary } from '../data/glossary';

/**
 * Language-aware access to course content.
 * All hooks re-resolve when the language changes.
 */
export function useModules() {
  const { lang } = useLang();
  return useMemo(() => getModules(lang), [lang]);
}

export function useModule(id) {
  const { lang } = useLang();
  return useMemo(() => getModuleById(lang, id), [lang, id]);
}

export function useStages() {
  const { lang } = useLang();
  return useMemo(() => getStages(lang), [lang]);
}

export function useModulesByStage(stage) {
  const { lang } = useLang();
  return useMemo(() => modulesByStage(lang, stage), [lang, stage]);
}

export function useQuestions() {
  const { lang } = useLang();
  return useMemo(() => questions[lang] || questions.en, [lang]);
}

export function useQuestionsById() {
  const { lang } = useLang();
  return useMemo(() => questionsById(lang), [lang]);
}

export function useGlossary() {
  const { lang } = useLang();
  return useMemo(() => glossary[lang] || glossary.en, [lang]);
}
