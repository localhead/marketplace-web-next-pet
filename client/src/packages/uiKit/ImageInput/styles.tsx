import { colors } from '../utils';

import styled from 'styled-components';

export const StyledImageInput = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const StyledPlaceholder = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  border: 2px dashed ${colors.gray19};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
`;

export const StyledPlaceholderIconContainer = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${colors.gray7};
  color: ${colors.dark};
`;

export const StyledHiddenFileInput = styled.input`
  display: none;
`;

export const StyledDeleteIconButton = styled.button`
  padding: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: ${colors.white};
  font-size: 14px;
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  border: none;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
