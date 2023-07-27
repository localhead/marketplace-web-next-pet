import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, memo, ReactNode } from "react";
import { StyledLink } from "./styles";

export interface NavLinkProps extends LinkProps {
  children?: ReactNode;
  activeClassName?: string;
  className?: string;
}

const _NavLink: FC<NavLinkProps> = (props) => {
  const {
    children,
    activeClassName = "active",
    href,
    as,
    className,
    ...restProps
  } = props;
  const router = useRouter();

  const isActive = router.asPath === href || router.asPath === as;

  const _className = isActive
    ? className
      ? className + ` ${activeClassName}`
      : activeClassName
    : className;

  return (
    <StyledLink>
      <Link href={href} as={as} className={_className} {...restProps}>
        {children}
      </Link>
    </StyledLink>
  );
};

export const NavLink = memo(_NavLink);
