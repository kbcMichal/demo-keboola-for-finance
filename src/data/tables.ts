export type ColumnDef = {
  name: string;
  type: string;
  pk?: boolean;
  fk?: string; // references table name
};

export type TableDef = {
  name: string;
  layer: 'dimension' | 'fact' | 'mart' | 'validation' | 'staging';
  columns: ColumnDef[];
};

export const tables: TableDef[] = [
  // ── Dimensions ──
  {
    name: 'DIM_BUSINESS_UNIT',
    layer: 'dimension',
    columns: [
      { name: 'business_unit_pk', type: 'VARCHAR', pk: true },
      { name: 'business_unit_name', type: 'VARCHAR' },
      { name: 'country', type: 'VARCHAR' },
      { name: 'local_currency', type: 'VARCHAR' },
      { name: 'is_group_entity', type: 'BOOLEAN' },
    ],
  },
  {
    name: 'DIM_BUSINESS_SUBUNIT',
    layer: 'dimension',
    columns: [
      { name: 'business_subunit_pk', type: 'VARCHAR', pk: true },
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'subunit_name', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_COA',
    layer: 'dimension',
    columns: [
      { name: 'coa_pk', type: 'VARCHAR', pk: true },
      { name: 'account_number', type: 'VARCHAR' },
      { name: 'account_name', type: 'VARCHAR' },
      { name: 'account_type', type: 'VARCHAR' },
      { name: 'finin_code', type: 'VARCHAR', fk: 'MAP_FININ_STRUCTURE' },
      { name: 'hierarchy_level', type: 'INT' },
      { name: 'is_leaf', type: 'BOOLEAN' },
      { name: 'parent_account_pk', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_CURRENCY',
    layer: 'dimension',
    columns: [
      { name: 'currency_code', type: 'VARCHAR' },
      { name: 'currency_name', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_DATE',
    layer: 'dimension',
    columns: [
      { name: 'date_key', type: 'DATE' },
      { name: 'year', type: 'INT' },
      { name: 'month', type: 'INT' },
      { name: 'fiscal_year', type: 'INT' },
      { name: 'fiscal_period', type: 'INT' },
    ],
  },
  {
    name: 'DIM_FX_RATE',
    layer: 'dimension',
    columns: [
      { name: 'fx_rate_pk', type: 'VARCHAR', pk: true },
      { name: 'from_currency', type: 'VARCHAR' },
      { name: 'to_currency', type: 'VARCHAR' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'avg_rate', type: 'DECIMAL' },
      { name: 'eop_rate', type: 'DECIMAL' },
    ],
  },
  {
    name: 'DIM_METRIC',
    layer: 'dimension',
    columns: [
      { name: 'metric_pk', type: 'VARCHAR', pk: true },
      { name: 'metric_code', type: 'VARCHAR' },
      { name: 'metric_name', type: 'VARCHAR' },
      { name: 'formula', type: 'VARCHAR' },
      { name: 'metric_group_fk', type: 'VARCHAR', fk: 'DIM_METRIC_GROUP' },
      { name: 'format_type', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_METRIC_GROUP',
    layer: 'dimension',
    columns: [
      { name: 'metric_group_pk', type: 'VARCHAR', pk: true },
      { name: 'group_name', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_METRIC_THRESHOLD',
    layer: 'dimension',
    columns: [
      { name: 'threshold_pk', type: 'VARCHAR', pk: true },
      { name: 'metric_fk', type: 'VARCHAR', fk: 'DIM_METRIC' },
      { name: 'rag_status', type: 'VARCHAR' },
      { name: 'lower_bound', type: 'DECIMAL' },
      { name: 'upper_bound', type: 'DECIMAL' },
    ],
  },
  {
    name: 'DIM_DIMENSION',
    layer: 'dimension',
    columns: [
      { name: 'dimension_pk', type: 'VARCHAR', pk: true },
      { name: 'dimension_name', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_DIMENSION_VALUE',
    layer: 'dimension',
    columns: [
      { name: 'dimension_value_pk', type: 'VARCHAR', pk: true },
      { name: 'dimension_fk', type: 'VARCHAR', fk: 'DIM_DIMENSION' },
      { name: 'value_code', type: 'VARCHAR' },
      { name: 'value_name', type: 'VARCHAR' },
    ],
  },
  {
    name: 'DIM_UPLOAD_MODE',
    layer: 'dimension',
    columns: [
      { name: 'upload_mode_pk', type: 'VARCHAR', pk: true },
      { name: 'mode_name', type: 'VARCHAR' },
    ],
  },
  {
    name: 'MAP_ACCOUNT_TYPE',
    layer: 'dimension',
    columns: [
      { name: 'erp_account_type', type: 'VARCHAR' },
      { name: 'standard_type', type: 'VARCHAR' },
    ],
  },
  {
    name: 'MAP_FININ_STRUCTURE',
    layer: 'dimension',
    columns: [
      { name: 'finin_code', type: 'VARCHAR' },
      { name: 'finin_name', type: 'VARCHAR' },
      { name: 'parent_code', type: 'VARCHAR' },
      { name: 'statement_type', type: 'VARCHAR' },
    ],
  },
  // ── Facts ──
  {
    name: 'FT_FIN_JOURNAL',
    layer: 'fact',
    columns: [
      { name: 'journal_pk', type: 'VARCHAR', pk: true },
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'coa_fk', type: 'VARCHAR', fk: 'DIM_COA' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'amount_local', type: 'DECIMAL' },
      { name: 'amount_reporting', type: 'DECIMAL' },
      { name: 'upload_mode_fk', type: 'VARCHAR', fk: 'DIM_UPLOAD_MODE' },
    ],
  },
  {
    name: 'FT_FIN_STAT_PERIOD',
    layer: 'fact',
    columns: [
      { name: 'stat_period_pk', type: 'VARCHAR', pk: true },
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'coa_fk', type: 'VARCHAR', fk: 'DIM_COA' },
      { name: 'finin_code', type: 'VARCHAR', fk: 'MAP_FININ_STRUCTURE' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'amount_local', type: 'DECIMAL' },
      { name: 'amount_reporting', type: 'DECIMAL' },
      { name: 'statement_type', type: 'VARCHAR' },
    ],
  },
  // ── Mart ──
  {
    name: 'FT_METRIC_VALUE',
    layer: 'mart',
    columns: [
      { name: 'metric_value_pk', type: 'VARCHAR', pk: true },
      { name: 'metric_fk', type: 'VARCHAR', fk: 'DIM_METRIC' },
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'value', type: 'DECIMAL' },
      { name: 'prior_month_value', type: 'DECIMAL' },
      { name: 'prior_year_value', type: 'DECIMAL' },
    ],
  },
  // ── Validation ──
  {
    name: 'COA_DEBUG_COUNT_CHECK',
    layer: 'validation',
    columns: [
      { name: 'check_name', type: 'VARCHAR' },
      { name: 'count_value', type: 'INT' },
    ],
  },
  {
    name: 'FT_BS_BALANCE_MONTHLY',
    layer: 'validation',
    columns: [
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'balance_diff', type: 'DECIMAL' },
    ],
  },
  {
    name: 'FT_FININ_ASSIGNMENT_BUGS',
    layer: 'validation',
    columns: [
      { name: 'coa_fk', type: 'VARCHAR', fk: 'DIM_COA' },
      { name: 'issue_type', type: 'VARCHAR' },
      { name: 'detail', type: 'VARCHAR' },
    ],
  },
  {
    name: 'FT_LOCAL_FININ_SUMS',
    layer: 'validation',
    columns: [
      { name: 'finin_code', type: 'VARCHAR' },
      { name: 'local_sum', type: 'DECIMAL' },
      { name: 'consolidated_sum', type: 'DECIMAL' },
      { name: 'diff', type: 'DECIMAL' },
    ],
  },
  {
    name: 'UNASSIGNED_FIN_ACCOUNT',
    layer: 'validation',
    columns: [
      { name: 'account_number', type: 'VARCHAR' },
      { name: 'account_name', type: 'VARCHAR' },
      { name: 'entry_count', type: 'INT' },
    ],
  },
  {
    name: 'FT_MISSING_FX_RATES',
    layer: 'validation',
    columns: [
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'currency_from', type: 'VARCHAR' },
      { name: 'sum_unconverted', type: 'DECIMAL' },
    ],
  },
  {
    name: 'FT_MISSING_FX_RATES_SC',
    layer: 'validation',
    columns: [
      { name: 'business_unit_fk', type: 'VARCHAR', fk: 'DIM_BUSINESS_UNIT' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'currency_from', type: 'VARCHAR' },
      { name: 'sum_unconverted', type: 'DECIMAL' },
    ],
  },
  {
    name: 'FT_INTERCOMPANY_BALANCE_CHECK',
    layer: 'validation',
    columns: [
      { name: 'sender_unit', type: 'VARCHAR' },
      { name: 'receiver_unit', type: 'VARCHAR' },
      { name: 'period', type: 'VARCHAR' },
      { name: 'net_difference', type: 'DECIMAL' },
    ],
  },
  {
    name: 'FT_GROUP_BALANCE_CHECK',
    layer: 'validation',
    columns: [
      { name: 'period', type: 'VARCHAR' },
      { name: 'total_balance', type: 'DECIMAL' },
    ],
  },
  // ── Staging / Intermediate ──
  {
    name: 'STG_COA_INPUT',
    layer: 'staging',
    columns: [
      { name: 'raw_account_id', type: 'VARCHAR' },
      { name: 'raw_account_name', type: 'VARCHAR' },
      { name: 'raw_account_type', type: 'VARCHAR' },
    ],
  },
  {
    name: 'STG_JOURNAL_ENRICHED',
    layer: 'staging',
    columns: [
      { name: 'journal_id', type: 'VARCHAR' },
      { name: 'account_number', type: 'VARCHAR' },
      { name: 'amount', type: 'DECIMAL' },
      { name: 'entity_code', type: 'VARCHAR' },
      { name: 'period', type: 'VARCHAR' },
    ],
  },
];
