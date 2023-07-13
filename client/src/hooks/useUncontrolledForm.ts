import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FieldValues,
  FormState,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";

export type UseUncontrolledFormSubmitCb<
  IFormValues extends FieldValues,
  IFormSuccessValues
> = (
  data: IFormSuccessValues,
  formState: FormState<IFormValues>
) => void | Promise<void>;

export type UseUncontrolledFormParams<
  IFormValues extends FieldValues,
  IFormSuccessValues,
  IContext = any
> = {
  onSubmit: UseUncontrolledFormSubmitCb<IFormValues, IFormSuccessValues>;
} & UseFormProps<IFormValues, IContext>;

export const useUncontrolledForm = <
  IFormValues extends FieldValues,
  IFormSuccessValues = IFormValues,
  IContext = any
>(
  params: UseUncontrolledFormParams<IFormValues, IFormSuccessValues, IContext>
) => {
  const { onSubmit, ...restFormParams } = params;

  const {
    handleSubmit: rhfHandleSubmit,
    reset,
    ...restForm
  } = useForm<IFormValues>({
    ...restFormParams,
  });

  const formStateRef = useRef<FormState<IFormValues>>(restForm.formState);
  useEffect(() => {
    formStateRef.current = {
      ...restForm.formState,
      dirtyFields: restForm.formState.dirtyFields,
    };
  }, [restForm.formState]);

  const [formError, setFormError] = useState<null | string>(null);

  const handleSubmit = useMemo(() => {
    return () => {
      const prevSubmitFormState = formStateRef.current;
      return rhfHandleSubmit(async (data) => {
        setFormError(null);
        try {
          await onSubmit(
            data as unknown as IFormSuccessValues,
            prevSubmitFormState
          );
        } catch (error) {
          console.error("form submit with error:", error);
          if (error instanceof Error) {
            setFormError(error.message);
          } else {
            setFormError("Unknown error");
          }
        }
      })();
    };
  }, [onSubmit, rhfHandleSubmit]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return {
    ...restForm,
    reset,
    handleSubmit,
    handleReset,
    formError,
  };
};

export type UseUncontrolledFormReturn<
  IFormValues extends FieldValues = FieldValues
> = Omit<UseFormReturn<IFormValues>, "handleSubmit"> & {
  handleSubmit: () => Promise<any>;
  handleReset: () => void;
  formError: null | string;
};
