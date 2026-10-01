import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Bot, Wrench, LayoutDashboard, GitBranch } from 'lucide-react';

/** Tree data: "El mapa de la IA". Child moduleId null = not clickable. */
const BRANCHES = [
  {
    label: 'LLM',
    moduleId: 'm2',
    Icon: Brain,
    children: [
      { label: 'Tokens', moduleId: 'm3' },
      { label: 'Contexto', moduleId: 'm4' },
      { label: 'Prompts', moduleId: 'm5' },
      { label: 'Inferencia', moduleId: 'm2' },
    ],
  },
  {
    label: 'Agente',
    moduleId: 'm11',
    Icon: Bot,
    children: [
      { label: 'LLM', moduleId: 'm2' },
      { label: 'Tools', moduleId: 'm7' },
      { label: 'Memoria', moduleId: 'm6' },
      { label: 'Skills', moduleId: 'm8' },
      { label: 'Loops', moduleId: 'm10' },
    ],
  },
  {
    label: 'Tools',
    moduleId: 'm7',
    Icon: Wrench,
    children: [
      { label: 'APIs', moduleId: 'm17' },
      { label: 'MCP', moduleId: 'm9' },
    ],
  },
  {
    label: 'Aplicación',
    moduleId: 'm27',
    Icon: LayoutDashboard,
    children: [
      { label: 'Frontend', moduleId: 'm14' },
      { label: 'Backend', moduleId: 'm14' },
      { label: 'API', moduleId: 'm17' },
      { label: 'LLM', moduleId: 'm2' },
      { label: 'Base de datos', moduleId: null },
    ],
  },
  {
    label: 'Desarrollo',
    moduleId: 'm23',
    Icon: GitBranch,
    children: [
      { label: 'Git', moduleId: 'm23' },
      { label: 'GitHub', moduleId: 'm24' },
      { label: 'Vercel', moduleId: 'm25' },
    ],
  },
];

/**
 * KnowledgeMap — "El mapa de la IA" tree.
 * Clicking a node with a moduleId navigates to /modulo/<id>;
 * nodes without moduleId are not clickable.
 */
export function KnowledgeMap() {
  const navigate = useNavigate();

  const go = (moduleId) => {
    if (moduleId) navigate(`/modulo/${moduleId}`);
  };

  const renderNode = (node, { isRoot = false, Icon = null } = {}) => {
    const clickable = Boolean(node.moduleId);
    const cls = isRoot ? 'kmap-node kmap-root' : 'kmap-node';
    return (
      <button
        key={`${node.label}-${node.moduleId ?? 'none'}`}
        type="button"
        className={cls}
        onClick={clickable ? () => go(node.moduleId) : undefined}
        disabled={!clickable}
        style={!clickable ? { cursor: 'default' } : undefined}
        title={clickable ? `Ir al módulo ${node.moduleId}` : node.label}
      >
        {Icon && <Icon size={isRoot ? 20 : 16} />}
        <span>{node.label}</span>
      </button>
    );
  };

  return (
    <div className="kmap">
      {BRANCHES.map((branch) => (
        <div key={branch.label} className="kmap-branch">
          {renderNode(branch, { isRoot: true, Icon: branch.Icon })}
          <div className="kmap-children">
            {branch.children.map((child) => renderNode(child))}
          </div>
        </div>
      ))}
    </div>
  );
}
