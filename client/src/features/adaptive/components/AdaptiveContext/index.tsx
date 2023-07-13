import { Breakpoints } from "@features/adaptive/breakpoints";
import { useWindow } from "@features/adaptive/hooks/useWindow";
import { WindowWidth } from "@features/adaptive/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const getWindowWidth = (windowWidthPx: number): WindowWidth =>
  windowWidthPx >= Breakpoints.desktop
    ? "desktop"
    : windowWidthPx < Breakpoints.desktop && windowWidthPx >= Breakpoints.tablet
    ? "tablet"
    : "mobile";

const Context = createContext<{ windowWidth: WindowWidth }>({
  windowWidth: "desktop",
});

export interface AdaptiveContextProps extends PropsWithChildren {}

export const AdaptiveContext: FC<AdaptiveContextProps> = (props) => {
  const window = useWindow();
  const [windowWidth, setWindowWidth] = useState<WindowWidth>(
    getWindowWidth(window?.innerWidth ?? 1920)
  );

  useEffect(() => {
    function handleResize() {
      if (window) {
        const windowWidthPx = window.innerWidth;
        const newWidth = getWindowWidth(windowWidthPx);
        setWindowWidth(newWidth);
      }
    }

    if (window) {
      setWindowWidth(getWindowWidth(window.innerWidth));
      window.addEventListener("resize", handleResize);

      return () => {
        if (window) {
          window.removeEventListener("resize", handleResize);
        }
      };
    }
  }, [window]);

  const value = useMemo(() => {
    return {
      windowWidth,
    };
  }, [windowWidth]);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useAdaptiveContext = () => {
  return useContext(Context);
};
