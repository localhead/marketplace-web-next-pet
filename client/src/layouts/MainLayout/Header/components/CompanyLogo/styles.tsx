import Image from "next/image";
import styled from "styled-components";

export const StyledCompanyLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImage = styled(Image).attrs({
  width: 400,
  height: 100,
})`
  width: 170px;
  height: auto;
  cursor: pointer;
`;
