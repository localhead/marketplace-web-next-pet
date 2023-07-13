import {
  StyledBreadCrumbs,
  StyledCaretLeftIcon,
  StyledLink,
  StyledLinkItem,
} from "./styles";

import { BreadcrumbItem } from "./type";

import React, { FC, memo } from "react";

export interface BreadcrumbsProps {
  className?: string;
  style?: React.CSSProperties;

  items: BreadcrumbItem[];
}

const _Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { items, ...restProps } = props;

  return (
    <StyledBreadCrumbs {...restProps}>
      {items.map((item, index) => {
        if (item.link) {
          return (
            <StyledLink key={index} href={item.link}>
              <StyledLinkItem>
                {index !== 0 && <StyledCaretLeftIcon />}
                {item.label}
              </StyledLinkItem>
            </StyledLink>
          );
        }

        return (
          <StyledLinkItem key={index}>
            {index !== 0 && <StyledCaretLeftIcon />}
            {item.label}
          </StyledLinkItem>
        );
      })}
    </StyledBreadCrumbs>
  );
};

export const Breadcrumbs = memo(_Breadcrumbs);
