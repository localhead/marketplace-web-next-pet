import { StyledSlideButtons } from "./styles";

import { CaretLeftIcon, CaretRightIcon } from "@packages/icons";
import { Button, IconButton } from "@packages/uiKit";
import Link from "next/link";
import React, { FC, memo } from "react";

export interface SlideButtonsProps {
  className?: string;
  style?: React.CSSProperties;

  withShowAll?: boolean;
  showAllLink?: string;

  onNextClick?: () => void;
  onPrevClick?: () => void;
}

const _SlideButtons: FC<SlideButtonsProps> = (props) => {
  const {
    onNextClick,
    withShowAll = true,
    showAllLink,
    onPrevClick,
    ...restProps
  } = props;

  return (
    <StyledSlideButtons {...restProps}>
      {withShowAll &&
        (showAllLink ? (
          <Link href={showAllLink}>
            <Button variant="outlined" size="medium">
              Смотреть все
            </Button>
          </Link>
        ) : (
          <Button variant="outlined" size="medium">
            Смотреть все
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
