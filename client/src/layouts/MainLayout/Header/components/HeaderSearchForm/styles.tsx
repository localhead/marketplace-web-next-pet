import { MagnifyingGlassIcon } from "@packages/icons";
import { Input, colors } from "@packages/uiKit";
import Link from "next/link";
import styled from "styled-components";

export const StyledHeaderSearchForm = styled.div``;

export const StyledContainer = styled.div`
  display: flex;
  width: 350px;

  flex-direction: column;
  position: relative;
`;

export const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon)`
  cursor: pointer;
`;

export const StyledInputContainer = styled.div``;

export const StyledInputField = styled(Input)``;

export const StyledAutocompleteDropdown = styled.div`
  background-color: transparent;
  border: 1px solid ${colors.gray5};
  position: absolute;
  width: inherit;
  display: flex;
  gap: 5px;
  flex-direction: column;
  border-radius: 8px;
  top: 0;
  margin-top: 40px;
  padding: 5px 5px;
`;

export const StyledRowItem = styled.div`
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 10px;
  transition: 0.3s ease;
  border: none;
  text-align: left;
  background: none;
  :hover {
    background-color: ${colors.gray2};
  }
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.dark};

  :hover {
    color: ${colors.dark};
  }
`;
