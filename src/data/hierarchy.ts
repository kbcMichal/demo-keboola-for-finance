export type HierarchyNode = {
  code: string;
  name: string;
  type?: string;
  children?: HierarchyNode[];
};

export const fininHierarchy: HierarchyNode[] = [
  {
    code: 'BS',
    name: 'Balance Sheet',
    children: [
      { code: 'BSA99999', name: 'Assets', type: 'A/BS' },
      {
        code: 'BSL99999',
        name: 'Liabilities',
        type: 'P/BS',
        children: [
          {
            code: 'BSL19999',
            name: 'Equity',
            type: 'P/BS',
            children: [
              { code: 'BSL14900', name: 'Net income current year', type: 'synthetic' },
              { code: 'BSL14100', name: 'Profit carried forward', type: 'synthetic' },
              { code: 'BSL14950', name: 'Currency translation adj.', type: 'future' },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 'PL',
    name: 'Profit & Loss',
    children: [
      {
        code: 'ISN99999',
        name: 'Profit & Loss',
        type: 'R/PL',
        children: [
          { code: 'ISR99999', name: 'Revenues', type: 'R/PL' },
          { code: 'ISE99999', name: 'Expenses', type: 'C/PL' },
        ],
      },
    ],
  },
];

export const accountTypes = [
  { code: 'A', label: 'Assets', color: 'var(--green)', erpTypes: 'AcctRec, Bank, FixedAsset, OthCurrAsset, DeferExpense, UnbilledRec, OthAsset' },
  { code: 'P', label: 'Liabilities', color: 'var(--red)', erpTypes: 'OthCurrLiab, AcctPay, LongTermLiab, DeferRevenue, Equity' },
  { code: 'R', label: 'Revenue', color: 'var(--blue-light)', erpTypes: 'Income, OthIncome' },
  { code: 'C', label: 'Costs', color: 'var(--amber)', erpTypes: 'COGS, Expense, OthExpense' },
  { code: 'X', label: 'Other', color: 'var(--gray-500)', erpTypes: 'Stat, NonPosting' },
];
