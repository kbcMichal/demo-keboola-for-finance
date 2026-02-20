import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { metrics } from '../data/metrics';

export function S09_Glossary() {
  return (
    <SlideContainer index={8}>
      <AnimatedEntry><div className="label">The Semantic Layer</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Business Glossary &mdash; Metrics Definition Workshop</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 20, fontSize: '1rem', maxWidth: 850 }}>
          Similar to BDM workshops you already run, but focused on <span className="highlight" style={{ fontWeight: 600 }}>metric definitions</span> rather than data entity models. We co-create formulas, thresholds, and ownership with the client.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 900, width: '100%' }}>
          {metrics.map((m) => (
            <div key={m.code} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 8, padding: '12px 16px',
            }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', fontWeight: 600, color: 'var(--blue-light)', minWidth: 40 }}>
                {m.code}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.85rem' }}>{m.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)', fontFamily: "'JetBrains Mono', monospace" }}>{m.formula}</div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <p style={{ marginTop: 16, fontSize: '0.82rem', color: 'var(--gray-500)', maxWidth: 700, textAlign: 'center' }}>
          Each metric has: definition, formula, aggregation type, format (% / absolute), time granularity, RAG thresholds, and an owner. All stored in DIM_METRIC + DIM_METRIC_THRESHOLD.
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
