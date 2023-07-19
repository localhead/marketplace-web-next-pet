import { colors } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledCustomerSelectorTabs = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledCustomerSelectorTabItem = styled.div<{
  $isSelected: boolean;
}>`
  font-weight: 400;
  cursor: pointer;

  padding-bottom: 5px;
  transition: 0.5s ease;

  border-radius: 5px;
  padding-bottom: 10px;

  border-bottom: 2px solid transparent;

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          color: ${colors.dark};
          border-radius: 5px 5px 0 0;
          border-bottom: 2px solid ${colors.dark};
          :hover {
            background-color: transparent;
          }
        `
      : css`
          color: ${colors.gray1};
        `}
`;
