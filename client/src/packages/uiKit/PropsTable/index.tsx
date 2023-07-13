import { StyledLabel, StyledPropsTable, StyledValue } from './styles';

import { PropsTableItem } from './types';

import React, { FC, Fragment, memo } from 'react';

export interface PropsTableProps {
  className?: string;
  style?: React.CSSProperties;

  items: PropsTableItem[];
}

const _PropsTable: FC<PropsTableProps> = (props) => {
  const { items, ...restProps } = props;

  return (
    <StyledPropsTable {...restProps}>
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            <StyledLabel>{item.label}</StyledLabel>
            <StyledValue>{item.value}</StyledValue>
          </Fragment>
        );
      })}
    </StyledPropsTable>
  );
};

export const PropsTable = memo(_PropsTable);
