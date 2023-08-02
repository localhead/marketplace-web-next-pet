import { Typography } from "@packages/uiKit";
import Image from "next/image";
import styled from "styled-components";

export const StyledProductCard = styled.div``;

export const StyledPriceTitle = styled(Typography).attrs({
  size: 20,
  weight: 400,
  color: "dark",
})``;

export const StyledManufacturerTitle = styled(Typography).attrs({
  size: 14,
  weight: 400,
  color: "dark1",
})``;

export const StyledNameTitle = styled(Typography).attrs({
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
