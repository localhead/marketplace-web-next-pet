import { StyledTag } from './styles';

import { FC, memo, PropsWithoutRef } from 'react';

export type TagProps = PropsWithoutRef<JSX.IntrinsicElements['div']> & {};

const _Tag: FC<TagProps> = (props) => {
  const { ...restProps } = props;

  return <StyledTag {...restProps} />;
};

export const Tag = memo(_Tag);
