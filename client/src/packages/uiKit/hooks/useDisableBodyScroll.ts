import { useEffect } from 'react';

export const useDisableBodyScroll = (disable?: boolean) => {
  useEffect(() => {
    if (disable ?? true) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [disable]);
};
