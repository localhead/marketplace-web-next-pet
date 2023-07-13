import { useMemo, useState } from "react";

export type ModalStateWithAddition<StateAddition extends object> =
  | ({ isOpen: false } & Partial<StateAddition>)
  | ({ isOpen: true } & StateAddition);

export type RealSA<StateAddition extends object | void> =
  StateAddition extends object ? StateAddition : {};

export const useModalState = <StateAddition extends object | void = void>() => {
  const [state, setState] = useState<
    ModalStateWithAddition<RealSA<StateAddition>>
  >({
    isOpen: false,
  });

  const actions = useMemo(() => {
    //@ts-ignore
    const openHandler: StateAddition extends void
      ? () => void
      : (addition: StateAddition) => void = (addition: StateAddition) => {
      //@ts-ignore
      setState({
        isOpen: true,
        ...addition,
      });
    };
    const closeHandler = () => {
      setState({
        isOpen: false,
      });
    };

    return {
      openHandler,
      closeHandler,
      setState,
    };
  }, []);

  return [state, actions] as const;
};
