import { GridAdaptive } from '@components/GridAdaptive';
import React, { FC, PropsWithChildren } from 'react';

export interface ItemsGridProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const ItemsGrid: FC<ItemsGridProps> = (props) => {
  const { ...restProps } = props;

  return (
    <GridAdaptive
      cols={{ default: 5, desktop: 3, tablet: 2 }}
      columnGap={15}
      rowGap={55}
      {...restProps}
    />
  );
};
