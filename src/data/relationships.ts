export type Relationship = {
  source: string; // table name
  target: string; // table name
  sourceColumn: string;
  targetColumn: string;
};

export const relationships: Relationship[] = [
  { source: 'DIM_BUSINESS_SUBUNIT', target: 'DIM_BUSINESS_UNIT', sourceColumn: 'business_unit_fk', targetColumn: 'business_unit_pk' },
  { source: 'DIM_COA', target: 'MAP_FININ_STRUCTURE', sourceColumn: 'finin_code', targetColumn: 'finin_code' },
  { source: 'DIM_METRIC', target: 'DIM_METRIC_GROUP', sourceColumn: 'metric_group_fk', targetColumn: 'metric_group_pk' },
  { source: 'DIM_METRIC_THRESHOLD', target: 'DIM_METRIC', sourceColumn: 'metric_fk', targetColumn: 'metric_pk' },
  { source: 'DIM_DIMENSION_VALUE', target: 'DIM_DIMENSION', sourceColumn: 'dimension_fk', targetColumn: 'dimension_pk' },
  { source: 'FT_FIN_JOURNAL', target: 'DIM_BUSINESS_UNIT', sourceColumn: 'business_unit_fk', targetColumn: 'business_unit_pk' },
  { source: 'FT_FIN_JOURNAL', target: 'DIM_COA', sourceColumn: 'coa_fk', targetColumn: 'coa_pk' },
  { source: 'FT_FIN_JOURNAL', target: 'DIM_UPLOAD_MODE', sourceColumn: 'upload_mode_fk', targetColumn: 'upload_mode_pk' },
  { source: 'FT_FIN_STAT_PERIOD', target: 'DIM_BUSINESS_UNIT', sourceColumn: 'business_unit_fk', targetColumn: 'business_unit_pk' },
  { source: 'FT_FIN_STAT_PERIOD', target: 'DIM_COA', sourceColumn: 'coa_fk', targetColumn: 'coa_pk' },
  { source: 'FT_FIN_STAT_PERIOD', target: 'MAP_FININ_STRUCTURE', sourceColumn: 'finin_code', targetColumn: 'finin_code' },
  { source: 'FT_METRIC_VALUE', target: 'DIM_METRIC', sourceColumn: 'metric_fk', targetColumn: 'metric_pk' },
  { source: 'FT_METRIC_VALUE', target: 'DIM_BUSINESS_UNIT', sourceColumn: 'business_unit_fk', targetColumn: 'business_unit_pk' },
  { source: 'FT_BS_BALANCE_MONTHLY', target: 'DIM_BUSINESS_UNIT', sourceColumn: 'business_unit_fk', targetColumn: 'business_unit_pk' },
  { source: 'FT_FININ_ASSIGNMENT_BUGS', target: 'DIM_COA', sourceColumn: 'coa_fk', targetColumn: 'coa_pk' },
];
