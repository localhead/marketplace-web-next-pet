import { CaretRightIcon } from "@packages/icons";
import { StaticImageData } from "next/image";
import React, { FC, memo } from "react";
import { IconButton } from "../IconButton";

import {
  StyledAddition,
  StyledBottomLeftText,
  StyledButtonContainer,
  StyledImage,
  StyledImageContainer,
  StyledLinkCardWide,
  StyledTextsContainer,
  StyledTitle,
} from "./styles";

export interface LinkCardWideProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  addition?: string;
  image: StaticImageData;
  color: "white" | "primary";
  backGroundColor?: "red" | "blue";
}

const _LinkCardWide: FC<LinkCardWideProps> = (props) => {
  const {
    color,
    addition,
    title,
    image,
    backGroundColor = "red",
    ...restProps
  } = props;

  const iconButtonVariant =
    color === "white"
      ? "primary-outlined-circle"
      : color === "primary"
      ? "white-outlined-circle"
      : "primary-outlined-circle";

  return (
    <StyledLinkCardWide $backGroundColor={backGroundColor} {...restProps}>
      <StyledButtonContainer>
        <IconButton variant={iconButtonVariant}>
          <CaretRightIcon />
        </IconButton>
      </StyledButtonContainer>
      <StyledTextsContainer>
        <StyledBottomLeftText>
          {addition ? <StyledAddition>{addition}</StyledAddition> : null}
          <StyledTitle>{title}</StyledTitle>
        </StyledBottomLeftText>
      </StyledTextsContainer>
      <StyledImageContainer>
        <StyledImage src={image} alt={title} />
      </StyledImageContainer>
    </StyledLinkCardWide>
  );
};

export const LinkCardWide = memo(_LinkCardWide);
