import { useEffect, useState } from "react";

export const useWindow = () => {
  const [windowState, setWindowState] = useState<Window | null>(null);

  useEffect(() => {
    setWindowState(typeof window !== undefined ? window : null);
  }, []);

  return windowState;
};
