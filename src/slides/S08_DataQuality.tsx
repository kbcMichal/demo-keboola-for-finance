import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const checksLeft = [
  { icon: '\u2261', color: 'var(--green)', bg: 'var(--green-dim)', title: 'BS Balance Validation', desc: 'Assets + Liabilities + Equity = 0 per entity per month. Catches FX gaps, missing opening balances, incomplete synthetic entries.' },
  { icon: '\u26A0', color: 'var(--amber)', bg: 'var(--amber-dim)', title: 'Unassigned Accounts', desc: 'GL entries referencing accounts not in DIM_COA. Usually means the CoA mapping is incomplete \u2014 finance can add the missing mapping directly.' },
  { icon: '\u2716', color: 'var(--red)', bg: 'var(--red-dim)', title: 'FININ Assignment Bugs', desc: 'Journal entries with broken FININ mappings: missing codes, non-leaf targets, unmapped accounts. Pinpoints exactly which accounts need fixing.' },
];

const checksRight = [
  { icon: '\u21C4', color: 'var(--blue-light)', bg: 'var(--blue-dim)', title: 'Local vs Consolidated Sums', desc: 'Verifies that the sum of local entity values matches the consolidated rollup. Catches MAP_FININ_STRUCTURE gaps and sign convention issues.' },
  { icon: '$', color: 'var(--purple)', bg: 'var(--purple-dim)', title: 'Missing FX Rates', desc: 'Entity-period combinations with no exchange rate. Prevents silent zeros in converted values.' },
];

function DQCheck({ icon, color, bg, title, desc }: typeof checksLeft[0]) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      padding: '12px 16px', background: 'var(--navy-light)',
      border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, marginBottom: 8,
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6, display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem',
        flexShrink: 0, background: bg,
      }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 2 }}>{title}</h4>
        <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', lineHeight: 1.4 }}>{desc}</p>
      </div>
    </div>
  );
}

export function S08_DataQuality() {
  return (
    <SlideContainer index={7} centered={false} style={{ padding: '50px 80px' }}>
      <AnimatedEntry style={{ textAlign: 'center', width: '100%' }}>
        <div className="label">Self-Service Data Quality</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1} style={{ textAlign: 'center', width: '100%' }}>
        <h2 style={{ fontSize: '2rem' }}>Finance Fixes Issues. Not IT.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2} style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <p className="subtitle" style={{ marginBottom: 20, fontSize: '1rem', maxWidth: 800 }}>
          Automated validation checks run after every pipeline execution. Finance teams see issues in the app and can resolve them without going back to the data team.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div className="two-col">
          <div>
            {checksLeft.map((c) => <DQCheck key={c.title} {...c} />)}
          </div>
          <div>
            {checksRight.map((c) => <DQCheck key={c.title} {...c} />)}
            <div style={{ marginTop: 12, padding: 14, background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.2)', borderRadius: 8 }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>
                <strong style={{ color: 'var(--blue-light)' }}>Thresholds are configurable</strong> &mdash; defined in the Business Glossary (DIM_METRIC_THRESHOLD). RAG status (Red/Amber/Green) per metric with upper and lower bounds. Client defines what &quot;acceptable&quot; means.
              </p>
            </div>
          </div>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
