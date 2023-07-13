import { Field } from "@packages/uiKit/Field";
import { Range } from "@packages/uiKit/Range";
import { Typography } from "@packages/uiKit/Typography";
import styled from "styled-components";

export const StyledRangeField = styled(Field)`
  position: relative;
`;

export const StyledRange = styled(Range)`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: -9px;
`;

export const StyledValueLabel = styled(Typography).attrs({
  size: 18,
  color: "dark4",
})``;
