const rules = [
  {
    num: 1,
    title: 'Entity & Master Data Setup',
    desc: 'Legal entities derived from ERP subsidiaries. Group entity added for consolidation. Currency list, FX rates (AVG + EOP), date spine, and upload modes (Actuals / Budget / Forecast) generated automatically.',
    tag: 'T0 Initiation \u2022 Standardized',
    color: 'var(--blue-light)',
    bg: 'var(--blue-dim)',
    borderColor: undefined as string | undefined,
  },
  {
    num: 2,
    title: 'Chart of Accounts Hierarchy',
    desc: "ERP accounts mapped to standard types (A/P/R/C/X) and assigned to the FININ consolidation structure. Recursive hierarchy builds 10 levels with leaf/parent flagging and display-ready indented names.",
    tag: 'T1 COA Build \u2022 Standardized',
    color: 'var(--blue-light)',
    bg: 'var(--blue-dim)',
  },
  {
    num: 3,
    title: 'ERP Journal Entry Mapping',
    desc: "The one transformation that's different per client. Maps the ERP's General Ledger into a standardized journal format. Applies sign convention, assigns entity scope, and optionally generates opening balance entries.",
    tag: 'T2 Journal Entries \u2022 Custom per client',
    color: 'var(--amber)',
    bg: 'var(--amber-dim)',
    borderColor: 'rgba(245,158,11,0.25)',
    badge: 'Custom',
  },
  {
    num: 4,
    title: 'Financial Statement Engine',
    desc: 'Builds P&L (flow-based, monthly) and Balance Sheet (cumulative within fiscal year). Rolls up leaf accounts through the hierarchy. Converts to reporting currency. Generates synthetic equity entries to tie P&L into BS.',
    tag: 'T3 Core Processing \u2022 Standardized',
    color: 'var(--green)',
    bg: 'var(--green-dim)',
  },
  {
    num: 5,
    title: 'Automated Data Quality',
    desc: 'Five checks run after every pipeline execution: BS balance (A+L+E=0), unmapped accounts, broken FININ assignments, local vs. consolidated reconciliation, and missing FX rates.',
    tag: 'T4 Validation \u2022 Standardized',
    color: 'var(--purple)',
    bg: 'var(--purple-dim)',
  },
  {
    num: 6,
    title: 'KPI Metrics & Comparatives',
    desc: 'Computes 12 financial metrics (6 values + 6 ratios) with prior month, prior year, and YTD windows. Outputs in local currency + up to 2 secondary currencies.',
    tag: 'T6 ADS Metrics \u2022 Standardized',
    color: 'var(--teal)',
    bg: 'var(--teal-dim)',
  },
];

export function TransformationRules() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: '100%' }}>
      {rules.map((r) => (
        <div
          key={r.num}
          style={{
            background: 'var(--navy-light)',
            border: `1px solid ${r.borderColor || 'rgba(255,255,255,0.06)'}`,
            borderRadius: 12,
            padding: 18,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{
              background: r.bg, color: r.color,
              width: 28, height: 28, borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700,
            }}>
              {r.num}
            </span>
            <h3 style={{ fontSize: '0.95rem', margin: 0 }}>{r.title}</h3>
            {r.badge && (
              <span style={{
                fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase' as const,
                letterSpacing: '0.08em', padding: '3px 8px', borderRadius: 4,
                background: 'var(--amber-dim)', color: 'var(--amber)',
              }}>
                {r.badge}
              </span>
            )}
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)', lineHeight: 1.6, marginBottom: 10 }}>
            {r.desc}
          </p>
          <div style={{ fontSize: '0.72rem', color: 'var(--gray-600)' }}>{r.tag}</div>
        </div>
      ))}
    </div>
  );
}
