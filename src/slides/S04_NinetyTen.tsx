import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const rows = [
  {
    std: { title: 'Data Model', desc: 'Dimensions, fact tables, mart, intermediate, and validation tables — same schema every time' },
    cust: { title: 'ERP Connectors', desc: "Configure extractors for Subsidiary, FX Rates, Chart of Accounts, and GL entries from the client's ERP" },
  },
  {
    std: { title: 'Transformation Pipeline', desc: 'Most of the 7 transformations are reusable — core logic, hierarchy build, validation, KPIs all stay. Input mappings and minor adjustments adapt per ERP.' },
    cust: { title: 'T2 Journal Entry Mapping', desc: "The main custom transformation — maps the ERP's GL schema to the standardized journal format: sign convention, keys, entity scoping." },
  },
  {
    std: { title: 'CoA Hierarchy Engine', desc: 'Recursive CTE builds L1–L10 levels, FININ consolidation mapping, leaf/parent flagging' },
    cust: { title: 'MAP Tables', desc: 'Account Type mapping (A/P/R/C/X) and FININ Structure — maintained by the client or SE via Google Sheets, Data App, or direct upload' },
  },
  {
    std: { title: 'Validation & KPI Framework', desc: 'Quality checks + financial KPIs with RAG thresholds — all template-driven' },
    cust: { title: 'Business Unit Definitions', desc: 'Entity list, cost centers, regions — can be extracted from the ERP directly or loaded via spreadsheet / manual upload' },
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
        {/* Column headers — centered above their respective columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 12 }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.68rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--green-dim)', color: 'var(--green)',
            }}>
              Standardized &mdash; Reusable Across Clients
            </span>
          </div>
          <div style={{ textAlign: 'center' }}>
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
