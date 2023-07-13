import {
  StyledContent,
  StyledDetail,
  StyledDetailHeader,
  StyledTitle,
} from "./styles";

import { IconButton } from "../IconButton";

import { ArrowDownIcon, ArrowUpIcon } from "@packages/icons";
import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

export interface DetailProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  title: string;
}

const _Detail: FC<DetailProps> = (props) => {
  const { title, children, ...restProps } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <StyledDetail {...restProps}>
      <StyledDetailHeader>
        <StyledTitle $isOpen={isOpen} onClick={toggleOpenHandler}>
          {title}
        </StyledTitle>

        <IconButton
          variant="primary-text"
          size="small"
          onClick={toggleOpenHandler}
        >
          {isOpen ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
        </IconButton>
      </StyledDetailHeader>

      {isOpen ? <StyledContent>{children}</StyledContent> : null}
    </StyledDetail>
  );
};

export const Detail = memo(_Detail);
