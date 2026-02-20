import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

const columns = [
  {
    label: 'Data In', color: 'var(--blue-light)', borderColor: 'rgba(0,120,212,0.25)',
    items: [
      { name: 'ERP Extractors', primary: true },
      { name: 'Google Drive Extractor', primary: false },
      { name: 'Manual CSV Upload', primary: false },
    ],
  },
  {
    label: 'Transform & Store', color: 'var(--green)', borderColor: 'rgba(22,163,74,0.25)',
    items: [
      { name: 'Snowflake SQL Transformations', primary: true },
      { name: 'Conditional Flows', primary: false },
      { name: 'Storage (5 buckets, 24 tables)', primary: false },
    ],
  },
  {
    label: 'Consume', color: 'var(--purple)', borderColor: 'rgba(139,92,246,0.25)',
    items: [
      { name: 'Data App (React)', primary: true },
      { name: 'KAI (AI Assistant)', primary: false },
      { name: 'BI Tools (optional)', primary: false },
    ],
  },
];

function FlowArrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, flexShrink: 0 }}>
      <svg width="28" height="12" viewBox="0 0 28 12">
        <line x1="0" y1="6" x2="20" y2="6" stroke="var(--gray-600)" strokeWidth="1.5" />
        <polygon points="18,2 26,6 18,10" fill="var(--gray-600)" />
      </svg>
    </div>
  );
}

export function S15_Components() {
  return (
    <SlideContainer index={14}>
      <AnimatedEntry><div className="label">Under the Hood</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Keboola Components Used</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 28, fontSize: '1rem' }}>
          Everything your team already knows. No new technology to learn.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div style={{ display: 'flex', alignItems: 'stretch', maxWidth: 1050, width: '100%' }}>
          {columns.map((col, i) => (
            <div key={col.label} style={{ display: 'contents' }}>
              {i > 0 && <FlowArrow />}
              <div style={{
                flex: 1, background: 'var(--navy-light)',
                border: `1px solid ${col.borderColor}`,
                borderRadius: 12, padding: 24, textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: col.color, marginBottom: 16,
                }}>
                  {col.label}
                </div>
                <div style={{ fontSize: '0.92rem', lineHeight: 2.2 }}>
                  {col.items.map((item) => (
                    <div key={item.name} style={{ color: item.primary ? 'var(--white)' : 'var(--gray-500)' }}>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <div style={{ marginTop: 24, display: 'flex', gap: 20, fontSize: '0.85rem', color: 'var(--gray-500)', flexWrap: 'wrap', justifyContent: 'center' }}>
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
