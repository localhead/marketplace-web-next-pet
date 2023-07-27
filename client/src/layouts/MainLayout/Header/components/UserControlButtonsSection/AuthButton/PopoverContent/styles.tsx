import { CloseIcon } from "@packages/icons";
import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledPopoverContent = styled.div`
  width: 210px;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 18,
  weight: 500,
  color: "dark",
})``;

export const TopContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray3};
  padding-bottom: 9px;
`;

export const MiddleContentContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.gray3};
`;

export const BottomContentContainer = styled.div`
  padding-top: 10px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

export const CustomButton = styled.div`
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 0px 5px 5px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${colors.gray2};
  }
`;
