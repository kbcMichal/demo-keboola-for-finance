export type MetricType = 'value' | 'ratio';

export type Threshold = {
  status: 'green' | 'amber' | 'red';
  label: string;
  range: string;
};

export type Metric = {
  code: string;
  name: string;
  formula: string;
  type: MetricType;
  description: string;
  aggregation: string;
  format: string;
  timeGranularity: string;
  owner: string;
  thresholds: Threshold[];
};

export const metrics: Metric[] = [
  {
    code: 'REV',
    name: 'Revenue',
    formula: 'SUM(ISR99999)',
    type: 'value',
    description: 'Total revenue across all income accounts for the reporting entity. Includes operating and non-operating income.',
    aggregation: 'SUM',
    format: 'Currency',
    timeGranularity: 'Monthly / YTD',
    owner: 'CFO Office',
    thresholds: [
      { status: 'green', label: 'On track', range: '\u2265 90% of budget' },
      { status: 'amber', label: 'Watch', range: '75\u201390% of budget' },
      { status: 'red', label: 'Alert', range: '< 75% of budget' },
    ],
  },
  {
    code: 'EXP',
    name: 'Expenses',
    formula: 'SUM(ISE99999)',
    type: 'value',
    description: 'Total expenses including COGS, operating expenses, and other costs. Used as denominator in efficiency ratios.',
    aggregation: 'SUM',
    format: 'Currency',
    timeGranularity: 'Monthly / YTD',
    owner: 'CFO Office',
    thresholds: [
      { status: 'green', label: 'Under control', range: '\u2264 105% of budget' },
      { status: 'amber', label: 'Watch', range: '105\u2013120% of budget' },
      { status: 'red', label: 'Overrun', range: '> 120% of budget' },
    ],
  },
  {
    code: 'NI',
    name: 'Net Income',
    formula: 'SUM(ISN99999)',
    type: 'value',
    description: 'Bottom-line profit. Revenue minus all expenses. Flows into Balance Sheet as retained earnings.',
    aggregation: 'SUM',
    format: 'Currency',
    timeGranularity: 'Monthly / YTD',
    owner: 'CFO Office',
    thresholds: [
      { status: 'green', label: 'Profitable', range: '> 0' },
      { status: 'amber', label: 'Break-even', range: '\u2248 0' },
      { status: 'red', label: 'Loss', range: '< 0' },
    ],
  },
  {
    code: 'AST',
    name: 'Total Assets',
    formula: 'SUM(BSA99999)',
    type: 'value',
    description: 'Sum of all asset accounts from the Balance Sheet. End-of-period snapshot value.',
    aggregation: 'SUM (EOP)',
    format: 'Currency',
    timeGranularity: 'Monthly snapshot',
    owner: 'Controller',
    thresholds: [
      { status: 'green', label: 'Stable', range: '\u00B15% vs prior' },
      { status: 'amber', label: 'Watch', range: '\u00B15\u201315% vs prior' },
      { status: 'red', label: 'Investigate', range: '> \u00B115% vs prior' },
    ],
  },
  {
    code: 'NPM',
    name: 'Net Profit Margin',
    formula: 'Net Income / Revenue',
    type: 'ratio',
    description: 'How much of each dollar of revenue translates into profit. Core profitability indicator.',
    aggregation: 'Calculated',
    format: 'Percentage',
    timeGranularity: 'Monthly / YTD',
    owner: 'CFO Office',
    thresholds: [
      { status: 'green', label: 'Healthy', range: '\u2265 15%' },
      { status: 'amber', label: 'Thin', range: '5\u201315%' },
      { status: 'red', label: 'Critical', range: '< 5%' },
    ],
  },
  {
    code: 'ROA',
    name: 'Return on Assets',
    formula: 'Net Income / Total Assets',
    type: 'ratio',
    description: 'How efficiently assets are used to generate profit. Higher values indicate better asset utilization.',
    aggregation: 'Calculated',
    format: 'Percentage',
    timeGranularity: 'Monthly / YTD',
    owner: 'Controller',
    thresholds: [
      { status: 'green', label: 'Efficient', range: '\u2265 8%' },
      { status: 'amber', label: 'Average', range: '3\u20138%' },
      { status: 'red', label: 'Low', range: '< 3%' },
    ],
  },
  {
    code: 'ROE',
    name: 'Return on Equity',
    formula: 'Net Income / Equity',
    type: 'ratio',
    description: 'Return generated on shareholder investment. Key metric for investor reporting.',
    aggregation: 'Calculated',
    format: 'Percentage',
    timeGranularity: 'Monthly / YTD',
    owner: 'CFO Office',
    thresholds: [
      { status: 'green', label: 'Strong', range: '\u2265 15%' },
      { status: 'amber', label: 'Moderate', range: '8\u201315%' },
      { status: 'red', label: 'Weak', range: '< 8%' },
    ],
  },
  {
    code: 'D/E',
    name: 'Debt to Equity',
    formula: 'Liabilities / Equity',
    type: 'ratio',
    description: 'Financial leverage indicator. How much debt is used relative to equity to finance operations.',
    aggregation: 'Calculated',
    format: 'Ratio',
    timeGranularity: 'Monthly snapshot',
    owner: 'Controller',
    thresholds: [
      { status: 'green', label: 'Conservative', range: '< 1.0' },
      { status: 'amber', label: 'Moderate', range: '1.0\u20132.0' },
      { status: 'red', label: 'High leverage', range: '> 2.0' },
    ],
  },
  {
    code: 'ER',
    name: 'Expense Ratio',
    formula: 'Expenses / Revenue',
    type: 'ratio',
    description: 'Proportion of revenue consumed by expenses. Lower is better. Used for operational efficiency tracking.',
    aggregation: 'Calculated',
    format: 'Percentage',
    timeGranularity: 'Monthly / YTD',
    owner: 'COO',
    thresholds: [
      { status: 'green', label: 'Efficient', range: '< 70%' },
      { status: 'amber', label: 'Watch', range: '70\u201385%' },
      { status: 'red', label: 'Overweight', range: '> 85%' },
    ],
  },
  {
    code: 'CIR',
    name: 'Cost-Income Ratio',
    formula: 'Expenses / Revenue',
    type: 'ratio',
    description: 'Banking-style efficiency metric. Same formula as ER but commonly used in financial services reporting.',
    aggregation: 'Calculated',
    format: 'Percentage',
    timeGranularity: 'Monthly / YTD',
    owner: 'CFO Office',
    thresholds: [
      { status: 'green', label: 'Best-in-class', range: '< 50%' },
      { status: 'amber', label: 'Average', range: '50\u201365%' },
      { status: 'red', label: 'Inefficient', range: '> 65%' },
    ],
  },
];

export const metricValues = metrics.filter(m => m.type === 'value');
export const metricRatios = metrics.filter(m => m.type === 'ratio');
