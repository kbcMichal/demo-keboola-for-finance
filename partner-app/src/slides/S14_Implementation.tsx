import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const steps = [
  { num: 1, title: 'Discovery', desc: 'ERP sources, CoA structure, metric definitions', color: 'var(--blue-light)', bg: 'var(--blue-glow)' },
  { num: 2, title: 'Scaffold', desc: 'Run CLI, configure extractors, set up MAP tables', color: 'var(--blue-light)', bg: 'var(--blue-glow)' },
  { num: 3, title: 'Customize T2', desc: "Map the ERP's GL schema to standard journal format", color: 'var(--amber)', bg: 'rgba(245,158,11,0.15)' },
  { num: 4, title: 'Validate & Deploy', desc: 'Run pipeline, fix DQ issues, deploy Data App', color: 'var(--green)', bg: 'var(--green-dim)' },
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
        <h2 style={{ fontSize: '2.1rem' }}>How We Deliver Together</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 32, fontSize: '1rem' }}>
          Discovery workshop, automated scaffold, one custom transformation, iterate on data quality.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3} style={{ width: '100%', maxWidth: 1000 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 32px 1fr 32px 1fr 32px 1fr',
          alignItems: 'center',
        }}>
          {steps.map((s, i) => {
            const elements = [];
            if (i > 0) {
              elements.push(
                <div key={`arrow-${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="12" viewBox="0 0 24 12">
                    <line x1="0" y1="6" x2="16" y2="6" stroke="var(--gray-600)" strokeWidth="1.5" />
                    <polygon points="14,2 22,6 14,10" fill="var(--gray-600)" />
                  </svg>
                </div>
              );
            }
            elements.push(
              <div key={s.num} style={{
                background: 'var(--navy-light)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                padding: '24px 18px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', background: s.bg,
                  color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.1rem', margin: '0 auto 12px',
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-400)', lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
              </div>
            );
            return elements;
          })}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <div style={{ display: 'flex', gap: 48, marginTop: 32 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--blue-light)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
