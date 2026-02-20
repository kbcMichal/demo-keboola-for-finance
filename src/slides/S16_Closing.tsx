import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const points = [
  'Standardized data model & pipeline \u2014 90% reusable across clients',
  'ERP-agnostic \u2014 T2 Journal Entries is the main custom step, input mappings and MAP tables adapt per ERP',
  'Self-service data quality \u2014 finance fixes issues, not IT',
  'React Data App included \u2014 full BI layer optional',
  'Reusable datasets feed margin analysis, forecasting, and more',
  'All standard Keboola components \u2014 nothing new for your team to learn',
];

export function S16_Closing() {
  return (
    <SlideContainer index={14}>
      <AnimatedEntry><div className="label">Summary</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}><h2>Financial Intelligence on Keboola</h2></AnimatedEntry>
      <AnimatedEntry delay={0.2}><div className="divider" /></AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div style={{ maxWidth: 700, textAlign: 'left' }}>
          {points.map((p) => (
            <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
              <span style={{ color: 'var(--green)', fontSize: '1.1rem', marginTop: 2 }}>{'\u2713'}</span>
              <span style={{ fontSize: '1rem', lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <p style={{ marginTop: 32, fontSize: '1rem', color: 'var(--blue-light)' }}>
          Questions?
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
