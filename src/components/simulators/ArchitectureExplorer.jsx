import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Network } from 'lucide-react';
import {
  User, LayoutDashboard, Server, Plug, BrainCircuit, Wrench, Usb,
  Cloud, History, FileSearch, Database, Github, Rocket,
} from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const NODES = [
  { id: 'usuario', labelKey: 'architectureexplorer.node.usuario.label', Icon: User, moduleId: null,
    descKey: 'architectureexplorer.node.usuario.desc' },
  { id: 'frontend', labelKey: 'architectureexplorer.node.frontend.label', Icon: LayoutDashboard, moduleId: 'm14',
    descKey: 'architectureexplorer.node.frontend.desc' },
  { id: 'backend', labelKey: 'architectureexplorer.node.backend.label', Icon: Server, moduleId: 'm14',
    descKey: 'architectureexplorer.node.backend.desc' },
  { id: 'api', labelKey: 'architectureexplorer.node.api.label', Icon: Plug, moduleId: 'm17',
    descKey: 'architectureexplorer.node.api.desc' },
  { id: 'llm', labelKey: 'architectureexplorer.node.llm.label', Icon: BrainCircuit, moduleId: 'm2',
    descKey: 'architectureexplorer.node.llm.desc' },
  { id: 'tools', labelKey: 'architectureexplorer.node.tools.label', Icon: Wrench, moduleId: 'm7',
    descKey: 'architectureexplorer.node.tools.desc' },
  { id: 'mcp', labelKey: 'architectureexplorer.node.mcp.label', Icon: Usb, moduleId: 'm9',
    descKey: 'architectureexplorer.node.mcp.desc' },
  { id: 'servicios', labelKey: 'architectureexplorer.node.servicios.label', Icon: Cloud, moduleId: null,
    descKey: 'architectureexplorer.node.servicios.desc' },
  { id: 'memoria', labelKey: 'architectureexplorer.node.memoria.label', Icon: History, moduleId: 'm6',
    descKey: 'architectureexplorer.node.memoria.desc' },
  { id: 'rag', labelKey: 'architectureexplorer.node.rag.label', Icon: FileSearch, moduleId: 'm21',
    descKey: 'architectureexplorer.node.rag.desc' },
  { id: 'database', labelKey: 'architectureexplorer.node.database.label', Icon: Database, moduleId: 'm17',
    descKey: 'architectureexplorer.node.database.desc' },
  { id: 'github', labelKey: 'architectureexplorer.node.github.label', Icon: Github, moduleId: 'm23',
    descKey: 'architectureexplorer.node.github.desc' },
  { id: 'vercel', labelKey: 'architectureexplorer.node.vercel.label', Icon: Rocket, moduleId: 'm25',
    descKey: 'architectureexplorer.node.vercel.desc' },
];

const MAIN_CHAIN = ['usuario', 'frontend', 'backend', 'api', 'llm'];

export function ArchitectureExplorer() {
  const { t } = useLang();

  const nodes = NODES.map((n) => ({ ...n, label: t(n.labelKey), desc: t(n.descKey) }));
  const [selectedId, setSelectedId] = useState(NODES[0].id);
  const selected = nodes.find((n) => n.id === selectedId) ?? nodes[0];
  const { Icon } = selected;

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Network size={18} /> {t('architectureexplorer.title')}</h3>
        <p className="card-sub">
          {t('architectureexplorer.intro')}
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '0.6rem',
            marginTop: '1rem',
          }}
        >
          {nodes.map((n) => {
            const NIcon = n.Icon;
            const active = selected.id === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setSelectedId(n.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.8rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: active ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: active ? 'var(--primary-soft)' : 'var(--bg-raised)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  color: 'var(--text)',
                  textAlign: 'center',
                }}
              >
                <NIcon size={22} />
                {n.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Icon size={20} /> {selected.label}
        </h3>
        <p style={{ marginTop: '0.5rem' }}>{selected.desc}</p>
        {selected.moduleId ? (
          <Link to={`/modulo/${selected.moduleId}`} className="btn btn-primary" style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center' }}>
            {t('architectureexplorer.view_module')}
          </Link>
        ) : (
          <span className="badge badge-muted" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
            {t('architectureexplorer.no_module')}
          </span>
        )}
      </div>

      <div className="card">
        <h3 className="card-title">{t('architectureexplorer.main_chain')}</h3>
        <div className="flow">
          {MAIN_CHAIN.map((id, i) => {
            const n = nodes.find((x) => x.id === id);
            return (
              <div key={id}>
                <div className="flow-node">
                  <div className="fn-label">{n.label}</div>
                  <div className="fn-desc">{n.desc}</div>
                </div>
                {i < MAIN_CHAIN.length - 1 && (
                  <div className="flow-arrow"><ArrowDown size={18} /></div>
                )}
              </div>
            );
          })}
        </div>
        <p className="card-sub">
          {t('architectureexplorer.chain_note')}
        </p>
      </div>
    </div>
  );
}
