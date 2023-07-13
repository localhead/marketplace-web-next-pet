import React, { FC, memo } from "react";
import { Button } from "../Button";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import {
  StyledButtonsContainer,
  StyledOfferCard,
  StyledStepDescription,
  StyledStepsColContainer,
  StyledStepsContainer,
  StyledTag,
  StyledTitle,
} from "./styles";

export interface OfferCardProps {
  className?: string;
  style?: React.CSSProperties;

  title: string;
}

const _OfferCard: FC<OfferCardProps> = (props) => {
  const { title, ...restProps } = props;

  const width = useWindowWidth();

  return (
    <StyledOfferCard {...restProps}>
      <StyledTitle>{title}</StyledTitle>
      <StyledStepsContainer>
        <StyledStepsColContainer>
          <StyledTag>1</StyledTag>
          <StyledStepDescription>
            Откройте счет в HalalBank
          </StyledStepDescription>
        </StyledStepsColContainer>
        <StyledStepsColContainer>
          <StyledTag>2</StyledTag>
          <StyledStepDescription>Получайте бонусы</StyledStepDescription>
        </StyledStepsColContainer>
        <StyledStepsColContainer>
          <StyledTag>3</StyledTag>
          <StyledStepDescription>
            Оплачивайте бонусами свои покупки у партнеров
          </StyledStepDescription>
        </StyledStepsColContainer>
      </StyledStepsContainer>
      <StyledButtonsContainer>
        <Button size="medium" variant="primary">
          Открыть счет
        </Button>
        <Button size="medium" variant="outlined">
          {width === "desktop" ? "Партнёры программы" : "Партнёры"}
        </Button>
      </StyledButtonsContainer>
    </StyledOfferCard>
  );
};

export const OfferCard = memo(_OfferCard);
