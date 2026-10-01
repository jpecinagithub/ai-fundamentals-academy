import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw, Save, FolderOpen } from 'lucide-react';
import { cx } from '../utils/format';
import { useProgress } from '../hooks/ProgressContext';
import { useLang } from '../i18n/LanguageContext';
import { FlowDiagram } from './FlowDiagram';

/**
 * 10-step wizard: "Diseña tu primera aplicación con IA:
 * un asistente que analiza facturas".
 * Labels/descriptions live in dict_finalprojectbuilder.js; the STEPS
 * structure below only stores dict key references.
 */
const STEPS = [
  {
    key: 'interfaz',
    titleKey: 'finalprojectbuilder.step.interfaz.title',
    descKey: 'finalprojectbuilder.step.interfaz.desc',
    options: [
      { value: 'chat-react', labelKey: 'finalprojectbuilder.step.interfaz.opt.chat-react.label', descKey: 'finalprojectbuilder.step.interfaz.opt.chat-react.desc' },
      { value: 'upload-panel', labelKey: 'finalprojectbuilder.step.interfaz.opt.upload-panel.label', descKey: 'finalprojectbuilder.step.interfaz.opt.upload-panel.desc' },
      { value: 'chat-upload', labelKey: 'finalprojectbuilder.step.interfaz.opt.chat-upload.label', descKey: 'finalprojectbuilder.step.interfaz.opt.chat-upload.desc' },
    ],
  },
  {
    key: 'modelo',
    titleKey: 'finalprojectbuilder.step.modelo.title',
    descKey: 'finalprojectbuilder.step.modelo.desc',
    options: [
      { value: 'multimodal-api', labelKey: 'finalprojectbuilder.step.modelo.opt.multimodal-api.label', descKey: 'finalprojectbuilder.step.modelo.opt.multimodal-api.desc' },
      { value: 'text-ocr', labelKey: 'finalprojectbuilder.step.modelo.opt.text-ocr.label', descKey: 'finalprojectbuilder.step.modelo.opt.text-ocr.desc' },
      { value: 'local-model', labelKey: 'finalprojectbuilder.step.modelo.opt.local-model.label', descKey: 'finalprojectbuilder.step.modelo.opt.local-model.desc' },
    ],
  },
  {
    key: 'prompt',
    titleKey: 'finalprojectbuilder.step.prompt.title',
    descKey: 'finalprojectbuilder.step.prompt.desc',
    options: [
      { value: 'structured-json', labelKey: 'finalprojectbuilder.step.prompt.opt.structured-json.label', descKey: 'finalprojectbuilder.step.prompt.opt.structured-json.desc' },
      { value: 'instructivo', labelKey: 'finalprojectbuilder.step.prompt.opt.instructivo.label', descKey: 'finalprojectbuilder.step.prompt.opt.instructivo.desc' },
      { value: 'few-shot', labelKey: 'finalprojectbuilder.step.prompt.opt.few-shot.label', descKey: 'finalprojectbuilder.step.prompt.opt.few-shot.desc' },
    ],
  },
  {
    key: 'contexto',
    titleKey: 'finalprojectbuilder.step.contexto.title',
    descKey: 'finalprojectbuilder.step.contexto.desc',
    options: [
      { value: 'plantilla', labelKey: 'finalprojectbuilder.step.contexto.opt.plantilla.label', descKey: 'finalprojectbuilder.step.contexto.opt.plantilla.desc' },
      { value: 'rag', labelKey: 'finalprojectbuilder.step.contexto.opt.rag.label', descKey: 'finalprojectbuilder.step.contexto.opt.rag.desc' },
      { value: 'sin-contexto', labelKey: 'finalprojectbuilder.step.contexto.opt.sin-contexto.label', descKey: 'finalprojectbuilder.step.contexto.opt.sin-contexto.desc' },
    ],
  },
  {
    key: 'tools',
    titleKey: 'finalprojectbuilder.step.tools.title',
    descKey: 'finalprojectbuilder.step.tools.desc',
    options: [
      { value: 'extraccion', labelKey: 'finalprojectbuilder.step.tools.opt.extraccion.label', descKey: 'finalprojectbuilder.step.tools.opt.extraccion.desc' },
      { value: 'validacion', labelKey: 'finalprojectbuilder.step.tools.opt.validacion.label', descKey: 'finalprojectbuilder.step.tools.opt.validacion.desc' },
      { value: 'erp', labelKey: 'finalprojectbuilder.step.tools.opt.erp.label', descKey: 'finalprojectbuilder.step.tools.opt.erp.desc' },
      { value: 'sin-tools', labelKey: 'finalprojectbuilder.step.tools.opt.sin-tools.label', descKey: 'finalprojectbuilder.step.tools.opt.sin-tools.desc' },
    ],
  },
  {
    key: 'almacenamiento',
    titleKey: 'finalprojectbuilder.step.almacenamiento.title',
    descKey: 'finalprojectbuilder.step.almacenamiento.desc',
    options: [
      { value: 'postgres', labelKey: 'finalprojectbuilder.step.almacenamiento.opt.postgres.label', descKey: 'finalprojectbuilder.step.almacenamiento.opt.postgres.desc' },
      { value: 'archivos', labelKey: 'finalprojectbuilder.step.almacenamiento.opt.archivos.label', descKey: 'finalprojectbuilder.step.almacenamiento.opt.archivos.desc' },
      { value: 'supabase', labelKey: 'finalprojectbuilder.step.almacenamiento.opt.supabase.label', descKey: 'finalprojectbuilder.step.almacenamiento.opt.supabase.desc' },
    ],
  },
  {
    key: 'api',
    titleKey: 'finalprojectbuilder.step.api.title',
    descKey: 'finalprojectbuilder.step.api.desc',
    options: [
      { value: 'rest', labelKey: 'finalprojectbuilder.step.api.opt.rest.label', descKey: 'finalprojectbuilder.step.api.opt.rest.desc' },
      { value: 'serverless', labelKey: 'finalprojectbuilder.step.api.opt.serverless.label', descKey: 'finalprojectbuilder.step.api.opt.serverless.desc' },
      { value: 'directo', labelKey: 'finalprojectbuilder.step.api.opt.directo.label', descKey: 'finalprojectbuilder.step.api.opt.directo.desc' },
    ],
  },
  {
    key: 'seguridad',
    titleKey: 'finalprojectbuilder.step.seguridad.title',
    descKey: 'finalprojectbuilder.step.seguridad.desc',
    options: [
      { value: 'confirmacion', labelKey: 'finalprojectbuilder.step.seguridad.opt.confirmacion.label', descKey: 'finalprojectbuilder.step.seguridad.opt.confirmacion.desc', recommended: true },
      { value: 'solo-lectura', labelKey: 'finalprojectbuilder.step.seguridad.opt.solo-lectura.label', descKey: 'finalprojectbuilder.step.seguridad.opt.solo-lectura.desc' },
      { value: 'automatico', labelKey: 'finalprojectbuilder.step.seguridad.opt.automatico.label', descKey: 'finalprojectbuilder.step.seguridad.opt.automatico.desc' },
    ],
  },
  {
    key: 'github',
    titleKey: 'finalprojectbuilder.step.github.title',
    descKey: 'finalprojectbuilder.step.github.desc',
    options: [
      { value: 'publico', labelKey: 'finalprojectbuilder.step.github.opt.publico.label', descKey: 'finalprojectbuilder.step.github.opt.publico.desc' },
      { value: 'privado', labelKey: 'finalprojectbuilder.step.github.opt.privado.label', descKey: 'finalprojectbuilder.step.github.opt.privado.desc' },
      { value: 'sin-repo', labelKey: 'finalprojectbuilder.step.github.opt.sin-repo.label', descKey: 'finalprojectbuilder.step.github.opt.sin-repo.desc' },
    ],
  },
  {
    key: 'deployment',
    titleKey: 'finalprojectbuilder.step.deployment.title',
    descKey: 'finalprojectbuilder.step.deployment.desc',
    options: [
      { value: 'vercel', labelKey: 'finalprojectbuilder.step.deployment.opt.vercel.label', descKey: 'finalprojectbuilder.step.deployment.opt.vercel.desc' },
      { value: 'docker', labelKey: 'finalprojectbuilder.step.deployment.opt.docker.label', descKey: 'finalprojectbuilder.step.deployment.opt.docker.desc' },
      { value: 'netlify', labelKey: 'finalprojectbuilder.step.deployment.opt.netlify.label', descKey: 'finalprojectbuilder.step.deployment.opt.netlify.desc' },
    ],
  },
];

/** Returns the dict key for the chosen option's label (null if not found). */
function choiceLabelKey(stepKey, value) {
  const step = STEPS.find((s) => s.key === stepKey);
  const opt = step?.options.find((o) => o.value === value);
  return opt ? opt.labelKey : null;
}

/**
 * FinalProjectBuilder — 10-step wizard that generates an architecture
 * proposal and saves it via saveFinalProject() from useProgress().
 */
export function FinalProjectBuilder() {
  const { state, saveFinalProject } = useProgress();
  const { lang, t } = useLang();
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState({});       // { [key]: value }
  const [generated, setGenerated] = useState(false); // finished the 10 steps
  const [viewSaved, setViewSaved] = useState(false); // looking at the saved design
  const [savedOk, setSavedOk] = useState(false);     // save confirmation

  const saved = state.finalProject;

  function choose(value) {
    const key = STEPS[step].key;
    setChoices((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    if (!choices[STEPS[step].key]) return;
    if (step + 1 < STEPS.length) {
      setStep(step + 1);
    } else {
      setGenerated(true);
    }
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function restart() {
    setStep(0);
    setChoices({});
    setGenerated(false);
    setViewSaved(false);
    setSavedOk(false);
  }

  function save() {
    saveFinalProject(choices);
    setSavedOk(true);
  }

  /** Renders the "generated architecture" view for a given choices object. */
  function renderDesign(designChoices, savedAt) {
    const labelFor = (stepKey) => {
      const lk = choiceLabelKey(stepKey, designChoices[stepKey]);
      return lk ? t(lk) : (designChoices[stepKey] || '');
    };
    const flowNodes = STEPS.map((s) => ({
      label: `${t(s.titleKey)}: ${labelFor(s.key)}`,
    }));
    const summaryVars = {
      interfaz: labelFor('interfaz')?.toLowerCase(),
      modelo: labelFor('modelo')?.toLowerCase(),
      prompt: labelFor('prompt')?.toLowerCase(),
      contexto: labelFor('contexto')?.toLowerCase(),
      tools: labelFor('tools')?.toLowerCase(),
      almacenamiento: labelFor('almacenamiento')?.toLowerCase(),
      api: labelFor('api')?.toLowerCase(),
      seguridad: labelFor('seguridad')?.toLowerCase(),
      github: labelFor('github')?.toLowerCase(),
      deployment: labelFor('deployment'),
    };
    return (
      <div className="fade-in">
        <h3 className="card-title">{t('finalprojectbuilder.design.title')}</h3>
        {savedAt && (
          <p className="card-sub">{t('finalprojectbuilder.design.savedAt', { date: new Date(savedAt).toLocaleString(lang === 'es' ? 'es-ES' : 'en-US') })}</p>
        )}

        <FlowDiagram nodes={flowNodes} direction="down" />

        <div className="callout info">
          <span>
            <strong>{t('finalprojectbuilder.summary.title')}:</strong>{' '}
            {t('finalprojectbuilder.summary.body', summaryVars)}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.7rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          {!savedAt && (
            <button type="button" className="btn btn-primary" onClick={save} disabled={savedOk}>
              {savedOk ? <Check size={16} /> : <Save size={16} />}
              {savedOk ? t('finalprojectbuilder.saved') : t('finalprojectbuilder.save')}
            </button>
          )}
          <button type="button" className="btn btn-ghost" onClick={restart}>
            <RotateCcw size={16} />
            {t('finalprojectbuilder.restart')}
          </button>
        </div>
        {savedOk && !savedAt && (
          <p style={{ marginTop: '0.7rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Check size={16} /> {t('finalprojectbuilder.savedOk')}
          </p>
        )}
      </div>
    );
  }

  // A saved design exists and the user wants to view it.
  if (viewSaved && saved) {
    return (
      <div className="card">
        {renderDesign(saved.choices, saved.doneAt)}
      </div>
    );
  }

  // Wizard finished: show the generated design.
  if (generated) {
    return (
      <div className="card">
        {renderDesign(choices, null)}
      </div>
    );
  }

  const current = STEPS[step];
  const selectedValue = choices[current.key];

  return (
    <div className="card">
      {saved && !viewSaved && (
        <div className="callout info" style={{ marginBottom: '1.2rem' }}>
          <FolderOpen size={16} className="callout-ico" />
          <span>
            {t('finalprojectbuilder.savedBanner.text')}{' '}
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setViewSaved(true)}
              style={{ marginLeft: '0.4rem' }}
            >
              {t('finalprojectbuilder.savedBanner.view')}
            </button>
          </span>
        </div>
      )}

      <div className="stepper" aria-label={t('finalprojectbuilder.stepper.aria')}>
        {STEPS.map((s, i) => (
          <span
            key={s.key}
            className={cx('step-dot', i === step && 'active', i < step && 'done')}
            title={t(s.titleKey)}
          >
            {i + 1}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.6rem' }}>
        <span className="card-sub">{t('finalprojectbuilder.header.subtitle')}</span>
        <span className="badge badge-info">{t('finalprojectbuilder.step.badge', { current: step + 1, total: STEPS.length })}</span>
      </div>

      <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.15rem' }}>{t(current.titleKey)}</h3>
      <p className="card-sub" style={{ marginBottom: '1rem' }}>{t(current.descKey)}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {current.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={cx('quiz-option', selectedValue === opt.value && 'selected')}
            onClick={() => choose(opt.value)}
          >
            <span style={{ flex: 1, textAlign: 'left' }}>
              <span style={{ fontWeight: 700, display: 'block' }}>
                {t(opt.labelKey)}
                {opt.recommended && (
                  <span className="badge badge-ok" style={{ marginLeft: '0.5rem' }}>{t('finalprojectbuilder.recommended')}</span>
                )}
              </span>
              <span className="card-sub" style={{ display: 'block', marginTop: '0.2rem' }}>{t(opt.descKey)}</span>
            </span>
            {selectedValue === opt.value && <Check size={18} />}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.2rem' }}>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={back}
          disabled={step === 0}
        >
          <ArrowLeft size={16} />
          {t('finalprojectbuilder.back')}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={next}
          disabled={!selectedValue}
        >
          {step + 1 === STEPS.length ? t('finalprojectbuilder.generate') : t('finalprojectbuilder.next')}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
