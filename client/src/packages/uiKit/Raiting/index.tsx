import { StyledRating } from './styles';

import { StarFilledIcon, StarOutlinedIcon } from '@packages/icons';
import React, { FC, memo } from 'react';

export interface RatingProps {
  className?: string;
  style?: React.CSSProperties;

  rating: number;
}

const breakpoints = [0.5, 1.5, 2.5, 3.5, 4.5];

const _Rating: FC<RatingProps> = (props) => {
  const { rating, ...restProps } = props;

  return (
    <StyledRating {...restProps}>
      {breakpoints.map((br) => {
        if (br <= rating) {
          return <StarFilledIcon key={br} />;
        } else {
          return <StarOutlinedIcon key={br} />;
        }
      })}
    </StyledRating>
  );
};

export const Rating = memo(_Rating);
