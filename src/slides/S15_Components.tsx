import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { Card } from '../components/Card';

const columns = [
  {
    label: 'Data In', color: 'var(--blue-light)',
    items: ['ERP Extractors', 'Google Drive Extractor', 'Manual CSV Upload'],
  },
  {
    label: 'Transform & Store', color: 'var(--green)',
    items: ['Snowflake SQL Transformations', 'Conditional Flows', 'Storage (5 buckets, 24 tables)'],
  },
  {
    label: 'Consume', color: 'var(--purple)',
    items: ['Data App (React)', 'KAI (AI Assistant)', 'BI Tools (optional)'],
  },
];

export function S15_Components() {
  return (
    <SlideContainer index={14}>
      <AnimatedEntry><div className="label">Under the Hood</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Keboola Components Used</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 24, fontSize: '1rem' }}>
          Everything your team already knows. No new technology to learn.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div className="grid-3" style={{ maxWidth: 1000 }}>
          {columns.map((col) => (
            <Card key={col.label} style={{ textAlign: 'center', padding: 20 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: col.color, marginBottom: 12 }}>
                {col.label}
              </div>
              <div style={{ fontSize: '0.92rem', lineHeight: 2 }}>
                {col.items.map((item, i) => (
                  <div key={item} style={{ color: i === 0 ? 'var(--white)' : 'var(--gray-500)' }}>{item}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <div style={{ marginTop: 20, display: 'flex', gap: 20, fontSize: '0.88rem', color: 'var(--gray-500)' }}>
          <span>kbc CLI for scaffolding</span>
          <span style={{ color: 'var(--gray-600)' }}>&bull;</span>
          <span>Template Variables</span>
          <span style={{ color: 'var(--gray-600)' }}>&bull;</span>
          <span>Storage Metadata API</span>
          <span style={{ color: 'var(--gray-600)' }}>&bull;</span>
          <span>Workspaces for ad-hoc SQL</span>
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
