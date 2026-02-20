import type { CSSProperties, ReactNode } from 'react';
import { useDeck } from './DeckContext';

type Props = {
  index: number;
  children: ReactNode;
  centered?: boolean;
  style?: CSSProperties;
};

export function SlideContainer({ index, children, centered = true, style }: Props) {
  const { current } = useDeck();
  const active = current === index;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: centered ? 'center' : 'flex-start',
        textAlign: centered ? 'center' : undefined,
        padding: '60px 100px',
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity 0.5s ease',
        background: 'linear-gradient(135deg, var(--navy) 0%, #0f1922 50%, var(--navy) 100%)',
        ...style,
      }}
    >
      {active && children}
    </div>
  );
}
