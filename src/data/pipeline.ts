export type PipelineStep = {
  id: string;
  name: string;
  description: string;
  variant: 'standard' | 'custom';
};

export const pipelineSteps: PipelineStep[] = [
  { id: 'T0', name: 'Initiation', description: 'Master data, FX, dates, codelists', variant: 'standard' },
  { id: 'T1', name: 'COA Build', description: 'Recursive hierarchy, FININ mapping', variant: 'standard' },
  { id: 'T2', name: 'Journal Entries', description: 'ERP GL mapping (custom)', variant: 'custom' },
  { id: 'T3', name: 'Core Processing', description: 'Rollup, FX, synthetics', variant: 'standard' },
  { id: 'T4', name: 'Validation', description: '5 quality checks', variant: 'standard' },
  { id: 'T6', name: 'KPI Metrics', description: 'Financial KPIs', variant: 'standard' },
];

export const separateFlow = {
  id: 'T5',
  name: 'COA Consolidation',
  description: 'On-demand, triggered when the UI app exports updated CoA structure',
};
