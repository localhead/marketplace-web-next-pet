import { WindowWidth } from "@features/adaptive/types";
import React, { FC, PropsWithChildren, memo } from "react";
import { Container } from "../../Container";
import { StyledTitle } from "./styles";

export interface TitleProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  width: WindowWidth;
}

const _Title: FC<TitleProps> = (props) => {
  const { children, width, ...restProps } = props;

  return (
    <>
      {width === "desktop" ? (
        <StyledTitle {...restProps}>{children}</StyledTitle>
      ) : (
        <Container>
          <StyledTitle {...restProps}>{children}</StyledTitle>
        </Container>
      )}
    </>
  );
};

export const Title = memo(_Title);
