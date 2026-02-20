import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

export function S11_LiveDemo() {
  return (
    <SlideContainer index={10}>
      <AnimatedEntry>
        <p className="transition-text">
          Let me <strong>switch to the app</strong><br />and show you what the client sees.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p style={{ marginTop: 24, fontSize: '0.9rem', color: 'var(--gray-500)' }}>
          Dashboard &bull; P&L Report &bull; Balance Sheet &bull; Journal Drill-Down &bull; Data Quality &bull; AI Assistant
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
