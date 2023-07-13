import { Column } from 'react-table';

export type TableColumn<D extends object = {}> = Column<D> & {
  overflow?: boolean;
  canResize?: boolean;
};
