import { FC, memo } from "react";
import { StyledInternationalizationButton } from "./styles";

interface InternationalizationButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _InternationalizationButton: FC<
  InternationalizationButtonProps
> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledInternationalizationButton>tets</StyledInternationalizationButton>
  );
};

export const InternationalizationButton = memo(_InternationalizationButton);
