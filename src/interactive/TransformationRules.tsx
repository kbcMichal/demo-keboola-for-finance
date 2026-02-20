const rules = [
  {
    num: 1,
    title: 'Entity & Master Data Setup',
    desc: 'Legal entities from ERP subsidiaries. Group entity for consolidation. Currency list, FX rates (AVG + EOP), date spine, and upload modes generated automatically.',
    tag: 'T0 Core Load',
    variant: 'custom' as const,
    color: 'var(--amber)',
    bg: 'var(--amber-dim)',
  },
  {
    num: 2,
    title: 'Chart of Accounts Hierarchy',
    desc: 'ERP accounts mapped to standard types (A/P/R/C/X) and assigned to the FININ consolidation structure. Recursive hierarchy builds 10 levels with leaf/parent flagging.',
    tag: 'T1 COA Build',
    variant: 'standard' as const,
    color: 'var(--blue-light)',
    bg: 'var(--blue-dim)',
  },
  {
    num: 3,
    title: 'ERP Journal Entry Mapping',
    desc: "The main custom transformation. Maps the ERP's General Ledger into a standardized journal format. Applies sign convention (R05), assigns entity scope, generates opening balance entries.",
    tag: 'T2 Journal Entries',
    variant: 'custom' as const,
    color: 'var(--amber)',
    bg: 'var(--amber-dim)',
    badge: 'Main custom step',
  },
  {
    num: 4,
    title: 'Financial Statement Engine',
    desc: 'Builds P&L (flow-based) and Balance Sheet (cumulative). Rolls up leaf accounts through the hierarchy via recursive CTEs. Converts to reporting currency. Generates synthetic equity entries.',
    tag: 'T3 Core Processing',
    variant: 'standard' as const,
    color: 'var(--green)',
    bg: 'var(--green-dim)',
  },
  {
    num: 5,
    title: 'Automated Data Quality',
    desc: 'Eight checks after every run: BS balance (A+L+E=0), unmapped accounts, FININ assignment bugs, local vs consolidated reconciliation, missing FX rates (RC + SC), intercompany balance, group balance.',
    tag: 'T4 Validation',
    variant: 'standard' as const,
    color: 'var(--purple)',
    bg: 'var(--purple-dim)',
  },
  {
    num: 6,
    title: 'KPI Metrics & Comparatives',
    desc: 'Financial metrics (core values + ratios) with prior month, prior year, and YTD windows. Outputs in local currency + up to 2 secondary currencies.',
    tag: 'T6 ADS Metrics',
    variant: 'standard' as const,
    color: 'var(--teal)',
    bg: 'var(--teal-dim)',
  },
];

const variantLabel = {
  standard: { text: 'Standardized', color: 'var(--green)', bg: 'var(--green-dim)' },
  custom: { text: 'Per-ERP', color: 'var(--amber)', bg: 'var(--amber-dim)' },
};

export function TransformationRules() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: '100%', textAlign: 'left' }}>
      {rules.map((r) => (
        <div
          key={r.num}
          style={{
            background: 'var(--navy-light)',
            border: `1px solid ${r.variant === 'custom' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 10,
            padding: '14px 16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{
              background: r.bg, color: r.color,
              width: 26, height: 26, borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.72rem', fontWeight: 700, flexShrink: 0,
            }}>
              {r.num}
            </span>
            <h3 style={{ fontSize: '0.9rem', margin: 0, flex: 1 }}>{r.title}</h3>
            {r.badge && (
              <span style={{
                fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase' as const,
                letterSpacing: '0.06em', padding: '2px 7px', borderRadius: 4,
                background: 'var(--amber-dim)', color: 'var(--amber)', whiteSpace: 'nowrap',
              }}>
                {r.badge}
              </span>
            )}
          </div>
          <p style={{ fontSize: '0.76rem', color: 'var(--gray-400)', lineHeight: 1.55, margin: '0 0 8px' }}>
            {r.desc}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--gray-500)', fontFamily: "'JetBrains Mono', monospace" }}>
              {r.tag}
            </span>
            <span style={{
              fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase' as const,
              letterSpacing: '0.06em', padding: '2px 6px', borderRadius: 3,
              background: variantLabel[r.variant].bg, color: variantLabel[r.variant].color,
            }}>
              {variantLabel[r.variant].text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
