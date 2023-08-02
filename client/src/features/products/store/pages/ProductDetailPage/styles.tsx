import { Typography } from "@packages/uiKit/Typography";
import Image from "next/image";
import styled from "styled-components";

export const StyledProductDetailPage = styled.div``;

export const StyledNameTitle = styled(Typography).attrs({
  size: 16,
  weight: 500,
  color: "dark",
})``;

export const StyledImage = styled(Image).attrs({ width: 350, height: 350 })`
  height: 350px;
  width: 250px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
