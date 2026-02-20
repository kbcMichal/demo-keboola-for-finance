import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { Card, CardIcon } from '../components/Card';

const challenges = [
  { icon: '\u26A0', color: 'var(--red)', bg: 'var(--red-dim)', title: 'Fragmented ERPs', desc: 'NetSuite, SAP, Xero, BC \u2014 each with its own GL structure' },
  { icon: '\u21C4', color: 'var(--amber)', bg: 'var(--amber-dim)', title: 'Manual Mapping', desc: 'Local accounts mapped to consolidated CoA in spreadsheets' },
  { icon: '$', color: 'var(--purple)', bg: 'var(--purple-dim)', title: 'FX Conversion', desc: 'Multi-currency entities need AVG and EOP rate handling' },
  { icon: '?', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'No Audit Trail', desc: "Finance can't trace numbers back to source transactions" },
];

export function S02_Challenge() {
  return (
    <SlideContainer index={1}>
      <AnimatedEntry><div className="label">The Challenge</div></AnimatedEntry>
      <AnimatedEntry delay={0.1}><h2>Every Finance Team Has the Same Problem</h2></AnimatedEntry>
      <AnimatedEntry delay={0.2}>
        <p className="subtitle" style={{ marginBottom: 28 }}>
          Multiple ERPs, different chart of accounts, different currencies &mdash;<br />
          yet the CFO needs one consolidated view.
        </p>
      </AnimatedEntry>
      <AnimatedEntry delay={0.3}>
        <div className="grid-4">
          {challenges.map((c) => (
            <Card key={c.title} style={{ textAlign: 'center' }}>
              <CardIcon bg={c.bg} color={c.color} icon={c.icon} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', lineHeight: 1.55 }}>{c.desc}</p>
            </Card>
          ))}
        </div>
      </AnimatedEntry>
    </SlideContainer>
  );
}
