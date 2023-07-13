import { StyledMessage } from './styles';
import { MessageType } from './types';

import React, { FC, memo, PropsWithChildren } from 'react';

export interface MessageProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  type: MessageType;
}

const _Message: FC<MessageProps> = (props) => {
  const { type, ...restProps } = props;

  return <StyledMessage $type={type} {...restProps} />;
};

export const Message = memo(_Message);
