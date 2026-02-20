import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

export function S01_Title() {
  return (
    <SlideContainer index={0}>
      <AnimatedEntry>
        <div className="label">Keboola Financial Solutions</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h1>Financial Intelligence</h1>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <div className="divider" />
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <p className="subtitle">
          A standardized framework for multi-entity financial consolidation,<br />
          reporting, and data quality &mdash; built on Keboola.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <p style={{ marginTop: 40, fontSize: '0.9rem', color: 'var(--gray-500)', textAlign: 'center' }}>
          Technical Partner Overview
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
