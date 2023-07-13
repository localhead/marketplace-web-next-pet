import { colors } from "../utils";

import styled from "styled-components";

export const StyledTag = styled.div`
  padding: 5px 25px;
  width: fit-content;
  height: fit-content;

  border-radius: 24px;
  display: inline;
  line-height: 120%;
  font-size: 14px;
  color: ${colors.dark};
  background-color: ${colors.white};
`;
