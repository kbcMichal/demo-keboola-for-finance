import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { Card, CardIcon } from '../components/Card';

const items = [
  { icon: '\u2630', color: 'var(--blue-light)', bg: 'var(--blue-dim)', title: 'P&L Statement', desc: 'Hierarchical rollup by entity with FX conversion, YTD, and prior-year comparison' },
  { icon: '\u2699', color: 'var(--blue-light)', bg: 'var(--blue-dim)', title: 'Balance Sheet', desc: 'Monthly snapshots with opening balances, synthetic equity entries, and carry-forward' },
  { icon: '\u25C6', color: 'var(--green)', bg: 'var(--green-dim)', title: '12 Financial KPIs', desc: '6 core values (Revenue, Expenses, Net Income, Assets, Liabilities, Equity) + 6 ratios (NPM, ROA, ROE, D/E, ER, CIR)' },
  { icon: '\u2713', color: 'var(--amber)', bg: 'var(--amber-dim)', title: 'Data Quality Checks', desc: 'BS balance validation, unassigned accounts, local vs consolidated reconciliation, missing FX rates' },
  { icon: '\u00A7', color: 'var(--purple)', bg: 'var(--purple-dim)', title: 'Business Glossary', desc: 'Co-created metric definitions, formulas, thresholds, and ownership \u2014 the semantic layer' },
  { icon: '\u270E', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'Budget & Forecasting', desc: 'Actuals, Budget, Forecast modes built into the data model \u2014 ready for planning workflows' },
];

export function S03_WhatWeDeliver() {
  return (
    <SlideContainer index={2}>
      <AnimatedEntry><div className="label">What the Solution Covers</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}><h2>End-to-End Financial Data Platform</h2></AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <div className="grid-3" style={{ marginTop: 16 }}>
          {items.map((item) => (
            <Card key={item.title} style={{ textAlign: 'center' }}>
              <CardIcon bg={item.bg} color={item.color} icon={item.icon} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.55 }}>{item.desc}</p>
            </Card>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
