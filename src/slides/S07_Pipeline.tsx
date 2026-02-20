import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { PipelineFlow } from '../interactive/PipelineFlow';

export function S07_Pipeline() {
  return (
    <SlideContainer index={5}>
      <AnimatedEntry><div className="label">The Pipeline</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>7 Transformations. 1 Orchestrated Flow.</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 20, fontSize: '1rem' }}>
          All SQL. All Snowflake. All parameterized with template variables.
        </p>
      </AnimatedEntry>
      <PipelineFlow />
    </SlideContainer>
  );
}
