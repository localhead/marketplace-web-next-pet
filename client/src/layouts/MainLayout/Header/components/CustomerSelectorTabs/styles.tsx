import { colors } from "@packages/uiKit";
import styled, { css } from "styled-components";

export const StyledCustomerSelectorTabs = styled.div`
  display: flex;
  gap: 25px;
`;

export const StyledCustomerSelectorTabItem = styled.div<{
  $isSelected: boolean;
}>`
  font-weight: 400;
  cursor: pointer;

  padding-bottom: 5px;

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          color: ${colors.dark};
          border-bottom: 2px solid ${colors.dark};
        `
      : css`
          color: ${colors.gray1};
        `}
`;
