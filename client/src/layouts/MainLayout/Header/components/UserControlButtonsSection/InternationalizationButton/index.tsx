import { GlobalIcon } from "@packages/icons";
import { IconButton } from "@packages/uiKit";
import { FC, memo } from "react";
import { StyledInternationalizationButton } from "./styles";

interface InternationalizationButtonProps {
  className?: string;
  style?: React.CSSProperties;

  iconSize: number;
}

export const _InternationalizationButton: FC<
  InternationalizationButtonProps
> = (props) => {
  const { iconSize = 20, ...restProps } = props;
  return (
    <StyledInternationalizationButton>
      <IconButton
        onClick={() => {}}
        variant="secondary"
        rounded={false}
        size="default"
      >
        <GlobalIcon size={iconSize} />
      </IconButton>
    </StyledInternationalizationButton>
  );
};

export const InternationalizationButton = memo(_InternationalizationButton);
