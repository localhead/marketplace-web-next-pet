import { StyledTextArea } from './TextArea.styles';

import React, { useEffect, useImperativeHandle, useMemo } from 'react';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange?: (value: string) => void;

  isResizable?: boolean;
  isAutosize?: boolean;
  error?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      isResizable = false,
      isAutosize,
      error = false,
      ...restProps
    } = props;

    const onChangeHandler:
      | React.ChangeEventHandler<HTMLTextAreaElement>
      | undefined = useMemo(() => {
      return onChange
        ? (event) => {
            onChange(event.target.value);
          }
        : undefined;
    }, [onChange]);

    const innerRef = React.useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    useEffect(() => {
      if (isAutosize && innerRef.current) {
        innerRef.current.style.height = '0px';
        const scrollHeight = innerRef.current.scrollHeight;

        const newHeight = Math.max(scrollHeight + 1, 40);

        innerRef.current.style.height = newHeight + 'px';
      }
    }, [props.value, isAutosize]);

    return (
      <StyledTextArea
        ref={innerRef}
        value={value || ''}
        onChange={onChangeHandler}
        isResizable={isResizable}
        error={error}
        {...restProps}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
