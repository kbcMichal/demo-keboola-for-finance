import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const checks = [
  { icon: '\u2261', color: 'var(--green)', bg: 'var(--green-dim)', title: 'BS Balance Validation', desc: 'Assets + Liabilities + Equity = 0 per entity per month' },
  { icon: '\u26A0', color: 'var(--amber)', bg: 'var(--amber-dim)', title: 'Unassigned Accounts', desc: 'GL entries referencing accounts not in DIM_COA' },
  { icon: '\u2716', color: 'var(--red)', bg: 'var(--red-dim)', title: 'FININ Assignment Bugs', desc: 'Broken mappings: missing codes, non-leaf targets' },
  { icon: '\u21C4', color: 'var(--blue-light)', bg: 'var(--blue-dim)', title: 'Local vs Consolidated', desc: 'Sum of local values matches consolidated rollup' },
  { icon: '$', color: 'var(--purple)', bg: 'var(--purple-dim)', title: 'Missing FX Rates', desc: 'Reporting currency conversion gaps per entity-period' },
  { icon: '$', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'Missing FX Rates (SC)', desc: 'Secondary currency conversion gaps' },
  { icon: '\u21CB', color: 'var(--amber)', bg: 'var(--amber-dim)', title: 'Intercompany Balance', desc: 'Sender vs receiver intercompany reconciliation' },
  { icon: '\u2211', color: 'var(--green)', bg: 'var(--green-dim)', title: 'Group Balance Check', desc: 'Consolidated group-level balance validation' },
];

export function S08_DataQuality() {
  return (
    <SlideContainer index={7}>
      <AnimatedEntry>
        <div className="label">Self-Service Data Quality</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2.1rem' }}>Finance Fixes Issues. Not IT.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 28, fontSize: '1rem', maxWidth: 750 }}>
          Eight automated checks run after every pipeline execution.<br />
          Finance teams see issues in the app and resolve them directly.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3} style={{ width: '100%', maxWidth: 940 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {checks.map((c) => (
            <div key={c.title} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '10px 18px', background: 'var(--navy-light)',
              border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8,
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8, display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem',
                flexShrink: 0, background: c.bg,
              }}>
                <span style={{ color: c.color }}>{c.icon}</span>
              </div>
              <div style={{ minWidth: 175, flexShrink: 0 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{c.title}</span>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)', textAlign: 'left' }}>
                {c.desc}
              </span>
            </div>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <div style={{
          marginTop: 18, padding: '12px 20px',
          background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.2)',
          borderRadius: 8, maxWidth: 700,
        }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--gray-400)', margin: 0 }}>
            <strong style={{ color: 'var(--blue-light)' }}>Thresholds are configurable</strong> &mdash; RAG status per metric with upper and lower bounds. Client defines what &quot;acceptable&quot; means.
          </p>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
