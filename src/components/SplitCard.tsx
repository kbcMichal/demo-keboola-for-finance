import type { ReactNode } from 'react';

type Props = {
  variant: 'standard' | 'custom';
  children: ReactNode;
  style?: React.CSSProperties;
};

const colors = {
  standard: 'var(--green)',
  custom: 'var(--amber)',
};

const bgColors = {
  standard: 'var(--green-dim)',
  custom: 'var(--amber-dim)',
};

export function SplitBadge({ variant }: { variant: 'standard' | 'custom' }) {
  const labels = { standard: 'Standardized \u2014 Reusable Across Clients', custom: 'Custom Per Client' };
  return (
    <span style={{
      display: 'inline-block', fontSize: '0.7rem', fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '0.08em',
      padding: '3px 8px', borderRadius: 4, marginBottom: 8,
      background: bgColors[variant], color: colors[variant],
    }}>
      {labels[variant]}
    </span>
  );
}

export function SplitCard({ variant, children, style }: Props) {
  return (
    <div style={{
      background: 'var(--navy-light)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 12,
      padding: 24,
      paddingLeft: 20,
      borderLeft: `3px solid ${colors[variant]}`,
      marginBottom: 12,
      ...style,
    }}>
      {children}
    </div>
  );
}
