import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { metrics, metricValues, metricRatios, type Metric, type Threshold } from '../data/metrics';

const ragColors: Record<string, { bg: string; text: string; dot: string }> = {
  green: { bg: 'rgba(22,163,74,0.1)', text: 'var(--green)', dot: '#16a34a' },
  amber: { bg: 'rgba(245,158,11,0.1)', text: 'var(--amber)', dot: '#f59e0b' },
  red: { bg: 'rgba(239,68,68,0.1)', text: 'var(--red)', dot: '#ef4444' },
};

function ThresholdBar({ thresholds }: { thresholds: Threshold[] }) {
  return (
    <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
      {thresholds.map((t) => {
        const c = ragColors[t.status];
        return (
          <div
            key={t.status}
            style={{
              flex: 1, background: c.bg, borderRadius: 6, padding: '6px 10px',
              border: `1px solid ${c.dot}22`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 600, color: c.text, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.label}</span>
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>{t.range}</span>
          </div>
        );
      })}
    </div>
  );
}

function MetricDetail({ metric }: { metric: Metric }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.2 }}
      style={{
        background: 'var(--navy-light)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        padding: 24,
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700,
          color: 'var(--blue-light)', background: 'var(--blue-dim)',
          width: 52, height: 52, borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {metric.code}
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 2, fontWeight: 700 }}>{metric.name}</h3>
          <span style={{
            fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.08em', padding: '2px 8px', borderRadius: 4,
            background: metric.type === 'value' ? 'var(--blue-dim)' : 'var(--purple-dim)',
            color: metric.type === 'value' ? 'var(--blue-light)' : 'var(--purple)',
          }}>
            {metric.type === 'value' ? 'Absolute Value' : 'Ratio'}
          </span>
        </div>
      </div>

      <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.6, marginBottom: 18 }}>
        {metric.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-600)', marginBottom: 4 }}>Formula</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: 'var(--blue-light)', fontWeight: 500 }}>{metric.formula}</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-600)', marginBottom: 4 }}>Aggregation</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--white)' }}>{metric.aggregation}</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-600)', marginBottom: 4 }}>Format</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--white)' }}>{metric.format}</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 14px' }}>
          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-600)', marginBottom: 4 }}>Time Grain</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--white)' }}>{metric.timeGranularity}</div>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
        <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-600)', marginBottom: 4 }}>Owner</div>
        <div style={{ fontSize: '0.82rem', color: 'var(--white)' }}>{metric.owner}</div>
      </div>

      <div>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-600)', marginBottom: 6 }}>Alert Thresholds</div>
        <ThresholdBar thresholds={metric.thresholds} />
      </div>
    </motion.div>
  );
}

function MetricButton({ metric, isActive, onClick }: { metric: Metric; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        width: '100%', padding: '8px 12px', borderRadius: 8,
        background: isActive ? 'rgba(0,120,212,0.12)' : 'transparent',
        border: isActive ? '1px solid rgba(0,120,212,0.3)' : '1px solid transparent',
        cursor: 'pointer', textAlign: 'left',
        transition: 'all 0.15s ease',
        fontFamily: 'inherit',
      }}
    >
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', fontWeight: 600,
        color: isActive ? 'var(--blue-light)' : 'var(--gray-500)',
        minWidth: 32,
      }}>
        {metric.code}
      </span>
      <span style={{
        fontSize: '0.82rem',
        color: isActive ? 'var(--white)' : 'var(--gray-400)',
        fontWeight: isActive ? 500 : 400,
      }}>
        {metric.name}
      </span>
      <div style={{
        marginLeft: 'auto', display: 'flex', gap: 3,
      }}>
        {metric.thresholds.map((t) => (
          <div key={t.status} style={{ width: 6, height: 6, borderRadius: '50%', background: ragColors[t.status].dot, opacity: 0.7 }} />
        ))}
      </div>
    </button>
  );
}

export function S09_Glossary() {
  const [selected, setSelected] = useState<string>('REV');
  const active = metrics.find(m => m.code === selected) || metrics[0];

  return (
    <SlideContainer index={8} style={{ padding: '40px 70px' }}>
      <AnimatedEntry>
        <div className="label" style={{ textAlign: 'center' }}>The Semantic Layer</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: 8 }}>Business Glossary</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.15}>
        <p className="subtitle" style={{ textAlign: 'center', marginBottom: 20, fontSize: '0.95rem', maxWidth: 800 }}>
          Each metric is fully defined with formula, thresholds, ownership, and format. Click any metric to explore its definition.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.25} style={{ width: '100%', maxWidth: 1100 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 20, width: '100%' }}>
          {/* Left: metric list */}
          <div style={{
            background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12, padding: 14, overflowY: 'auto', maxHeight: 'calc(100vh - 300px)',
          }}>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--blue-light)', fontWeight: 600, padding: '4px 12px', marginBottom: 6 }}>
              Core Values ({metricValues.length})
            </div>
            {metricValues.map((m) => (
              <MetricButton key={m.code} metric={m} isActive={selected === m.code} onClick={() => setSelected(m.code)} />
            ))}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '10px 0' }} />
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--purple)', fontWeight: 600, padding: '4px 12px', marginBottom: 6 }}>
              Ratios ({metricRatios.length})
            </div>
            {metricRatios.map((m) => (
              <MetricButton key={m.code} metric={m} isActive={selected === m.code} onClick={() => setSelected(m.code)} />
            ))}
          </div>
          {/* Right: detail */}
          <AnimatePresence mode="wait">
            <MetricDetail key={active.code} metric={active} />
          </AnimatePresence>
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <p style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--gray-500)', textAlign: 'center' }}>
          Stored in <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--gray-400)' }}>DIM_METRIC</span> + <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--gray-400)' }}>DIM_METRIC_THRESHOLD</span> &mdash; the data model's semantic layer.
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
