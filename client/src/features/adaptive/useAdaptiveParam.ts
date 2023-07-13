import { useWindowWidth } from './useWindowWidth';

type UseAdaptiveParamOptions<T> = {
  desktop: T;
  tablet?: T;
  mobile?: T;
};

export const useAdaptiveParam = <T>(options: UseAdaptiveParamOptions<T>) => {
  const width = useWindowWidth();

  if (width === 'desktop') {
    return options.desktop;
  }

  if (width === 'tablet') {
    return options.tablet ?? options.desktop;
  }

  return options.mobile ?? options.tablet ?? options.desktop;
};
