import { media } from "@features/adaptive/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image).attrs({ width: 720, height: 365 })`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  max-height: 280px;
  ${media.down("desktop")} {
    max-height: 500px;
  }

  ${media.down("tablet")} {
    max-height: 220px;
  }
`;
