export type Metric = {
  code: string;
  name: string;
  formula: string;
};

export const metrics: Metric[] = [
  { code: 'REV', name: 'Revenue', formula: 'SUM(ISR99999)' },
  { code: 'EXP', name: 'Expenses', formula: 'SUM(ISE99999)' },
  { code: 'NI', name: 'Net Income', formula: 'SUM(ISN99999)' },
  { code: 'AST', name: 'Total Assets', formula: 'SUM(BSA99999)' },
  { code: 'NPM', name: 'Net Profit Margin', formula: 'Net Income / Revenue' },
  { code: 'ROA', name: 'Return on Assets', formula: 'Net Income / Total Assets' },
  { code: 'ROE', name: 'Return on Equity', formula: 'Net Income / Equity' },
  { code: 'D/E', name: 'Debt to Equity', formula: 'Liabilities / Equity' },
  { code: 'ER', name: 'Expense Ratio', formula: 'Expenses / Revenue' },
  { code: 'CIR', name: 'Cost-Income Ratio', formula: 'Expenses / Revenue' },
];
