import { EyeIcon, EyeSlashIcon } from "@packages/icons";
import { colors } from "@packages/uiKit/utils";
import styled from "styled-components";

export const StyledIconButton = styled.div`
  cursor: pointer;
`;

export const StyledEyeSlashIcon = styled(EyeSlashIcon)`
  color: ${colors.gray14};
`;

export const StyledEyeIcon = styled(EyeIcon)`
  color: ${colors.gray14};
`;
