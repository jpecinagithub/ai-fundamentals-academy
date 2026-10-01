import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw, Save, FolderOpen } from 'lucide-react';
import { cx } from '../utils/format';
import { useProgress } from '../hooks/ProgressContext';
import { FlowDiagram } from './FlowDiagram';

/**
 * 10-step wizard: "Diseña tu primera aplicación con IA:
 * un asistente que analiza facturas".
 */
const STEPS = [
  {
    key: 'interfaz',
    title: 'Interfaz',
    desc: '¿Cómo interactuará el usuario con el asistente?',
    options: [
      { value: 'chat-react', label: 'Chat web en React', desc: 'Conversación natural para subir y preguntar sobre facturas.' },
      { value: 'upload-panel', label: 'Subida de PDF + panel', desc: 'Arrastra facturas y ve los resultados extraídos en un panel.' },
      { value: 'chat-upload', label: 'Chat + subida de archivos', desc: 'Combina conversación con adjuntos directos en el chat.' },
    ],
  },
  {
    key: 'modelo',
    title: 'Modelo',
    desc: '¿Qué modelo de IA procesará las facturas?',
    options: [
      { value: 'multimodal-api', label: 'LLM multimodal vía API', desc: 'Lee directamente PDFs e imágenes de facturas.' },
      { value: 'text-ocr', label: 'LLM de texto + OCR previo', desc: 'Extrae el texto con OCR y lo envía al modelo.' },
      { value: 'local-model', label: 'Modelo local pequeño', desc: 'Privacidad total, menor precisión en documentos complejos.' },
    ],
  },
  {
    key: 'prompt',
    title: 'Prompt',
    desc: '¿Cómo le pedirás al modelo que extraiga los datos?',
    options: [
      { value: 'structured-json', label: 'Prompt con esquema JSON', desc: 'Devuelve fecha, proveedor, importe y líneas en formato estructurado.' },
      { value: 'instructivo', label: 'Prompt instructivo libre', desc: 'Instrucciones en lenguaje natural, salida en texto.' },
      { value: 'few-shot', label: 'Few-shot con ejemplos', desc: 'Incluye 2-3 facturas de ejemplo para guiar el formato.' },
    ],
  },
  {
    key: 'contexto',
    title: 'Contexto',
    desc: '¿Qué información adicional recibirá el modelo?',
    options: [
      { value: 'plantilla', label: 'Plantilla con datos de la empresa', desc: 'Nombre fiscal, CIF y formato de contabilización habitual.' },
      { value: 'rag', label: 'RAG sobre facturas anteriores', desc: 'Recupera facturas similares para mantener consistencia.' },
      { value: 'sin-contexto', label: 'Sin contexto adicional', desc: 'Solo el documento y el prompt.' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    desc: '¿Qué herramientas podrá usar el agente?',
    options: [
      { value: 'extraccion', label: 'Extracción de campos', desc: 'Fecha, proveedor, importe total y líneas de detalle.' },
      { value: 'validacion', label: 'Validación de totales', desc: 'Comprueba que la suma de líneas cuadre con el total.' },
      { value: 'erp', label: 'Conexión con el ERP', desc: 'Envía la factura contabilizada al sistema de gestión.' },
      { value: 'sin-tools', label: 'Sin tools', desc: 'Solo lectura y respuesta, sin acciones.' },
    ],
  },
  {
    key: 'almacenamiento',
    title: 'Almacenamiento',
    desc: '¿Dónde guardarás las facturas y los resultados?',
    options: [
      { value: 'postgres', label: 'Base de datos PostgreSQL', desc: 'Relacional, ideal para datos contables estructurados.' },
      { value: 'archivos', label: 'Archivos locales / localStorage', desc: 'Simple para prototipos, sin servidor.' },
      { value: 'supabase', label: 'Supabase', desc: 'PostgreSQL gestionado con API y autenticación incluidas.' },
    ],
  },
  {
    key: 'api',
    title: 'API',
    desc: '¿Cómo conectará el frontend con la IA?',
    options: [
      { value: 'rest', label: 'API REST propia (Node/Express)', desc: 'Backend que guarda la clave y orquesta las llamadas.' },
      { value: 'serverless', label: 'Serverless (Vercel Functions)', desc: 'Sin servidor que mantener; escala automáticamente.' },
      { value: 'directo', label: 'Llamadas directas desde el frontend', desc: 'Solo para prototipos: la clave quedaría expuesta.' },
    ],
  },
  {
    key: 'seguridad',
    title: 'Seguridad',
    desc: '¿Qué nivel de control humano tendrá el sistema?',
    options: [
      { value: 'confirmacion', label: 'Confirmación humana antes de contabilizar', desc: 'Un humano revisa y aprueba cada factura. Recomendada.', recommended: true },
      { value: 'solo-lectura', label: 'Solo lectura, sin acciones', desc: 'El asistente informa pero no modifica nada.' },
      { value: 'automatico', label: 'Automático sin revisión', desc: 'Rápido pero arriesgado: solo con datos ya validados.' },
    ],
  },
  {
    key: 'github',
    title: 'GitHub',
    desc: '¿Cómo versionarás el proyecto?',
    options: [
      { value: 'publico', label: 'Repo público en GitHub', desc: 'Visible para tu portfolio; no subas claves ni facturas reales.' },
      { value: 'privado', label: 'Repo privado en GitHub', desc: 'Control total sobre quién ve el código y los datos.' },
      { value: 'sin-repo', label: 'Sin repo, solo local', desc: 'No recomendado: pierdes historial y copias de seguridad.' },
    ],
  },
  {
    key: 'deployment',
    title: 'Deployment',
    desc: '¿Dónde desplegarás la aplicación?',
    options: [
      { value: 'vercel', label: 'Vercel', desc: 'Despliegue continuo desde GitHub, ideal para React.' },
      { value: 'docker', label: 'Docker en servidor propio', desc: 'Control total de la infraestructura.' },
      { value: 'netlify', label: 'Netlify', desc: 'Alternativa sencilla para frontends estáticos.' },
    ],
  },
];

function choiceLabel(stepKey, value) {
  const step = STEPS.find((s) => s.key === stepKey);
  const opt = step?.options.find((o) => o.value === value);
  return opt ? opt.label : value;
}

/**
 * FinalProjectBuilder — 10-step wizard that generates an architecture
 * proposal and saves it via saveFinalProject() from useProgress().
 */
export function FinalProjectBuilder() {
  const { state, saveFinalProject } = useProgress();
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
    const flowNodes = STEPS.map((s) => ({
      label: `${s.title}: ${choiceLabel(s.key, designChoices[s.key])}`,
    }));
    return (
      <div className="fade-in">
        <h3 className="card-title">Tu arquitectura generada</h3>
        {savedAt && (
          <p className="card-sub">Guardado el {new Date(savedAt).toLocaleString('es-ES')}</p>
        )}

        <FlowDiagram nodes={flowNodes} direction="down" />

        <div className="callout info">
          <span>
            <strong>Resumen:</strong>{' '}
            Has diseñado un asistente que analiza facturas con interfaz{' '}
            <strong>{choiceLabel('interfaz', designChoices.interfaz)?.toLowerCase()}</strong>,{' '}
            potenciado por <strong>{choiceLabel('modelo', designChoices.modelo)?.toLowerCase()}</strong>{' '}
            guiado mediante <strong>{choiceLabel('prompt', designChoices.prompt)?.toLowerCase()}</strong>{' '}
            y enriquecido con <strong>{choiceLabel('contexto', designChoices.contexto)?.toLowerCase()}</strong>.{' '}
            Usará <strong>{choiceLabel('tools', designChoices.tools)?.toLowerCase()}</strong>,{' '}
            almacenará los datos en <strong>{choiceLabel('almacenamiento', designChoices.almacenamiento)?.toLowerCase()}</strong>,{' '}
            se conectará vía <strong>{choiceLabel('api', designChoices.api)?.toLowerCase()}</strong>{' '}
            con un control de <strong>{choiceLabel('seguridad', designChoices.seguridad)?.toLowerCase()}</strong>,{' '}
            versionado en <strong>{choiceLabel('github', designChoices.github)?.toLowerCase()}</strong>{' '}
            y desplegado en <strong>{choiceLabel('deployment', designChoices.deployment)}</strong>.
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.7rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          {!savedAt && (
            <button type="button" className="btn btn-primary" onClick={save} disabled={savedOk}>
              {savedOk ? <Check size={16} /> : <Save size={16} />}
              {savedOk ? 'Diseño guardado' : 'Guardar mi diseño'}
            </button>
          )}
          <button type="button" className="btn btn-ghost" onClick={restart}>
            <RotateCcw size={16} />
            Empezar de nuevo
          </button>
        </div>
        {savedOk && !savedAt && (
          <p style={{ marginTop: '0.7rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Check size={16} /> Tu diseño se ha guardado correctamente.
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
            Ya tienes un diseño guardado.{' '}
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setViewSaved(true)}
              style={{ marginLeft: '0.4rem' }}
            >
              Ver mi diseño guardado
            </button>
          </span>
        </div>
      )}

      <div className="stepper" aria-label="Pasos del asistente">
        {STEPS.map((s, i) => (
          <span
            key={s.key}
            className={cx('step-dot', i === step && 'active', i < step && 'done')}
            title={s.title}
          >
            {i + 1}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.6rem' }}>
        <span className="card-sub">Diseña tu primera aplicación con IA</span>
        <span className="badge badge-info">Paso {step + 1} de {STEPS.length}</span>
      </div>

      <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.15rem' }}>{current.title}</h3>
      <p className="card-sub" style={{ marginBottom: '1rem' }}>{current.desc}</p>

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
                {opt.label}
                {opt.recommended && (
                  <span className="badge badge-ok" style={{ marginLeft: '0.5rem' }}>Recomendada</span>
                )}
              </span>
              <span className="card-sub" style={{ display: 'block', marginTop: '0.2rem' }}>{opt.desc}</span>
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
          Atrás
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={next}
          disabled={!selectedValue}
        >
          {step + 1 === STEPS.length ? 'Generar arquitectura' : 'Siguiente'}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
