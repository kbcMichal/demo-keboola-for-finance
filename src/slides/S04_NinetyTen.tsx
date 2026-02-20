import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const rows = [
  {
    std: { title: 'Data Model (24 tables)', desc: '14 dimensions, 2 fact tables, 1 mart, 2 intermediate, 5 validation \u2014 same schema every time' },
    cust: { title: 'ERP Connectors', desc: "Configure extractors for Subsidiary, FX Rates, Chart of Accounts, and GL entries from the client's ERP" },
  },
  {
    std: { title: '5 of 7 Transformations', desc: 'T0 Initiation, T1 COA Build, T3 Core Processing, T4 Validation, T6 KPI Metrics \u2014 zero custom SQL' },
    cust: { title: 'T2 Journal Entry Mapping', desc: "One transformation that maps the ERP's GL schema to our standardized journal format \u2014 sign convention, keys, entity scoping" },
  },
  {
    std: { title: 'CoA Hierarchy Engine', desc: 'Recursive CTE builds L1\u2013L10 levels, FININ consolidation mapping, leaf/parent flagging' },
    cust: { title: 'MAP Tables', desc: 'Account Type mapping (A/P/R/C/X) and FININ Structure \u2014 maintained by the client or SE via Google Sheets, Data App, or direct upload' },
  },
  {
    std: { title: 'Validation & KPI Framework', desc: '5 quality checks + 12 metrics with RAG thresholds \u2014 all template-driven' },
    cust: { title: 'Business Unit Definitions', desc: 'Entity list, cost centers, regions \u2014 often consolidated outside ERPs, loaded via spreadsheet or manual upload' },
  },
];

function ItemCard({ title, desc, color }: { title: string; desc: string; color: string }) {
  return (
    <div style={{
      background: 'var(--navy-light)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderLeft: `3px solid ${color}`,
      borderRadius: 8,
      padding: '14px 16px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h3 style={{ fontSize: '0.92rem', marginBottom: 5, fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
    </div>
  );
}

export function S04_NinetyTen() {
  return (
    <SlideContainer index={3} style={{ padding: '36px 80px' }}>
      <AnimatedEntry>
        <div className="label">The Value Proposition</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2.1rem' }}>~90% Standardized. ~10% Custom Per Client.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 22, maxWidth: 800 }}>
          The data model and transformation pipeline are nearly identical across implementations.<br />
          Only the source connectors and a few mapping tables need client-specific work.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3} style={{ width: '100%', maxWidth: 1080 }}>
        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 12 }}>
          <div>
            <span style={{
              display: 'inline-block', fontSize: '0.68rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--green-dim)', color: 'var(--green)',
            }}>
              Standardized &mdash; Reusable Across Clients
            </span>
          </div>
          <div>
            <span style={{
              display: 'inline-block', fontSize: '0.68rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--amber-dim)', color: 'var(--amber)',
            }}>
              Custom Per Client
            </span>
          </div>
        </div>
        {/* Paired rows - guarantees equal heights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rows.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              <ItemCard title={row.std.title} desc={row.std.desc} color="var(--green)" />
              <ItemCard title={row.cust.title} desc={row.cust.desc} color="var(--amber)" />
            </div>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
