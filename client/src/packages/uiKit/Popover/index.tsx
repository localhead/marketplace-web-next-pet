import { FC, ReactNode, memo } from "react";
import { StyledPopover } from "./styles";

interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;

  content: ReactNode;
  isOpen: boolean;
}

export const _Popover: FC<PopoverProps> = (props) => {
  const { content, isOpen, ...restProps } = props;

  return <>{isOpen && <StyledPopover>ajjaja</StyledPopover>}</>;
};

export const Popover = memo(_Popover);
