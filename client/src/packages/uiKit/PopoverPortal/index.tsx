import { FC, PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const PopoverPortal: FC<PropsWithChildren> = ({ children }) => {
  const [container] = useState(() => {
    const popoverContainer = document.createElement('div');
    popoverContainer.className = 'popover container';

    return document.createElement('div');
  });

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};
