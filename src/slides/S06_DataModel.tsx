import { SlideContainer } from '../deck/SlideContainer';
import { AnimatedEntry } from '../components/AnimatedEntry';
import { TabBar } from '../components/TabBar';
import { DataModelExplorer } from '../interactive/DataModelExplorer';
import { DataModelStatic } from '../interactive/DataModelStatic';
import { HierarchyTree } from '../interactive/HierarchyTree';
import { TransformationRules } from '../interactive/TransformationRules';

export function S06_DataModel() {
  return (
    <SlideContainer index={5} style={{ padding: '40px 60px', justifyContent: 'flex-start', paddingTop: 50 }}>
      <AnimatedEntry style={{ textAlign: 'center' }}>
        <div className="label">The Foundation</div>
      </AnimatedEntry>
      <AnimatedEntry delay={0.1} style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>Data Model &amp; Rules</h2>
      </AnimatedEntry>
      <AnimatedEntry delay={0.2} style={{ width: '100%', maxWidth: 1200 }}>
        <TabBar tabs={[
          {
            id: 'erd',
            label: 'Interactive ERD',
            content: <div style={{ height: 'calc(100vh - 300px)', minHeight: 380 }}><DataModelExplorer /></div>,
          },
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
