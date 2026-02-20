export type SlideMetadata = {
  id: number;
  section: number;
  title: string;
};

export const sections = [
  { id: 0, name: 'Context' },
  { id: 1, name: 'Data Model' },
  { id: 2, name: 'Quality' },
  { id: 3, name: 'Delivery' },
];

export const slideMetadata: SlideMetadata[] = [
  { id: 0, section: 0, title: 'Title' },
  { id: 1, section: 0, title: 'The Challenge' },
  { id: 2, section: 0, title: 'What We Deliver' },
  { id: 3, section: 0, title: 'The 90/10 Rule' },
  { id: 4, section: 1, title: 'Transition' },
  { id: 5, section: 1, title: 'Data Model & Rules' },
  { id: 6, section: 1, title: 'Pipeline Flow' },
  { id: 7, section: 2, title: 'Data Quality' },
  { id: 8, section: 2, title: 'Business Glossary' },
  { id: 9, section: 2, title: 'Visualization Options' },
  { id: 10, section: 2, title: 'Live Demo' },
  { id: 11, section: 3, title: 'Reusable Datasets' },
  { id: 12, section: 3, title: 'Why Keboola' },
  { id: 13, section: 3, title: 'Implementation' },
  { id: 14, section: 3, title: 'Closing' },
];
