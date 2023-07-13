import { ReactElement } from 'react';
import { ControllerProps, FieldValues, Path } from 'react-hook-form';

export type FieldAdapterProps<
  FieldProps extends {},
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> &
  Omit<
    FieldProps,
    'defaultValue' | 'value' | 'onChange' | 'onBlur' | 'error' | 'name'
  >;

export type FieldAdapterFCComponent<FieldProps extends {}> = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>(
  props: FieldAdapterProps<FieldProps, TFieldValues, TName>,
) => ReactElement<any, any> | null;
