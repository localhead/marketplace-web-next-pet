import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { colors, zIndexes } from "@packages/uiKit";
import styled from "styled-components";

export const StyledHeader = styled.div<{}>`
  position: relative;
  //background-color: ${colors.white};
`;

export const StyledHeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const StyledTopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const StyledBottomContainer = styled.div`
  padding: 30px 0px 25px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledProductsNavigationLinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.modalOverlay};
`;
export const StyledHeaderWrapper = styled.div``;
