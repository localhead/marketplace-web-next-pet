import { LetterItem } from './LetterItem';
import { StyledLetterListContainer, StyledLetterSelect } from './styles';

import React, { FC, memo } from 'react';

export interface LetterSelectProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

const ruLetters = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я',
];

const engLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const _LetterSelect: FC<LetterSelectProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const createChangeHandler = (value: string | null) => {
    if (onChange) {
      return () => {
        onChange(value);
      };
    }
  };

  return (
    <StyledLetterSelect {...restProps}>
      <StyledLetterListContainer>
        <LetterItem
          isActive={value === undefined || value === null}
          onClick={createChangeHandler(null)}>
          Все
        </LetterItem>

        {engLetters.map((letter) => {
          const isActive = Boolean(value) && value === letter;
          return (
            <LetterItem
              key={letter}
              isActive={isActive}
              onClick={createChangeHandler(letter)}>
              {letter}
            </LetterItem>
          );
        })}
      </StyledLetterListContainer>
      <StyledLetterListContainer>
        {ruLetters.map((letter) => {
          const isActive = Boolean(value) && value === letter;
          return (
            <LetterItem
              key={letter}
              isActive={isActive}
              onClick={createChangeHandler(letter)}>
              {letter}
            </LetterItem>
          );
        })}
      </StyledLetterListContainer>
    </StyledLetterSelect>
  );
};

export const LetterSelect = memo(_LetterSelect);
