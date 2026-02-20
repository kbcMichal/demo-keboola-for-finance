import type { ReactNode } from 'react';
import { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function TabBar({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div style={{ width: '100%', maxWidth: 1200 }}>
      <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              background: t.id === active ? 'var(--navy-light)' : 'rgba(255,255,255,0.04)',
              border: '1px solid',
              borderColor: t.id === active ? 'rgba(0,120,212,0.3)' : 'rgba(255,255,255,0.08)',
              borderBottom: 'none',
              borderRadius: '8px 8px 0 0',
              padding: '8px 20px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: t.id === active ? 'var(--blue-light)' : 'var(--gray-500)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'inherit',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div style={{
        background: 'var(--navy-light)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '0 8px 8px 8px',
        padding: 20,
        minHeight: 380,
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 260px)',
      }}>
        {tabs.find(t => t.id === active)?.content}
      </div>
    </div>
  );
}
