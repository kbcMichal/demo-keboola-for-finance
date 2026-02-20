import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { SplitCard, SplitBadge } from '../components/SplitCard';

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

export function S04_NinetyTen() {
  return (
    <SlideContainer index={3} centered={false} style={{ padding: '50px 80px' }}>
      <AnimatedEntry style={{ textAlign: 'center', width: '100%' }}>
        <div className="label">The Value Proposition</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1} style={{ textAlign: 'center', width: '100%' }}>
        <h2>~90% Standardized. ~10% Custom Per Client.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2} style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <p className="subtitle" style={{ marginBottom: 24, maxWidth: 800 }}>
          The data model and transformation pipeline are nearly identical across implementations.<br />
          Only the source connectors and a few mapping tables need client-specific work.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div className="two-col">
          <div>
            <SplitBadge variant="standard" />
            {standardized.map((s) => (
              <SplitCard key={s.title} variant="standard">
                <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.55 }}>{s.desc}</p>
              </SplitCard>
            ))}
          </div>
          <div>
            <SplitBadge variant="custom" />
            {custom.map((c) => (
              <SplitCard key={c.title} variant="custom">
                <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.55 }}>{c.desc}</p>
              </SplitCard>
            ))}
          </div>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
