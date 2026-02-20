import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { Card, CardIcon } from '../components/Card';

const options = [
  {
    icon: '\u269B', color: 'var(--blue-light)', bg: 'var(--blue-dim)',
    title: 'React Data App',
    desc: 'Full-featured financial reporting app built in React. Deployed as a Keboola Data App. Interactive, drill-down capable, AI-assisted.',
    badge: { label: 'Primary option', variant: 'standard' as const },
    borderColor: 'rgba(0,120,212,0.3)',
  },
  {
    icon: '\u2630', color: 'var(--gray-400)', bg: 'rgba(255,255,255,0.04)',
    title: 'Power BI / Tableau',
    desc: 'Data model is BI-ready. Same warehouse tables can feed any BI tool if the client already has one.',
    badge: { label: 'If requested', variant: 'custom' as const },
  },
  {
    icon: '\u270D', color: 'var(--gray-400)', bg: 'rgba(255,255,255,0.04)',
    title: 'Streamlit / Custom',
    desc: 'For clients who want a custom dashboard or already have a Streamlit stack. The data layer is the same.',
    badge: { label: 'If requested', variant: 'custom' as const },
  },
];

const badgeColors = {
  standard: { bg: 'var(--green-dim)', color: 'var(--green)' },
  custom: { bg: 'var(--amber-dim)', color: 'var(--amber)' },
};

export function S10_Visualization() {
  return (
    <SlideContainer index={9}>
      <AnimatedEntry><div className="label">The Presentation Layer</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '2rem' }}>Keboola Data App as Primary UI</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 28, maxWidth: 850, fontSize: '1rem' }}>
          The #1 impression: Keboola provides a <span className="highlight" style={{ fontWeight: 600 }}>React data app</span> that handles the entire visualization. The full BI layer can be skipped unless the customer specifically requests it.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div className="grid-3" style={{ marginBottom: 24 }}>
          {options.map((o) => (
            <Card key={o.title} style={{ textAlign: 'center', borderColor: o.borderColor }}>
              <CardIcon bg={o.bg} color={o.color} icon={o.icon} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{o.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.55 }}>{o.desc}</p>
              <div style={{ marginTop: 10 }}>
                <span style={{
                  display: 'inline-block', fontSize: '0.7rem', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  padding: '3px 8px', borderRadius: 4,
                  background: badgeColors[o.badge.variant].bg,
                  color: badgeColors[o.badge.variant].color,
                }}>
                  {o.badge.label}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.4}>
        <p className="subtitle" style={{ fontSize: '0.95rem', maxWidth: 700 }}>
          The real intelligence is <span className="highlight" style={{ fontWeight: 600 }}>behind the scenes</span> &mdash; in the data integration, transformation, and consolidation layer. The visualization is just the tip.
        </p>
      </AnimatedEntry>
    </SlideContainer>
  );
}
