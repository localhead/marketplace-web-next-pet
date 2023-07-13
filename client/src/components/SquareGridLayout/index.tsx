import {
  StyledSquareGridLayoutItem,
  StyledSquareGridLayoutItems,
} from './styles';

import { getSquareGridLayoutStyle } from './utils';

import React, {
  FC,
  memo,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface SquareGridLayoutProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  columns: number;
  gap: number;
}

const _SquareGridLayout: FC<SquareGridLayoutProps> = (props) => {
  const { children, columns, gap, ...restProps } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    const resizeCallback: ResizeObserverCallback = (entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        setCurrentWidth(entry.contentRect.width);
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

  const gridStyles = getSquareGridLayoutStyle({
    gap,
    currentWidth,
    columns,
  });

  return (
    <StyledSquareGridLayoutItems ref={ref} {...restProps}>
      {currentWidth !== 0 && (
        <StyledSquareGridLayoutItem style={gridStyles}>
          {children}
        </StyledSquareGridLayoutItem>
      )}
    </StyledSquareGridLayoutItems>
  );
};

export const SquareGridLayout = memo(_SquareGridLayout);
