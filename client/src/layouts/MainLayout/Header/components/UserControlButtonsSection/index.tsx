import { FC } from "react";

import { AuthButton } from "./AuthButton";
import { FavoritesButton } from "./FavoritesButton";
import { InternationalizationButton } from "./InternationalizationButton";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { StyledLeftContainer, StyledUserControlButtonsSection } from "./styles";

export interface UserControlButtonsSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const ICON_SIZE = 23;

export const UserControlButtonsSection: FC<UserControlButtonsSectionProps> = (
  props
) => {
  const { ...restProps } = props;

  return (
    <StyledUserControlButtonsSection>
      <StyledLeftContainer>
        <InternationalizationButton iconSize={ICON_SIZE} />
        <AuthButton iconSize={ICON_SIZE} />
        <FavoritesButton iconSize={ICON_SIZE} />
      </StyledLeftContainer>

      <ShoppingCartButton />
    </StyledUserControlButtonsSection>
  );
};
