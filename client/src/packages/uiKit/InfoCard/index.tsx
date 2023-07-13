import { Segment } from './Segment';
import { StyledInfoCard } from './styles';

import React, { FC, PropsWithChildren } from 'react';

export interface InfoCardProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const InfoCard: FC<InfoCardProps> & { Segment: typeof Segment } = (
  props,
) => {
  const { ...restProps } = props;

  return <StyledInfoCard {...restProps} />;
};

InfoCard.Segment = Segment;
