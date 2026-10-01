import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

/**
 * FlowDiagram — renders a vertical (down) or horizontal (right) flow of nodes.
 * `highlight` accepts node indexes or labels to mark with the .highlight tone.
 */
export function FlowDiagram({ nodes = [], direction = 'down', highlight = [] }) {
  if (!nodes || nodes.length === 0) return null;

  const isHighlighted = (node, i) =>
    highlight.includes(i) || highlight.includes(node.label);

  const renderNode = (node, i) => (
    <div
      key={i}
      className={`flow-node${isHighlighted(node, i) ? ' highlight' : ''}`}
    >
      <div className="fn-label">{node.label}</div>
      {node.desc && <div className="fn-desc">{node.desc}</div>}
    </div>
  );

  if (direction === 'right') {
    return (
      <div className="flow-row" role="list">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {renderNode(node, i)}
            {i < nodes.length - 1 && (
              <span className="flow-arrow-h" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="flow" role="list">
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          {renderNode(node, i)}
          {i < nodes.length - 1 && (
            <div className="flow-arrow" aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
