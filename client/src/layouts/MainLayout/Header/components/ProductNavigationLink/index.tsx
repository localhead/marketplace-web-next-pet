import { FC, PropsWithChildren, memo } from "react";
import { StyledProductNavigationLink } from "./styles";

interface ProductNavigationLinkProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;

  href: string;
  isFirst: boolean;
}

export const _ProductNavigationLink: FC<ProductNavigationLinkProps> = (
  props
) => {
  const { children, href, isFirst, ...restProps } = props;

  return (
    <StyledProductNavigationLink href={href} $isFirst={isFirst}>
      {children}
    </StyledProductNavigationLink>
  );
};

export const ProductNavigationLink = memo(_ProductNavigationLink);
