import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit";
import Image from "next/image";
import styled from "styled-components";

export const StyledNotificationModal = styled.div``;

export const StyledModalNotificationContainer = styled.div`
  display: flex;

  ${media.down("tablet")} {
    flex-wrap: wrap;
  }
`;

export const StyledDescription = styled(Typography).attrs({
  size: 16,
  color: "gray18",
  weight: 400,
})`
  margin-bottom: 30px;
`;

export const StyledAdditionContainer = styled.div``;

export const StyledLeftContent = styled.div``;

export const StyledImage = styled(Image).attrs({ width: 133, height: 129 })`
  margin-left: 20px;
  ${media.down("tablet")} {
    display: none;
  }
`;
