import React from 'react';
import { Check, X } from 'lucide-react';

const TONE_CLASS = {
  poor: 'poor',
  good: 'good',
  a: 'neutral-a',
  b: 'neutral-b',
};

/**
 * CompareBlocks — two-column comparison using .compare / .compare-col + tone.
 * left/right = { title, tone: 'poor' | 'good' | 'a' | 'b', items: [] }
 */
export function CompareBlocks({ left, right, heading, caption }) {
  const renderCol = (col, key) => (
    <div key={key} className={`compare-col ${TONE_CLASS[col.tone] || ''}`.trim()}>
      <h4 style={{ margin: '0 0 0.6rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        {col.tone === 'good' && <Check size={17} />}
        {col.tone === 'poor' && <X size={17} />}
        {col.title}
      </h4>
      <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
        {(col.items || []).map((item, i) => (
          <li key={i} style={{ marginBottom: '0.35rem' }}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      {heading && <h3 className="card-title" style={{ marginBottom: '0.4rem' }}>{heading}</h3>}
      <div className="compare">
        {renderCol(left, 'left')}
        {renderCol(right, 'right')}
      </div>
      {caption && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
          {caption}
        </p>
      )}
    </div>
  );
}

/**
 * DataTable — generic table using .table-wrap + table.data.
 */
export function DataTable({ headers, rows, heading }) {
  return (
    <div>
      {heading && <h3 className="card-title" style={{ marginBottom: '0.4rem' }}>{heading}</h3>}
      <div className="table-wrap">
        <table className="data">
          <thead>
            <tr>
              {(headers || []).map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(rows || []).map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
