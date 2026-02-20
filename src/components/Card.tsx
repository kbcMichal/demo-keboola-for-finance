import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export function Card({ children, style, className }: Props) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--navy-light)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 12,
        padding: 24,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </div>
  );
}

type CardIconProps = {
  bg: string;
  color: string;
  icon: string;
};

export function CardIcon({ bg, color, icon }: CardIconProps) {
  return (
    <div style={{
      width: 42, height: 42, borderRadius: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.3rem', background: bg, margin: '0 auto 14px',
    }}>
      <span style={{ color }}>{icon}</span>
    </div>
  );
}
