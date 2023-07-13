import { StyledRoundContainer } from './styles';

import { AppColor } from '../utils';

import { FC, PropsWithoutRef } from 'react';

export type RoundContainerProps = PropsWithoutRef<
  JSX.IntrinsicElements['div']
> & {
  fill?: AppColor;
  borderRadius?: number;
  borderColor?: AppColor;
};

export const RoundContainer: FC<RoundContainerProps> = (props) => {
  const { fill, borderRadius, borderColor, ...restProps } = props;

  return (
    <StyledRoundContainer
      $fill={fill}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      {...restProps}
    />
  );
};
