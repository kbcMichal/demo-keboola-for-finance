import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TableDef } from '../data/tables';

const layerColors: Record<string, { border: string; bg: string; headerBg: string }> = {
  dimension: { border: 'rgba(0,120,212,0.4)', bg: 'rgba(0,120,212,0.06)', headerBg: 'rgba(0,120,212,0.15)' },
  fact:      { border: 'rgba(22,163,74,0.4)', bg: 'rgba(22,163,74,0.06)', headerBg: 'rgba(22,163,74,0.15)' },
  mart:      { border: 'rgba(139,92,246,0.4)', bg: 'rgba(139,92,246,0.06)', headerBg: 'rgba(139,92,246,0.15)' },
  validation:{ border: 'rgba(245,158,11,0.4)', bg: 'rgba(245,158,11,0.06)', headerBg: 'rgba(245,158,11,0.15)' },
  staging:   { border: 'rgba(148,163,184,0.3)', bg: 'rgba(148,163,184,0.04)', headerBg: 'rgba(148,163,184,0.12)' },
};

const layerTextColors: Record<string, string> = {
  dimension: 'var(--blue-light)',
  fact: 'var(--green)',
  mart: 'var(--purple)',
  validation: 'var(--amber)',
  staging: 'var(--gray-400)',
};

type TableNodeData = {
  table: TableDef;
};

function TableNodeComponent({ data }: NodeProps & { data: TableNodeData }) {
  const [expanded, setExpanded] = useState(false);
  const { table } = data;
  const colors = layerColors[table.layer] || layerColors.staging;
  const textColor = layerTextColors[table.layer] || 'var(--gray-400)';

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{
        background: 'var(--navy-light)',
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        cursor: 'pointer',
        minWidth: 180,
        maxWidth: 260,
        fontSize: '0.72rem',
        fontFamily: "'JetBrains Mono', monospace",
        overflow: 'hidden',
      }}
    >
      <Handle type="target" position={Position.Left} style={{ background: textColor, width: 6, height: 6 }} />
      <Handle type="source" position={Position.Right} style={{ background: textColor, width: 6, height: 6 }} />

      <div style={{
        background: colors.headerBg,
        padding: '6px 10px',
        fontWeight: 600,
        color: textColor,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span>{table.name}</span>
        <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>{expanded ? '▼' : '▶'}</span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '4px 0' }}>
              {table.columns.map((col) => (
                <div
                  key={col.name}
                  style={{
                    padding: '3px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                    color: 'var(--gray-400)',
                  }}
                >
                  <span>
                    {col.pk && <span style={{ color: 'var(--amber)', marginRight: 4 }}>🔑</span>}
                    {col.fk && !col.pk && <span style={{ color: 'var(--blue-light)', marginRight: 4 }}>→</span>}
                    {col.name}
                  </span>
                  <span style={{ color: 'var(--gray-600)', fontSize: '0.65rem' }}>{col.type}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const TableNode = memo(TableNodeComponent);
