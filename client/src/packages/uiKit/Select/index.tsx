import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import useOutsideClick from "../utils/useOutsideClick";
import {
  DropdownItem,
  StyledButton,
  StyledCaretDownIcon,
  StyledCloseIcon,
  StyledDropdown,
  StyledIconContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledLeftContainer,
  StyledPlaceholder,
  StyledSelectContainer,
} from "./styles";
import { SelectOption, SelectSize, SelectValue, SelectVariant } from "./types";

export type SelectProps<ValueType extends SelectValue> = {
  options: SelectOption<ValueType>[];
  value?: ValueType | null;
  placeholder?: string;
  variant?: SelectVariant;
  size?: SelectSize;

  left?: ReactNode;
  disabled?: boolean;
  tabIndex?: number;

  disableCaret?: boolean;

  className?: string;
  styles?: React.CSSProperties;
} & (
  | {
      cleanable?: false;
      onChange?: (value: ValueType) => void;
    }
  | { cleanable: true; onChange?: (value: ValueType | null) => void }
);

const _Select = <ValueType extends SelectValue = SelectValue>(
  props: SelectProps<ValueType>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const {
    options,
    disableCaret = false,
    value,
    left,
    onChange,
    placeholder,
    variant = "filled",
    size = "medium",
    cleanable,
    disabled,
    ...restProps
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const isValueSelected = value !== null && value !== undefined;

  const selectedOption = useMemo(() => {
    return value !== undefined
      ? options.find((opt) => opt.value === value)
      : undefined;
  }, [options, value]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onButtonClickHandler = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const closeClickHandler = cleanable
    ? () => {
        onChange?.(null);
      }
    : undefined;

  const selectRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick([selectRef, dropdownRef], handleClose, isVisible);

  return (
    <StyledSelectContainer
      ref={ref}
      {...restProps}
      $variant={variant}
      $size={size}
    >
      <StyledButton
        ref={selectRef}
        onClick={onButtonClickHandler}
        disabled={disabled}
        type="button"
      >
        {left && <StyledLeftContainer>{left}</StyledLeftContainer>}
        {selectedOption ? (
          <StyledLabel>{selectedOption.label}</StyledLabel>
        ) : (
          <StyledPlaceholder>{placeholder}</StyledPlaceholder>
        )}
        {cleanable ? (
          !isValueSelected ? (
            !disableCaret && <StyledCaretDownIcon $isVisible={isVisible} />
          ) : (
            <StyledCloseIcon onClick={closeClickHandler} />
          )
        ) : (
          !disableCaret && <StyledCaretDownIcon $isVisible={isVisible} />
        )}
      </StyledButton>

      <StyledDropdown ref={dropdownRef} $isVisible={isVisible}>
        {options.length > 0
          ? options.map((option) => {
              const isSelected = selectedOption
                ? selectedOption.value === option.value
                : false;
              const onClickHandler =
                onChange && !isSelected
                  ? () => {
                      onChange(option.value);
                      setIsVisible(false);
                    }
                  : undefined;
              return (
                <DropdownItem
                  key={option.value}
                  $isSelected={isSelected}
                  onClick={onClickHandler}
                >
                  {option.icon && (
                    <StyledIconContainer>{option.icon}</StyledIconContainer>
                  )}
                  <StyledLabelContainer>{option.label}</StyledLabelContainer>
                </DropdownItem>
              );
            })
          : "Нет опций"}
      </StyledDropdown>
    </StyledSelectContainer>
  );
};

const SelectMemo = forwardRef(_Select);
SelectMemo.displayName = "Select";

export const Select = SelectMemo as typeof _Select;
