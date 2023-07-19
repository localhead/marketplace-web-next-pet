import React, { memo } from 'react';

import { Styled } from {};
{pascalCase}} } from './styles'

export interface {{pascalCase}}Props {
  className?: string;
  style?: React.CSSProperties;
};

const _{{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
  const {...restProps} = props
  
  return <Styled{{pascalCase}} {...restProps}></Styled{{pascalCase}}>;
};

export const {{pascalCase}} = memo(_{{pascalCase}})
