import { motion } from 'framer-motion';
import { pipelineSteps, separateFlow } from '../data/pipeline';

const variantStyles = {
  standard: {
    borderColor: 'rgba(22,163,74,0.4)',
    background: 'rgba(22,163,74,0.06)',
  },
  custom: {
    borderColor: 'rgba(245,158,11,0.4)',
    background: 'rgba(245,158,11,0.06)',
  },
};

function FlowConnector({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.3, ease: 'easeOut' }}
      style={{
        width: 32,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'left center',
      }}
    >
      <svg width="32" height="12" viewBox="0 0 32 12">
        <line x1="0" y1="6" x2="24" y2="6" stroke="var(--gray-600)" strokeWidth="1.5" />
        <polygon points="22,2 30,6 22,10" fill="var(--gray-600)" />
      </svg>
    </motion.div>
  );
}

export function PipelineFlow() {
  return (
    <div style={{ width: '100%', maxWidth: 1200 }}>
      <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', marginTop: 16 }}>
        {pipelineSteps.map((step, i) => (
          <div key={step.id} style={{ display: 'contents' }}>
            {i > 0 && <FlowConnector delay={0.15 + i * 0.1} />}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
              style={{ flex: 1, display: 'flex' }}
            >
              <div style={{
                flex: 1,
                background: variantStyles[step.variant].background,
                border: `1px solid ${variantStyles[step.variant].borderColor}`,
                borderRadius: 10,
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: 96,
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue-light)', marginBottom: 4, letterSpacing: '0.05em' }}>{step.id}</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, lineHeight: 1.3 }}>{step.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', marginTop: 5, lineHeight: 1.35 }}>{step.description}</div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: 20, display: 'flex', gap: 28, fontSize: '0.78rem', justifyContent: 'center', color: 'var(--gray-400)' }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(22,163,74,0.3)', border: '1px solid rgba(22,163,74,0.5)', display: 'inline-block' }} />
          Standardized (no custom SQL)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(245,158,11,0.3)', border: '1px solid rgba(245,158,11,0.5)', display: 'inline-block' }} />
          Custom per client
        </span>
      </motion.div>

      {/* Separate flow note */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: 20,
          padding: '12px 20px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', textAlign: 'center' }}>
          <strong style={{ color: 'var(--gray-400)' }}>+ Separate flow:</strong> {separateFlow.id} {separateFlow.name} &mdash; {separateFlow.description}
        </p>
      </motion.div>
    </div>
  );
}
