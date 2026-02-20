import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const steps = [
  { num: 1, title: 'Discovery', desc: 'ERP sources, CoA structure,\nmetric definitions', color: 'var(--blue-light)', bg: 'var(--blue-glow)' },
  { num: 2, title: 'Scaffold', desc: 'Run CLI, configure extractors,\nset up MAP tables', color: 'var(--blue-light)', bg: 'var(--blue-glow)' },
  { num: 3, title: 'Customize T2', desc: "Map the ERP's GL schema\nto standard journal format", color: 'var(--amber)', bg: 'rgba(245,158,11,0.15)' },
  { num: 4, title: 'Validate & Deploy', desc: 'Run pipeline, fix DQ issues,\ndeploy Data App', color: 'var(--green)', bg: 'var(--green-dim)' },
];

const stats = [
  { num: '24', label: 'tables scaffolded' },
  { num: '7', label: 'transformations' },
  { num: '~90%', label: 'reusable SQL' },
  { num: '1', label: 'custom transformation' },
];

export function S14_Implementation() {
  return (
    <SlideContainer index={13}>
      <AnimatedEntry><div className="label">Implementation</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>How We Deliver Together</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 28, fontSize: '1.05rem' }}>
          Discovery workshop, automated scaffold, one custom transformation, iterate on data quality.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, maxWidth: 1100, width: '100%' }}>
          {steps.map((s) => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: s.bg,
                color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '1.2rem', margin: '0 auto 14px',
              }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--gray-400)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <div className="stats-row" style={{ marginTop: 24 }}>
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
