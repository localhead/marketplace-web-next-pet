import {
  StyledBreadCrumbs,
  StyledCaretLeftIcon,
  StyledItemInner,
  StyledLink,
  StyledListItem,
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
    <StyledBreadCrumbs
      {...restProps}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {items.map((item, index) => {
        if (item.link) {
          return (
            <StyledListItem
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <StyledLink href={item.link} itemProp="item">
                {index !== 0 && <StyledCaretLeftIcon />}
                <span itemProp="name">{item.label}</span>
              </StyledLink>
              <meta itemProp="position" content={(index + 1).toString()} />
            </StyledListItem>
          );
        }

        return (
          <StyledListItem
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <StyledItemInner itemProp="item">
              {index !== 0 && <StyledCaretLeftIcon />}
              <span itemProp="name">{item.label}</span>
            </StyledItemInner>
            <meta itemProp="position" content={(index + 1).toString()} />
          </StyledListItem>
        );
      })}
    </StyledBreadCrumbs>
  );
};

export const Breadcrumbs = memo(_Breadcrumbs);
