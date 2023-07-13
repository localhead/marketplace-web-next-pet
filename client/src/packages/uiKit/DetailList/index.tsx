import { StyledDetailList } from './styles';

import { Detail } from '../Detail';

import React, { FC, PropsWithChildren } from 'react';

export interface DetailListProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const DetailList: FC<DetailListProps> & { Item: typeof Detail } = (
  props,
) => {
  const { ...restProps } = props;

  return <StyledDetailList {...restProps}></StyledDetailList>;
};

DetailList.Item = Detail;
