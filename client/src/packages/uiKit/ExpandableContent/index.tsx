import {
  StyledContent,
  StyledExpandableContent,
  StyledExpandButton,
} from "./styles";

import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ExpandableContentProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  maxHeight: number;
}

const _ExpandableContent: FC<ExpandableContentProps> = (props) => {
  const { children, maxHeight, ...restProps } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeCallback: ResizeObserverCallback = (entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        setHeight(entry.contentRect.height);
      }
    };
    const ro = new ResizeObserver(resizeCallback);

    if (ref.current) {
      ro.observe(ref.current);
    }

    return () => {
      ro.disconnect();
    };
  }, []);

  const isExpandHeight = height >= maxHeight;

  return (
    <StyledExpandableContent {...restProps}>
      <StyledContent
        $isExpanded={isExpanded}
        $isExpandHeight={isExpandHeight}
        $maxHeight={maxHeight}
        ref={ref}
      >
        {children}
      </StyledContent>
      {isExpandHeight && (
        <StyledExpandButton onClick={toggle}>
          {isExpanded ? "Скрыть" : "Показать полностью"}
        </StyledExpandButton>
      )}
    </StyledExpandableContent>
  );
};

export const ExpandableContent = memo(_ExpandableContent);
