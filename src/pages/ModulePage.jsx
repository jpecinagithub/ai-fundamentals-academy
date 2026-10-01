import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useModules, useQuestions } from '../hooks/useContent';
import { useProgress, moduleStatus } from '../hooks/ProgressContext';
import { Quiz } from '../components/Quiz';
import { FlowDiagram } from '../components/FlowDiagram';
import { CompareBlocks, DataTable } from '../components/CompareTable';
import { MiniExercise } from '../components/MiniExercise';
import { RichText } from '../components/RichText';
import { getIcon } from '../utils/icons';
import { pickRandom } from '../utils/format';

import { TokenVisualizer } from '../components/simulators/TokenVisualizer';
import { TokenProbability } from '../components/simulators/TokenProbability';
import { ContextSimulator } from '../components/simulators/ContextSimulator';
import { PromptComparer } from '../components/simulators/PromptComparer';
import { TemperatureLab } from '../components/simulators/TemperatureLab';
import { EmbeddingsVisual } from '../components/simulators/EmbeddingsVisual';
import { JsonVisualizer } from '../components/simulators/JsonVisualizer';
import { AgentSimulator } from '../components/simulators/AgentSimulator';
import { MCPSimulator } from '../components/simulators/MCPSimulator';
import { APISimulator } from '../components/simulators/APISimulator';
import { ArchitectureExplorer } from '../components/simulators/ArchitectureExplorer';

const SIMULATORS = {
  TokenVisualizer,
  TokenProbability,
  ContextSimulator,
  PromptComparer,
  TemperatureLab,
  EmbeddingsVisual,
  JsonVisualizer,
  AgentSimulator,
  MCPSimulator,
  APISimulator,
  ArchitectureExplorer,
};

const TEXT_KICKER_KEYS = {
  text: 'modulepage.kicker.text',
  concepto: 'modulepage.kicker.concepto',
  analogia: 'modulepage.kicker.analogia',
  explicacion: 'modulepage.kicker.explicacion',
  ejemplo: 'modulepage.kicker.ejemplo',
  practica: 'modulepage.kicker.practica',
  comprueba: 'modulepage.kicker.comprueba',
};

function paragraphs(section) {
  const b = section.body ?? section.text ?? section.content ?? section.paragraphs ?? '';
  return Array.isArray(b) ? b : [b];
}

function SectionRenderer({ section }) {
  const { t } = useLang();
  switch (section.kind) {
    case 'text': {
      const key = (section.variant || section.kind || 'text').toLowerCase();
      const kicker = t(TEXT_KICKER_KEYS[key] || 'modulepage.kicker.text');
      return (
        <div className="section">
          <span className="section-kicker">{kicker}</span>
          {section.heading && <h2 className="section-title">{section.heading}</h2>}
          {paragraphs(section).map((p, i) => (
            <p key={i}><RichText text={p} /></p>
          ))}
        </div>
      );
    }
    case 'analogy':
      return (
        <div className="callout info">
          <span className="callout-ico">{getIcon('Lightbulb', 20)}</span>
          <div>
            {section.heading && <strong>{section.heading}</strong>}
            {paragraphs(section).map((p, i) => (
              <p key={i} style={i === paragraphs(section).length - 1 ? { marginBottom: 0 } : undefined}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>
      );
    case 'flow':
      return (
        <div className="section">
          {section.heading && <h2 className="section-title">{section.heading}</h2>}
          <FlowDiagram
            nodes={section.nodes || []}
            direction={section.direction || 'vertical'}
            highlight={section.highlight}
          />
          {section.caption && <p className="card-sub">{section.caption}</p>}
        </div>
      );
    case 'compare':
      return (
        <CompareBlocks
          left={section.left}
          right={section.right}
          heading={section.heading}
          caption={section.caption}
        />
      );
    case 'table':
      return (
        <DataTable
          headers={section.headers || []}
          rows={section.rows || []}
          heading={section.heading}
        />
      );
    case 'example': {
      const body = paragraphs(section);
      return (
        <div className="card" style={{ margin: '1.2rem 0' }}>
          <span className="badge badge-primary">{section.label || t('modulepage.exampleLabel')}</span>
          {section.heading && <h3 style={{ margin: '0.6rem 0 0.4rem' }}>{section.heading}</h3>}
          {body.map((p, i) => (
            <p key={i}><RichText text={p} /></p>
          ))}
          {section.result && (
            <p className="card-sub" style={{ marginBottom: 0 }}>
              <strong>{t('modulepage.result')}</strong> <RichText text={section.result} />
            </p>
          )}
        </div>
      );
    }
    case 'checklist':
      return (
        <div className="card" style={{ margin: '1.2rem 0' }}>
          {section.heading && <h3 style={{ marginTop: 0 }}>{section.heading}</h3>}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {(section.items || []).map((it, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.55rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--success)', flexShrink: 0, marginTop: '0.15rem' }}>
                  {getIcon('Check', 18)}
                </span>
                <span><RichText text={typeof it === 'string' ? it : it.text || ''} /></span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'callout': {
      const tone = section.tone || 'info';
      const iconName = tone === 'warn' ? 'AlertTriangle' : tone === 'tip' ? 'Lightbulb' : 'Info';
      return (
        <div className={`callout ${tone}`}>
          <span className="callout-ico">{getIcon(iconName, 20)}</span>
          <div>
            {section.heading && <strong>{section.heading}</strong>}
            {paragraphs(section).map((p, i) => (
              <p key={i} style={i === paragraphs(section).length - 1 ? { marginBottom: 0 } : undefined}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>
      );
    }
    case 'exercise':
      return <MiniExercise {...section} />;
    case 'simulator': {
      const Sim = SIMULATORS[section.component];
      if (!Sim) return null;
      return (
        <div className="section">
          {section.heading && <h2 className="section-title">{section.heading}</h2>}
          <Sim />
          {section.caption && <p className="card-sub">{section.caption}</p>}
        </div>
      );
    }
    default:
      return null;
  }
}

const BADGE_CLASS = {
  done: 'badge-ok',
  progress: 'badge-info',
  todo: 'badge-muted',
};

export function ModulePage() {
  const { id } = useParams();
  const { state, markVisited, recordQuiz } = useProgress();
  const { t } = useLang();
  const modules = useModules();
  const questions = useQuestions();

  useEffect(() => markVisited(id), [id]);

  const idx = modules.findIndex((m) => m.id === id);
  const mod = idx >= 0 ? modules[idx] : null;

  if (!mod) {
    return (
      <div className="page-narrow">
        <div className="empty-state">
          <div className="big-ico">{getIcon('Search', 48)}</div>
          <h3>{t('modulepage.notFound')}</h3>
          <p>{t('modulepage.notFoundText')}</p>
          <Link className="btn btn-primary" to="/curso">
            {t('modulepage.backToCourse')}
          </Link>
        </div>
      </div>
    );
  }

  const st = moduleStatus(state, mod.id);
  const best = state.bestScores[mod.id];
  const prev = idx > 0 ? modules[idx - 1] : null;
  const next = idx < modules.length - 1 ? modules[idx + 1] : null;
  const keyConcepts = mod.keyConcepts || [];
  const mistakes = mod.mistakes || [];

  return (
    <div className="page">
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              color: '#0a0c12',
              flexShrink: 0,
              boxShadow: 'var(--glow)',
            }}
          >
            {getIcon(mod.icon, 32)}
          </span>
          <div>
            <span className="section-kicker" style={{ marginBottom: '0.2rem' }}>
              {t('modulepage.moduleOf', { n: idx + 1, total: modules.length })} · {mod.stage}
            </span>
            <h1 style={{ margin: 0 }}>{mod.title}</h1>
          </div>
        </div>
        <p className="card-sub" style={{ maxWidth: 720 }}>{mod.description}</p>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span className={`badge ${BADGE_CLASS[st.status]}`}>{t(`progresspage.status.${st.status}`)}</span>
          {best != null && (
            <span className="badge badge-primary">{t('modulepage.bestScore', { score: best })}</span>
          )}
        </div>
      </header>

      {(mod.sections || []).map((section, i) => (
        <SectionRenderer key={section.id || i} section={section} />
      ))}

      {keyConcepts.length > 0 && (
        <div className="section">
          <h2 className="section-title">{t('modulepage.keyConcepts')}</h2>
          <div className="grid-3">
            {keyConcepts.map((kc, i) => (
              <div key={i} className="card" style={{ padding: '1.1rem 1.25rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.35rem' }}>
                  {typeof kc === 'string' ? kc : kc.term}
                </strong>
                {typeof kc !== 'string' && (
                  <span className="card-sub">
                    <RichText text={kc.def || kc.definition || ''} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {mistakes.length > 0 && (
        <div className="section">
          <h2 className="section-title">{t('modulepage.commonMistakes')}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {mistakes.map((mk, i) => (
              <div key={i} className="card" style={{ padding: '1rem 1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--danger)', flexShrink: 0, marginTop: '0.15rem' }}>
                    {getIcon('X', 18)}
                  </span>
                  <span><RichText text={mk.wrong || ''} /></span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--success)', flexShrink: 0, marginTop: '0.15rem' }}>
                    {getIcon('Check', 18)}
                  </span>
                  <span><RichText text={mk.right || ''} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          margin: '2rem 0',
        }}
      >
        {prev ? (
          <Link className="btn" to={`/modulo/${prev.id}`}>
            {getIcon('ArrowLeft', 16)} {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link className="btn" to={`/modulo/${next.id}`}>
            {next.title} {getIcon('ArrowRight', 16)}
          </Link>
        ) : (
          <Link className="btn btn-primary" to="/examen-final">
            {t('modulepage.goFinalExam')} {getIcon('ArrowRight', 16)}
          </Link>
        )}
      </nav>

      <div className="section">
        <span className="section-kicker">{getIcon('ClipboardCheck', 14)} {t('modulepage.assessment')}</span>
        <h2 className="section-title">{t('modulepage.moduleTest')}</h2>
        <Quiz
          questions={pickRandom(questions.filter((q) => q.moduleId === id), 10)}
          moduleId={id}
          title="Test"
          onDone={({ correct, total, failed }) =>
            recordQuiz(id, { correct, total, failedQs: failed })
          }
        />
      </div>
    </div>
  );
}
