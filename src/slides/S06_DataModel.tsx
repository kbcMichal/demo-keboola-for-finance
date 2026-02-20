import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { TabBar } from '../components/TabBar';
import { DataModelStatic } from '../interactive/DataModelStatic';
import { HierarchyTree } from '../interactive/HierarchyTree';
import { TransformationRules } from '../interactive/TransformationRules';

export function S06_DataModel() {
  return (
    <SlideContainer index={6} style={{ padding: '36px 60px', justifyContent: 'flex-start', paddingTop: 44 }}>
      <AnimatedEntry>
        <div className="label">The Foundation</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1}>
        <h2 style={{ fontSize: '1.9rem', marginBottom: 10 }}>Data Model &amp; Rules</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2} style={{ width: '100%', maxWidth: 1200 }}>
        <TabBar tabs={[
          {
            id: 'tables',
            label: 'Data Model',
            content: <DataModelStatic />,
          },
          {
            id: 'hierarchy',
            label: 'FININ Hierarchy',
            content: <HierarchyTree />,
          },
          {
            id: 'rules',
            label: 'Transformation Rules',
            content: <TransformationRules />,
          },
        ]} />
      </AnimatedEntry>
    </SlideContainer>
  );
}
