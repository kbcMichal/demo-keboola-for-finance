import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const financialUseCases = [
  'P&L Statements',
  'Balance Sheet',
  'Cash Flow Analysis',
  'Margin Analysis',
  'Variance (A vs B vs F)',
  'Board Reporting',
];

const expandUseCases = [
  { icon: '📊', label: 'Revenue + CRM Pipeline', desc: 'Sales data meets financial actuals' },
  { icon: '👥', label: 'Headcount Costs + HR', desc: 'Payroll tied to org structure' },
  { icon: '📈', label: 'Marketing Spend + ROI', desc: 'Campaign costs vs revenue impact' },
  { icon: '⚙️', label: 'Operations + Financial', desc: 'Operational metrics meet P&L lines' },
];

export function S12_Reusable() {
  return (
    <SlideContainer index={11}>
      <AnimatedEntry><div className="label">Beyond Core Reporting</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Build Once. Expand Everywhere.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 32, fontSize: '1rem', maxWidth: 800 }}>
          The unified financial data model is a foundation &mdash; not just for standard reporting,
          but for every analytics use case that touches finance.
        </p>
      </AnimatedEntry>

      <AnimatedEntry delay={0.3} style={{ width: '100%', maxWidth: 1000 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {/* Layer 1: Foundation */}
          <div style={{
            background: 'var(--navy-light)',
            border: '1px solid rgba(0,120,212,0.3)',
            borderRadius: 12,
            padding: '20px 32px',
            width: '100%',
            maxWidth: 480,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--blue-light)', marginBottom: 8 }}>
              Foundation
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 4 }}>
              Unified Financial Data Model
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>
              GL journals &middot; CoA hierarchy &middot; KPIs &middot; Validation &middot; Multi-currency
            </div>
          </div>

          {/* Expanding arrow */}
          <div style={{ padding: '8px 0' }}>
            <svg width="120" height="24" viewBox="0 0 120 24">
              <line x1="40" y1="0" x2="20" y2="24" stroke="var(--gray-600)" strokeWidth="1" />
              <line x1="60" y1="0" x2="60" y2="24" stroke="var(--gray-600)" strokeWidth="1" />
              <line x1="80" y1="0" x2="100" y2="24" stroke="var(--gray-600)" strokeWidth="1" />
            </svg>
          </div>

          {/* Layer 2: Financial Analytics */}
          <div style={{
            background: 'var(--navy-light)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: '16px 24px',
            width: '100%',
            maxWidth: 720,
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--green)', marginBottom: 12, textAlign: 'center' }}>
              Financial Analytics
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {financialUseCases.map((uc) => (
                <span key={uc} style={{
                  padding: '6px 14px', borderRadius: 6,
                  background: 'var(--green-dim)', color: 'var(--green)',
                  fontSize: '0.78rem', fontWeight: 500,
                }}>
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* Expanding arrow */}
          <div style={{ padding: '8px 0' }}>
            <svg width="200" height="24" viewBox="0 0 200 24">
              <line x1="60" y1="0" x2="20" y2="24" stroke="var(--gray-600)" strokeWidth="1" />
              <line x1="100" y1="0" x2="100" y2="24" stroke="var(--gray-600)" strokeWidth="1" />
              <line x1="140" y1="0" x2="180" y2="24" stroke="var(--gray-600)" strokeWidth="1" />
            </svg>
          </div>

          {/* Layer 3: Cross-Functional Intelligence */}
          <div style={{
            background: 'var(--navy-light)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: '16px 24px',
            width: '100%',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--amber)', marginBottom: 14, textAlign: 'center' }}>
              Expand Beyond Financials
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
              {expandUseCases.map((uc) => (
                <div key={uc.label} style={{
                  padding: '12px', borderRadius: 8,
                  background: 'rgba(245,158,11,0.06)',
                  border: '1px solid rgba(245,158,11,0.15)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.3rem', marginBottom: 6 }}>{uc.icon}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: 4 }}>{uc.label}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', lineHeight: 1.4 }}>{uc.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.75rem', color: 'var(--gray-500)' }}>
              Keboola&apos;s 300+ connectors bring in CRM, HR, marketing, and operations data alongside your financial model
            </div>
          </div>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
