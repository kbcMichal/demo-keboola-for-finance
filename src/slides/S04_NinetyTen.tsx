import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const standardized = [
  { title: 'Data Model (24 tables)', desc: '14 dimensions, 2 fact tables, 1 mart, 2 intermediate, 5 validation \u2014 same schema every time' },
  { title: '5 of 7 Transformations', desc: 'T0 Initiation, T1 COA Build, T3 Core Processing, T4 Validation, T6 KPI Metrics \u2014 zero custom SQL' },
  { title: 'CoA Hierarchy Engine', desc: 'Recursive CTE builds L1\u2013L10 levels, FININ consolidation mapping, leaf/parent flagging' },
  { title: 'Validation & KPI Framework', desc: '5 quality checks + 12 metrics with RAG thresholds \u2014 all template-driven' },
];

const custom = [
  { title: 'ERP Connectors', desc: "Configure extractors for Subsidiary, FX Rates, Chart of Accounts, and GL entries from the client's ERP" },
  { title: 'T2 Journal Entry Mapping', desc: "One transformation that maps the ERP's GL schema to our standardized journal format \u2014 sign convention, keys, entity scoping" },
  { title: 'MAP Tables', desc: 'Account Type mapping (A/P/R/C/X) and FININ Structure \u2014 maintained by the client or SE via Google Sheets, Data App, or direct upload' },
  { title: 'Business Unit Definitions', desc: 'Entity list, cost centers, regions \u2014 often consolidated outside ERPs, loaded via spreadsheet or manual upload' },
];

function ItemCard({ title, desc, color }: { title: string; desc: string; color: string }) {
  return (
    <div style={{
      background: 'var(--navy-light)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderLeft: `3px solid ${color}`,
      borderRadius: 8,
      padding: '16px 18px',
    }}>
      <h3 style={{ fontSize: '0.95rem', marginBottom: 6, fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: '0.82rem', color: 'var(--gray-400)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
    </div>
  );
}

export function S04_NinetyTen() {
  return (
    <SlideContainer index={3} style={{ padding: '40px 80px' }}>
      <AnimatedEntry>
        <div className="label" style={{ textAlign: 'center' }}>The Value Proposition</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem' }}>~90% Standardized. ~10% Custom Per Client.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ textAlign: 'center', marginBottom: 28, maxWidth: 800 }}>
          The data model and transformation pipeline are nearly identical across implementations.<br />
          Only the source connectors and a few mapping tables need client-specific work.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3} style={{ width: '100%', maxWidth: 1100 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, width: '100%' }}>
          <div>
            <div style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '4px 10px', borderRadius: 4, marginBottom: 14,
              background: 'var(--green-dim)', color: 'var(--green)',
            }}>
              Standardized &mdash; Reusable Across Clients
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {standardized.map((s) => (
                <ItemCard key={s.title} title={s.title} desc={s.desc} color="var(--green)" />
              ))}
            </div>
          </div>
          <div>
            <div style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '4px 10px', borderRadius: 4, marginBottom: 14,
              background: 'var(--amber-dim)', color: 'var(--amber)',
            }}>
              Custom Per Client
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {custom.map((c) => (
                <ItemCard key={c.title} title={c.title} desc={c.desc} color="var(--amber)" />
              ))}
            </div>
          </div>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
