import type { CSSProperties, ReactNode } from 'react';
import { useDeck } from './DeckContext';

type Props = {
  index: number;
  children: ReactNode;
  style?: CSSProperties;
};

export function SlideContainer({ index, children, style }: Props) {
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
        alignItems: 'center',
        padding: '60px 100px',
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity 0.5s ease',
        background: 'linear-gradient(135deg, var(--navy) 0%, #0f1922 50%, var(--navy) 100%)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {active && children}
    </div>
  );
}
