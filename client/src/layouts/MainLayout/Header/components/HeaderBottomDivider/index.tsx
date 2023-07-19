import { FC, memo } from "react";
import { StyledHeaderBottomDivider } from "./styles";

interface HeaderBottomDividerProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _HeaderBottomDivider: FC<HeaderBottomDividerProps> = (props) => {
  return <StyledHeaderBottomDivider />;
};

export const HeaderBottomDivider = memo(_HeaderBottomDivider);
