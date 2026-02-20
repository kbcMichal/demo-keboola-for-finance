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

function AnimatedArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      style={{ color: 'var(--gray-600)', fontSize: '1.2rem', flexShrink: 0, width: 20, textAlign: 'center' as const }}
    >
      →
    </motion.div>
  );
}

export function PipelineFlow() {
  return (
    <div style={{ width: '100%', maxWidth: 1200 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%', marginTop: 16 }}>
        {pipelineSteps.map((step, i) => (
          <div key={step.id} style={{ display: 'contents' }}>
            {i > 0 && <AnimatedArrow delay={0.1 + i * 0.08} />}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              style={{ flex: 1, textAlign: 'center' as const, position: 'relative' as const }}
            >
              <div style={{
                background: variantStyles[step.variant].background,
                border: `1px solid ${variantStyles[step.variant].borderColor}`,
                borderRadius: 10,
                padding: '14px 10px',
                margin: '0 4px',
                minHeight: 90,
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue-light)', marginBottom: 4 }}>{step.id}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, lineHeight: 1.3 }}>{step.name}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--gray-500)', marginTop: 4, lineHeight: 1.3 }}>{step.description}</div>
              </div>
              {/* Animated data flow line */}
              {i < pipelineSteps.length - 1 && (
                <svg style={{ position: 'absolute', top: '50%', right: -14, width: 24, height: 4, overflow: 'visible' }}>
                  <motion.line
                    x1={0} y1={2} x2={24} y2={2}
                    stroke="var(--blue-light)"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 8 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                  />
                </svg>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: 16, display: 'flex', gap: 24, fontSize: '0.78rem', justifyContent: 'center' }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(22,163,74,0.3)', border: '1px solid rgba(22,163,74,0.5)', display: 'inline-block' }} />
          Standardized (no custom SQL)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(245,158,11,0.3)', border: '1px solid rgba(245,158,11,0.5)', display: 'inline-block' }} />
          Custom per client
        </span>
      </motion.div>

      {/* Separate flow note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
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
