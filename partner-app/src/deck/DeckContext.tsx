import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { slideMetadata, sections } from '../data/slides';

type DeckState = {
  current: number;
  total: number;
  section: number;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  /** true when an interactive component (React Flow) has focus */
  interactiveFocused: boolean;
  setInteractiveFocused: (v: boolean) => void;
};

const DeckCtx = createContext<DeckState | null>(null);

export function useDeck() {
  const ctx = useContext(DeckCtx);
  if (!ctx) throw new Error('useDeck must be used within DeckProvider');
  return ctx;
}

export function DeckProvider({ children }: { children: ReactNode }) {
  const total = slideMetadata.length;
  const [current, setCurrent] = useState(0);
  const [interactiveFocused, setInteractiveFocused] = useState(false);

  const goTo = useCallback((i: number) => {
    if (i >= 0 && i < total) setCurrent(i);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (interactiveFocused) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(total - 1); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, goTo, total, interactiveFocused]);

  const section = slideMetadata[current]?.section ?? 0;

  return (
    <DeckCtx.Provider value={{ current, total, section, goTo, next, prev, interactiveFocused, setInteractiveFocused }}>
      {children}
      <ProgressBar current={current} total={total} />
      <SlideCounter current={current} total={total} />
      <SectionIndicator activeSection={section} goTo={goTo} />
      <NavigationZones next={next} prev={prev} />
      <NavHint />
    </DeckCtx.Provider>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;
  return <div style={{ position: 'fixed', bottom: 0, left: 0, height: 3, background: 'var(--blue)', width: `${pct}%`, transition: 'width 0.4s ease', zIndex: 100 }} />;
}

function SlideCounter({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ position: 'fixed', bottom: 16, right: 24, fontSize: 13, color: 'var(--gray-500)', zIndex: 100, fontVariantNumeric: 'tabular-nums' }}>
      {current + 1} / {total}
    </div>
  );
}

function SectionIndicator({ activeSection, goTo }: { activeSection: number; goTo: (i: number) => void }) {
  return (
    <div style={{ position: 'fixed', top: '50%', left: 16, transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 8, zIndex: 100 }}>
      {sections.map(s => {
        const isActive = s.id === activeSection;
        const firstSlide = slideMetadata.findIndex(sm => sm.section === s.id);
        return (
          <div
            key={s.id}
            title={s.name}
            onClick={() => goTo(firstSlide)}
            style={{
              width: 8,
              height: isActive ? 24 : 8,
              borderRadius: isActive ? 4 : '50%',
              background: isActive ? 'var(--blue)' : 'var(--gray-600)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        );
      })}
    </div>
  );
}

function NavigationZones({ next, prev }: { next: () => void; prev: () => void }) {
  return (
    <>
      <div onClick={prev} style={{ position: 'fixed', top: 0, bottom: 0, left: 0, width: '12%', zIndex: 50, cursor: 'pointer' }} />
      <div onClick={next} style={{ position: 'fixed', top: 0, bottom: 0, right: 0, width: '12%', zIndex: 50, cursor: 'pointer' }} />
    </>
  );
}

function NavHint() {
  return (
    <div style={{ position: 'fixed', bottom: 16, left: 24, fontSize: 12, color: 'var(--gray-500)', zIndex: 100, opacity: 0.6 }}>
      &larr; &rarr; or click edges to navigate
    </div>
  );
}
