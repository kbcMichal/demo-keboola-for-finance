import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';

export function S05_Transition1() {
  return (
    <SlideContainer index={4}>
      <AnimatedEntry>
        <p className="transition-text">
          Let me show you<br /><strong>the data model and pipeline.</strong>
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
