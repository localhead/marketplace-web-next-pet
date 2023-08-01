import { StyledSlideButtons } from "./styles";

import { CaretLeftIcon, CaretRightIcon } from "@packages/icons";
import { Button, IconButton } from "@packages/uiKit";
import Link from "next/link";
import React, { FC, memo } from "react";

export interface SlideButtonsProps {
  className?: string;
  style?: React.CSSProperties;

  withButton?: boolean;
  buttonLink?: string;
  LinkTitle?: string;

  onNextClick?: () => void;
  onPrevClick?: () => void;
}

const _SlideButtons: FC<SlideButtonsProps> = (props) => {
  const {
    onNextClick,
    withButton = true,
    buttonLink,
    LinkTitle = "Смотреть все",
    onPrevClick,
    ...restProps
  } = props;

  return (
    <StyledSlideButtons {...restProps}>
      {withButton &&
        (buttonLink ? (
          <Link href={buttonLink}>
            <Button variant="outlined" size="medium">
              {LinkTitle}
            </Button>
          </Link>
        ) : (
          <Button variant="outlined" size="medium">
            {LinkTitle}
          </Button>
        ))}

      <IconButton onClick={onPrevClick} variant="secondary">
        <CaretLeftIcon size={18} />
      </IconButton>
      <IconButton onClick={onNextClick} variant="primary">
        <CaretRightIcon size={18} />
      </IconButton>
    </StyledSlideButtons>
  );
};

export const SlideButtons = memo(_SlideButtons);
