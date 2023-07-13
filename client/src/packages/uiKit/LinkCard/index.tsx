import { CaretRightIcon } from "@packages/icons";
import { StaticImageData } from "next/image";
import React, { FC, memo } from "react";
import { IconButton } from "../IconButton";

import {
  StyledAddition,
  StyledButtonContainer,
  StyledImage,
  StyledImageContainer,
  StyledLinkCard,
  StyledTextsContainer,
  StyledTitle,
} from "./styles";
import { LinkCardColor } from "./types";

export interface LinkCardProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  addition?: string;
  image: StaticImageData;
  color: LinkCardColor;
}

const _LinkCard: FC<LinkCardProps> = (props) => {
  const { title, addition, image, color, ...restProps } = props;

  const iconButtonVariant =
    color === "white"
      ? "primary-outlined-circle"
      : color === "primary"
      ? "white-outlined-circle"
      : "primary-outlined-circle";

  return (
    <StyledLinkCard $color={color} {...restProps}>
      <StyledButtonContainer>
        <IconButton variant={iconButtonVariant}>
          <CaretRightIcon />
        </IconButton>
      </StyledButtonContainer>
      <StyledTextsContainer>
        {addition ? <StyledAddition>{addition}</StyledAddition> : null}
        <StyledTitle>{title}</StyledTitle>
      </StyledTextsContainer>
      <StyledImageContainer>
        <StyledImage src={image} alt={title} />
      </StyledImageContainer>
    </StyledLinkCard>
  );
};

export const LinkCard = memo(_LinkCard);
