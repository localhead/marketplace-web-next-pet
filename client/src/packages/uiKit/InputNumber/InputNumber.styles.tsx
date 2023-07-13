import { Input } from "../Input";

import { StyledInput } from "../Input/styles";

import styled from "styled-components";

export const StyledInputNumber = styled(Input)`
  /*Hide arrows */

  ${StyledInput} {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    -moz-appearance: textfield; /* Firefox */
  }
`;
