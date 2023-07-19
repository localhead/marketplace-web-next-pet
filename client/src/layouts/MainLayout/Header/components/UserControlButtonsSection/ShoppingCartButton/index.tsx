import { ShoppingCartIcon } from "@packages/icons";
import { Button } from "@packages/uiKit";
import { FC, memo } from "react";
import { StyledShoppingCartButton } from "./styles";

interface ShoppingCartButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _ShoppingCartButton: FC<ShoppingCartButtonProps> = (props) => {
  const { ...restProps } = props;
  return (
    <StyledShoppingCartButton>
      <Button
        onClick={() => {}}
        icon={<ShoppingCartIcon />}
        size="medium"
        iconPosition="left"
        variant="secondary-outlined"
      >
        Корзина
      </Button>
    </StyledShoppingCartButton>
  );
};

export const ShoppingCartButton = memo(_ShoppingCartButton);
