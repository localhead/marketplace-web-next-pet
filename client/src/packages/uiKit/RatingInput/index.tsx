import { StyledRating } from './styles';

import { StarFilledIcon, StarOutlinedIcon } from '@packages/icons';
import React, { FC, memo, useMemo } from 'react';

export interface RatingInputProps {
  className?: string;
  style?: React.CSSProperties;

  value: number;
  onChange?: (value: number) => void;
}

const breakpoints = [1, 2, 3, 4, 5];

const _RatingInput: FC<RatingInputProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const stars = useMemo(() => {
    return breakpoints.map((br) => {
      const clickHandler = onChange
        ? () => {
            onChange(br);
          }
        : undefined;

      if (br <= value) {
        return <StarFilledIcon key={br} onClick={clickHandler} />;
      } else {
        return <StarOutlinedIcon key={br} onClick={clickHandler} />;
      }
    });
  }, [onChange, value]);

  return <StyledRating {...restProps}>{stars}</StyledRating>;
};

export const RatingInput = memo(_RatingInput);
