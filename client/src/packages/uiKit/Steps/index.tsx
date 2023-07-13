import { Item } from './Item';

import { StyledSteps } from './styles';
import { StepsStepItem } from './types';

import React, { FC, memo } from 'react';

export interface StepsProps {
  className?: string;
  style?: React.CSSProperties;
  steps: StepsStepItem[];
}

const _Steps: FC<StepsProps> = (props) => {
  const { steps, ...restProps } = props;

  return (
    <StyledSteps {...restProps}>
      {steps.map((step, index, arr) => {
        return (
          <Item
            key={index}
            number={index + 1}
            isLast={index === arr.length - 1}
            {...step}
          />
        );
      })}
    </StyledSteps>
  );
};

export const Steps = memo(_Steps);
