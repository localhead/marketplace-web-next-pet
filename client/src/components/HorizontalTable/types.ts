import { ReactNode } from 'react';

export type HorizontalTableRow<T extends object> = {
  id: string | number;
  header?: string;
  render: (dataItem: T) => ReactNode;
};
