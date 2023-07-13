"use client";
import { ApiImageUrl } from "@features/api";
import { CameraIcon, TrashIcon } from "@packages/icons";
import React, { FC, memo, useCallback, useMemo, useRef } from "react";
import {
  StyledDeleteIconButton,
  StyledHiddenFileInput,
  StyledImage,
  StyledImageInput,
  StyledPlaceholder,
  StyledPlaceholderIconContainer,
} from "./styles";

export interface ImageInputProps {
  className?: string;
  style?: React.CSSProperties;

  value: File | ApiImageUrl | null;
  onChange: (value: File | null) => void;
}

const _ImageInput: FC<ImageInputProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const displayedUrl = useMemo(() => {
    if (value instanceof File) {
      return URL.createObjectURL(value);
    }

    return value;
  }, [value]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const buttonClickHandler = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        if (event.currentTarget.files) {
          const fileUploaded = event.currentTarget.files[0];
          onChange(fileUploaded);
        }
      },
      [onChange]
    );

  const deleteHandler = useCallback(() => {
    onChange(null);
  }, [onChange]);

  return (
    <StyledImageInput {...restProps}>
      {displayedUrl ? (
        <>
          <StyledDeleteIconButton onClick={deleteHandler}>
            <TrashIcon />
          </StyledDeleteIconButton>
          <StyledImage src={displayedUrl} />
        </>
      ) : (
        <StyledPlaceholder onClick={buttonClickHandler}>
          <StyledPlaceholderIconContainer>
            <CameraIcon size={20} />
          </StyledPlaceholderIconContainer>
        </StyledPlaceholder>
      )}
      <StyledHiddenFileInput
        ref={inputRef}
        type={"file"}
        onChange={inputChangeHandler}
      />
    </StyledImageInput>
  );
};

export const ImageInput = memo(_ImageInput);
