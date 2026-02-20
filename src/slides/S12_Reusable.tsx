import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const pairs = [
  { source: 'FT_FIN_STAT_PERIOD', sourceDesc: 'P&L and BS by entity/month', target: 'Margin Analysis', targetDesc: 'by product, customer, segment' },
  { source: 'FT_FIN_JOURNAL', sourceDesc: 'All GL transactions, normalized', target: 'Customer Profitability', targetDesc: 'revenue/cost by customer' },
  { source: 'DIM_COA', sourceDesc: 'Unified chart of accounts', target: 'Cash Flow Forecasting', targetDesc: 'trend-based projections' },
  { source: 'DIM_BUSINESS_UNIT', sourceDesc: 'Entity master', target: 'Variance Analysis', targetDesc: 'Actual vs Budget vs Forecast' },
  { source: 'FT_METRIC_VALUE', sourceDesc: 'Pre-calculated KPIs', target: 'Board Reporting', targetDesc: 'automated executive packs' },
];

export function S12_Reusable() {
  return (
    <SlideContainer index={11}>
      <AnimatedEntry><div className="label">Beyond Core Reporting</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Unified Data Model = Reusable Datasets</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 28, fontSize: '1rem', maxWidth: 800 }}>
          Once you have the unified GL, chart of accounts, and entity structure &mdash; you can feed it into many downstream use cases without rebuilding the foundation.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3} style={{ width: '100%', maxWidth: 960 }}>
        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: 0, marginBottom: 10 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--blue-light)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: 16 }}>
            Core Financial Tables
          </div>
          <div />
          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: 16 }}>
            Downstream Use Cases
          </div>
        </div>
        {/* Paired rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {pairs.map((p) => (
            <div key={p.source} style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: 0, alignItems: 'center' }}>
              <div style={{
                background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: '10px 16px', borderLeft: '3px solid var(--blue-light)',
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>{p.source}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: 2 }}>{p.sourceDesc}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="12" viewBox="0 0 24 12">
                  <line x1="0" y1="6" x2="16" y2="6" stroke="var(--gray-600)" strokeWidth="1.5" />
                  <polygon points="14,2 22,6 14,10" fill="var(--gray-600)" />
                </svg>
              </div>
              <div style={{
                background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: '10px 16px', borderLeft: '3px solid var(--green)',
              }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{p.target}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: 2 }}>{p.targetDesc}</div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
