import { HeartStraightIcon } from "@packages/icons";
import { IconButton } from "@packages/uiKit";
import { FC, memo } from "react";
import { StyledFavoritesButton } from "./styles";

interface FavoritesButtonProps {
  className?: string;
  style?: React.CSSProperties;

  iconSize: number;
}

export const _FavoritesButton: FC<FavoritesButtonProps> = (props) => {
  const { iconSize = 20, ...restProps } = props;
  return (
    <StyledFavoritesButton>
      <IconButton
        onClick={() => {}}
        variant="secondary"
        rounded={false}
        size="default"
      >
        <HeartStraightIcon size={iconSize} />
      </IconButton>
    </StyledFavoritesButton>
  );
};

export const FavoritesButton = memo(_FavoritesButton);
