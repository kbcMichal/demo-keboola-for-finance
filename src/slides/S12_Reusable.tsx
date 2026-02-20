import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const sources = [
  'FT_FIN_STAT_PERIOD \u2014 P&L and BS by entity/month',
  'FT_FIN_JOURNAL \u2014 All GL transactions, normalized',
  'DIM_COA \u2014 Unified chart of accounts hierarchy',
  'DIM_BUSINESS_UNIT \u2014 Entity master',
  'FT_METRIC_VALUE \u2014 Pre-calculated KPIs',
];

const targets = [
  'Margin Analysis \u2014 by product, customer, segment',
  'Customer Profitability \u2014 revenue/cost by customer',
  'Cash Flow Forecasting \u2014 trend-based projections',
  'Variance Analysis \u2014 Actual vs Budget vs Forecast',
  'Board Reporting \u2014 automated executive packs',
];

export function S12_Reusable() {
  return (
    <SlideContainer index={11}>
      <AnimatedEntry><div className="label">Beyond Core Reporting</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Unified Data Model = Reusable Datasets</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 24, fontSize: '1rem', maxWidth: 800 }}>
          Once you have the unified GL, chart of accounts, and entity structure &mdash; you can feed it into many downstream use cases without rebuilding the foundation.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'start', maxWidth: 1000, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--blue-light)', marginBottom: 8, textAlign: 'center' }}>Core Financial Tables</div>
            {sources.map((s) => (
              <div key={s} style={{
                background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem',
                borderLeft: '3px solid var(--blue-light)',
              }}>
                {s}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-light)', fontSize: '1.2rem', paddingTop: 30, gap: 8 }}>
            {sources.map((_, i) => <span key={i}>&rarr;</span>)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--green)', marginBottom: 8, textAlign: 'center' }}>Downstream Use Cases</div>
            {targets.map((t) => (
              <div key={t} style={{
                background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem',
                borderLeft: '3px solid var(--green)',
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
