import { createContext } from "react";

export type LetterItemContextItem = {
  letterItemRef: HTMLElement | undefined | null;
};

export const LetterItemContext = createContext<LetterItemContextItem>({
  letterItemRef: null,
});
