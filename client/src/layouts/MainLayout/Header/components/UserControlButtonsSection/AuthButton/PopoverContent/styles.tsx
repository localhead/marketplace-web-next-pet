import { Typography, colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledPopoverContent = styled.div`
  width: 150px;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 18,
  weight: 500,
  color: "dark",
})`
  border-bottom: 1px solid ${colors.gray3};
  padding-bottom: 7px;
`;
