import React, { FC, PropsWithChildren, memo } from "react";

import { WindowWidth } from "@features/adaptive/types";
import { Container } from "../../Container";
import { StyledDescription } from "./styles";

export interface DescriptionProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  width: WindowWidth;
}

const _Description: FC<DescriptionProps> = (props) => {
  const { children, width, ...restProps } = props;

  return (
    <>
      {width === "desktop" ? (
        <StyledDescription {...restProps}>{children}</StyledDescription>
      ) : (
        <Container>
          <StyledDescription {...restProps}>{children}</StyledDescription>
        </Container>
      )}
    </>
  );
};

export const Description = memo(_Description);
