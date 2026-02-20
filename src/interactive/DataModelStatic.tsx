import { tables } from '../data/tables';

const layerGroups = [
  {
    label: 'L1 Dimensions (14 tables)',
    cssClass: 'dim',
    filter: (t: typeof tables[0]) => t.layer === 'dimension',
    flex: 1.8,
    color: 'var(--blue-light)',
    bg: 'rgba(0,120,212,0.15)',
  },
  {
    label: 'L1 Facts (2 tables)',
    cssClass: 'fact',
    filter: (t: typeof tables[0]) => t.layer === 'fact',
    flex: 1,
    color: 'var(--green)',
    bg: 'rgba(22,163,74,0.15)',
    subGroups: [
      {
        label: 'L2 Marts (1 table)',
        cssClass: 'mart',
        filter: (t: typeof tables[0]) => t.layer === 'mart',
        color: 'var(--purple)',
        bg: 'rgba(139,92,246,0.15)',
      },
    ],
  },
  {
    label: 'Validation (5 tables)',
    cssClass: 'val',
    filter: (t: typeof tables[0]) => t.layer === 'validation',
    flex: 1,
    color: 'var(--amber)',
    bg: 'rgba(245,158,11,0.15)',
    subGroups: [
      {
        label: 'Intermediate (2 tables)',
        cssClass: 'stg',
        filter: (t: typeof tables[0]) => t.layer === 'staging',
        color: 'var(--gray-400)',
        bg: 'rgba(148,163,184,0.12)',
      },
    ],
  },
];

function TableList({ filterFn }: { filterFn: (t: typeof tables[0]) => boolean }) {
  const filtered = tables.filter(filterFn);
  return (
    <div style={{
      background: 'var(--navy-light)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '0 0 6px 6px',
      padding: 8,
    }}>
      {filtered.map((t) => {
        const hasPk = t.columns.some(c => c.pk);
        const hasFk = t.columns.some(c => c.fk);
        const keys = [hasPk && 'PK', hasFk && 'FK'].filter(Boolean).join(', ');
        return (
          <div key={t.name} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem',
            padding: '5px 8px',
            borderRadius: 4,
            marginBottom: 3,
            cursor: 'default',
            transition: 'background 0.15s',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {t.name}
            {keys && <span style={{ color: 'var(--blue-light)', fontSize: '0.6rem', marginLeft: 4, opacity: 0.7 }}>{keys}</span>}
          </div>
        );
      })}
    </div>
  );
}

export function DataModelStatic() {
  return (
    <>
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', gap: 16, marginTop: 12 }}>
        {layerGroups.map((lg) => (
          <div key={lg.label} style={{ flex: lg.flex, minWidth: 0 }}>
            <div style={{
              fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase' as const,
              letterSpacing: '0.1em', padding: '6px 10px', borderRadius: '6px 6px 0 0',
              textAlign: 'center' as const, background: lg.bg, color: lg.color,
            }}>
              {lg.label}
            </div>
            <TableList filterFn={lg.filter} />
            {lg.subGroups?.map((sg) => (
              <div key={sg.label} style={{ marginTop: 12 }}>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase' as const,
                  letterSpacing: '0.1em', padding: '6px 10px', borderRadius: '6px 6px 0 0',
                  textAlign: 'center' as const, background: sg.bg, color: sg.color,
                }}>
                  {sg.label}
                </div>
                <TableList filterFn={sg.filter} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, display: 'flex', gap: 20, justifyContent: 'center', fontSize: '0.75rem', color: 'var(--gray-500)' }}>
        <span>5 Storage Buckets</span>
        <span>&bull;</span>
        <span>24 Tables</span>
        <span>&bull;</span>
        <span>249+ Column Descriptions</span>
        <span>&bull;</span>
        <span>All auto-scaffolded via CLI</span>
      </div>
    </>
  );
}
