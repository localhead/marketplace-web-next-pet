import React, { FC, memo } from "react";

import { WindowWidth } from "@features/adaptive/types";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { ExpandableContent } from "@packages/uiKit";
import { StyledDangerouslySetInnerHTMLContent } from "./styles";

export interface DangerouslySetInnerHTMLContentProps {
  className?: string;
  style?: React.CSSProperties;

  itemProp: string;
  dangerouslySetInnerHTML: { __html: string };

  width: WindowWidth;
  isExpandable?: boolean;
}

const _DangerouslySetInnerHTMLContent: FC<
  DangerouslySetInnerHTMLContentProps
> = (props) => {
  const {
    itemProp,
    width,
    isExpandable = false,
    dangerouslySetInnerHTML,
    ...restProps
  } = props;

  return (
    <>
      {width === "desktop" ? (
        <StyledDangerouslySetInnerHTMLContent
          itemProp="articleBody"
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          {...restProps}
        />
      ) : (
        <Container>
          {isExpandable ? (
            <ExpandableContent maxHeight={130}>
              <StyledDangerouslySetInnerHTMLContent
                itemProp="articleBody"
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                {...restProps}
              />
            </ExpandableContent>
          ) : (
            <StyledDangerouslySetInnerHTMLContent
              itemProp="articleBody"
              dangerouslySetInnerHTML={dangerouslySetInnerHTML}
              {...restProps}
            />
          )}
        </Container>
      )}
    </>
  );
};

export const DangerouslySetInnerHTMLContent = memo(
  _DangerouslySetInnerHTMLContent
);
