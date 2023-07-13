import { StyledInput as InnerStyledInput } from "@packages/uiKit/Input/styles";
import { InputNumber } from "@packages/uiKit/InputNumber";
import { colors } from "@packages/uiKit/utils";
import styled from "styled-components";

export const StyledInput = styled(InputNumber)`
  width: 100%;
  border: none;
  font-size: 14px;
  line-height: 120%;
  padding: 0;

  ${InnerStyledInput} {
    margin: 0px;
  }
  :focus {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: ${colors.gray3};
  }
`;
