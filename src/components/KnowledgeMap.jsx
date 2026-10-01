import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Bot, Wrench, LayoutDashboard, GitBranch } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

/** Tree data: "El mapa de la IA". Child moduleId null = not clickable. */
const BRANCHES = [
  {
    labelKey: 'knowledgemap.label.llm',
    moduleId: 'm2',
    Icon: Brain,
    children: [
      { labelKey: 'knowledgemap.label.tokens', moduleId: 'm3' },
      { labelKey: 'knowledgemap.label.contexto', moduleId: 'm4' },
      { labelKey: 'knowledgemap.label.prompts', moduleId: 'm5' },
      { labelKey: 'knowledgemap.label.inferencia', moduleId: 'm2' },
    ],
  },
  {
    labelKey: 'knowledgemap.label.agente',
    moduleId: 'm11',
    Icon: Bot,
    children: [
      { labelKey: 'knowledgemap.label.llm', moduleId: 'm2' },
      { labelKey: 'knowledgemap.label.tools', moduleId: 'm7' },
      { labelKey: 'knowledgemap.label.memoria', moduleId: 'm6' },
      { labelKey: 'knowledgemap.label.skills', moduleId: 'm8' },
      { labelKey: 'knowledgemap.label.loops', moduleId: 'm10' },
    ],
  },
  {
    labelKey: 'knowledgemap.label.tools',
    moduleId: 'm7',
    Icon: Wrench,
    children: [
      { labelKey: 'knowledgemap.label.apis', moduleId: 'm17' },
      { labelKey: 'knowledgemap.label.mcp', moduleId: 'm9' },
    ],
  },
  {
    labelKey: 'knowledgemap.label.aplicacion',
    moduleId: 'm27',
    Icon: LayoutDashboard,
    children: [
      { labelKey: 'knowledgemap.label.frontend', moduleId: 'm14' },
      { labelKey: 'knowledgemap.label.backend', moduleId: 'm14' },
      { labelKey: 'knowledgemap.label.api', moduleId: 'm17' },
      { labelKey: 'knowledgemap.label.llm', moduleId: 'm2' },
      { labelKey: 'knowledgemap.label.basedatos', moduleId: null },
    ],
  },
  {
    labelKey: 'knowledgemap.label.desarrollo',
    moduleId: 'm23',
    Icon: GitBranch,
    children: [
      { labelKey: 'knowledgemap.label.git', moduleId: 'm23' },
      { labelKey: 'knowledgemap.label.github', moduleId: 'm24' },
      { labelKey: 'knowledgemap.label.vercel', moduleId: 'm25' },
    ],
  },
];

/**
 * KnowledgeMap — "El mapa de la IA" tree.
 * Clicking a node with a moduleId navigates to /modulo/<id>;
 * nodes without moduleId are not clickable.
 */
export function KnowledgeMap() {
  const { t } = useLang();
  const navigate = useNavigate();

  const go = (moduleId) => {
    if (moduleId) navigate(`/modulo/${moduleId}`);
  };

  const renderNode = (node, { isRoot = false, Icon = null } = {}) => {
    const clickable = Boolean(node.moduleId);
    const cls = isRoot ? 'kmap-node kmap-root' : 'kmap-node';
    const label = t(node.labelKey);
    return (
      <button
        key={`${node.labelKey}-${node.moduleId ?? 'none'}`}
        type="button"
        className={cls}
        onClick={clickable ? () => go(node.moduleId) : undefined}
        disabled={!clickable}
        style={!clickable ? { cursor: 'default' } : undefined}
        title={clickable ? t('knowledgemap.goto', { id: node.moduleId }) : label}
      >
        {Icon && <Icon size={isRoot ? 20 : 16} />}
        <span>{label}</span>
      </button>
    );
  };

  return (
    <div className="kmap">
      {BRANCHES.map((branch) => (
        <div key={branch.labelKey} className="kmap-branch">
          {renderNode(branch, { isRoot: true, Icon: branch.Icon })}
          <div className="kmap-children">
            {branch.children.map((child) => renderNode(child))}
          </div>
        </div>
      ))}
    </div>
  );
}
