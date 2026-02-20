import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { Card } from '../components/Card';

const reasons = [
  { title: 'Governed End-to-End', desc: 'Every action \u2014 by human or application \u2014 is traceable. Full lineage from source ERP to dashboard value. Essential for financial data.' },
  { title: '300+ Connectors', desc: 'No matter the ERP \u2014 NetSuite, SAP, Xero, BC, Odoo, QuickBooks \u2014 there\'s a connector. Authentication, pagination, rate limiting handled.' },
  { title: 'Scaffold Automation', desc: 'Our internal tooling (FIIA) generates the entire project \u2014 5 buckets, 24 tables, 7 transformations, 2 flows \u2014 in minutes via CLI.' },
  { title: 'Data App Hosting', desc: 'Deploy the React app as a Keboola Data App. No separate infrastructure needed. The client gets a URL, not a deployment problem.' },
  { title: 'Self-Service Inputs', desc: 'MAP tables, manual inputs, cost center lists \u2014 loaded via Google Sheets, Data Apps, or CSV upload. Finance teams self-serve without SQL.' },
  { title: 'AI-Ready (KAI)', desc: 'Business glossary feeds the AI assistant. KAI understands the metric definitions and can answer questions in context.' },
];

export function S13_WhyKeboola() {
  return (
    <SlideContainer index={12}>
      <AnimatedEntry><div className="label">USP</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Why Build Financial Solutions on Keboola</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <div className="grid-2" style={{ marginTop: 16, maxWidth: 950 }}>
          {reasons.map((r) => (
            <Card key={r.title}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{r.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.55 }}>{r.desc}</p>
            </Card>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
