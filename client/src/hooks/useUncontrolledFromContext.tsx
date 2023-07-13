import { UseUncontrolledFormReturn } from "@hooks/useUncontrolledForm";
import React, { PropsWithChildren, useContext } from "react";
import { FieldValues } from "react-hook-form";

const UncontrolledFormContext = React.createContext<UseUncontrolledFormReturn>(
  null as unknown as UseUncontrolledFormReturn
);

const _UncontrolledFormProvider = <IFormValues extends FieldValues>(
  props: PropsWithChildren<UseUncontrolledFormReturn<IFormValues>>
) => {
  const { children, ...restProps } = props;

  return (
    //@ts-ignore
    <UncontrolledFormContext.Provider value={restProps}>
      {children}
    </UncontrolledFormContext.Provider>
  );
};

export const UncontrolledFormProvider = React.memo(
  _UncontrolledFormProvider
) as typeof _UncontrolledFormProvider;

export const useUncontrolledFormContext = <
  IFormValues extends FieldValues
>() => {
  const form = useContext<UseUncontrolledFormReturn<IFormValues>>(
    //@ts-ignore
    UncontrolledFormContext
  );
  if (form === null) {
    throw new Error(
      "useUncontrolledFormContext error: can't find parent provider"
    );
  }

  return form;
};
