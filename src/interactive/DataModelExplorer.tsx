import { useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from '@dagrejs/dagre';
import { tables } from '../data/tables';
import { relationships } from '../data/relationships';
import { TableNode } from './TableNode';
import { useDeck } from '../deck/DeckContext';

const nodeTypes = { tableNode: TableNode };

const NODE_WIDTH = 200;
const NODE_HEIGHT = 40;

function getLayoutedElements(nodes: Node[], edges: Edge[]) {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'LR', nodesep: 60, ranksep: 120 });

  nodes.forEach((node) => {
    g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  const layoutedNodes = nodes.map((node) => {
    const pos = g.node(node.id);
    return {
      ...node,
      position: { x: pos.x - NODE_WIDTH / 2, y: pos.y - NODE_HEIGHT / 2 },
    };
  });

  return { nodes: layoutedNodes, edges };
}

const layerMiniMapColors: Record<string, string> = {
  dimension: '#0078D4',
  fact: '#16a34a',
  mart: '#8b5cf6',
  validation: '#f59e0b',
  staging: '#64748b',
};

export function DataModelExplorer() {
  const { setInteractiveFocused } = useDeck();

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const ns: Node[] = tables.map((t) => ({
      id: t.name,
      type: 'tableNode',
      position: { x: 0, y: 0 },
      data: { table: t },
    }));

    const es: Edge[] = relationships.map((r, i) => ({
      id: `e-${i}`,
      source: r.source,
      target: r.target,
      type: 'smoothstep',
      animated: true,
      style: { stroke: 'rgba(51, 153, 255, 0.3)', strokeWidth: 1.5 },
    }));

    return getLayoutedElements(ns, es);
  }, []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onPaneClick = useCallback(() => {
    setInteractiveFocused(true);
  }, [setInteractiveFocused]);

  return (
    <div
      style={{ width: '100%', height: '100%', minHeight: 380 }}
      onFocus={() => setInteractiveFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as HTMLElement)) {
          setInteractiveFocused(false);
        }
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(255,255,255,0.03)" gap={24} />
        <Controls position="bottom-right" />
        <MiniMap
          nodeColor={(n) => {
            const table = tables.find(t => t.name === n.id);
            return table ? layerMiniMapColors[table.layer] || '#64748b' : '#64748b';
          }}
          maskColor="rgba(26,35,50,0.8)"
          style={{ background: 'var(--navy-light)' }}
        />
      </ReactFlow>
    </div>
  );
}
