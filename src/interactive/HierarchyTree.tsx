import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { HierarchyNode } from '../data/hierarchy';
import { fininHierarchy, accountTypes } from '../data/hierarchy';

function TreeNode({ node, depth = 0 }: { node: HierarchyNode; depth?: number }) {
  const hasChildren = node.children && node.children.length > 0;
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <div
        onClick={() => hasChildren && setExpanded(!expanded)}
        style={{
          paddingLeft: depth * 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.78rem',
          lineHeight: 1.8,
          cursor: hasChildren ? 'pointer' : 'default',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {hasChildren && (
          <motion.span
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.15 }}
            style={{ fontSize: '0.65rem', color: 'var(--gray-600)', display: 'inline-block', width: 12 }}
          >
            ▶
          </motion.span>
        )}
        {!hasChildren && <span style={{ width: 12 }} />}
        <span style={{ color: 'var(--blue-light)', fontWeight: 600 }}>{node.code}</span>
        <span style={{ color: 'var(--gray-400)', marginLeft: 8 }}>{node.name}</span>
        {node.type && (
          <span style={{ color: 'var(--gray-600)', fontSize: '0.65rem', marginLeft: 6 }}>{node.type}</span>
        )}
      </div>
      <AnimatePresence>
        {hasChildren && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            {node.children!.map((child) => (
              <TreeNode key={child.code} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HierarchyTree() {
  return (
    <div className="two-col" style={{ maxWidth: '100%', textAlign: 'left' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: 12, color: 'var(--blue-light)' }}>
          Consolidation Structure (MAP_FININ_STRUCTURE)
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginBottom: 16 }}>
          9 rows. Rarely changes. Defines the top-level reporting hierarchy that local accounts map into.
        </p>
        <div>
          {fininHierarchy.map((node) => (
            <TreeNode key={node.code} node={node} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: 12, color: 'var(--amber)' }}>
          Account Type Mapping (MAP_ACCOUNT_TYPE)
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginBottom: 16 }}>
          ERP-agnostic. Maps each ERP's account types to 5 standard categories. Tailored per accounting system.
        </p>
        <div style={{ fontSize: '0.78rem', lineHeight: 2 }}>
          {accountTypes.map((at) => (
            <div key={at.code}>
              <span style={{ color: at.color, fontWeight: 600 }}>{at.code}</span>
              {' \u2014 '}{at.label}{' '}
              <span style={{ color: 'var(--gray-600)' }}>({at.erpTypes})</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, padding: 12, background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8 }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--gray-400)', margin: 0, textAlign: 'left' }}>
            <strong style={{ color: 'var(--amber)' }}>Tailored per ERP:</strong> Each accounting system has its own account type codes. The mapping table translates them to the 5 standard categories (A/P/R/C/X). This is what makes the pipeline ERP-agnostic.
          </p>
        </div>
        <div style={{ marginTop: 16, padding: 12, background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.2)', borderRadius: 8 }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--gray-400)', margin: 0, textAlign: 'left' }}>
            <strong style={{ color: 'var(--blue-light)' }}>Both tables can be self-served</strong> &mdash; via Google Sheets, a Data App, or direct upload. Finance updates mappings without touching SQL.
          </p>
        </div>
      </div>
    </div>
  );
}
