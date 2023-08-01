import { Typography } from "@packages/uiKit";
import Image from "next/image";
import styled from "styled-components";

export const StyledProductCard = styled.div``;

export const StyledTitle = styled(Typography).attrs({
  size: 16,
  weight: 500,
  color: "dark",
})``;

export const StyledImage = styled(Image).attrs({ width: 350, height: 350 })`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
