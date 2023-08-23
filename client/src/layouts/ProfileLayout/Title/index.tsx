import { FC, PropsWithChildren } from "react";
import { StyledTitle } from "./styles";

export interface TitleProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const Title: FC<TitleProps> = (props) => {
  const { children, ...restProps } = props;

  return <StyledTitle {...restProps}>{children}</StyledTitle>;
};
