import styled from "styled-components";
import { colors, zIndexes } from "../utils";

export const StyledRange = styled.div`
  height: 17px;

  .react-slider__track {
    height: 3px;
    background-color: ${colors.gray1};
    border-radius: 14px;
    top: 7px;
    cursor: pointer;
  }

  .react-slider__track-0 {
    background: ${colors.primary};
  }

  .react-slider__thumb {
    width: 17px; /* Set a specific slider handle width */
    height: 17px; /* Slider handle height */
    background: ${colors.white}; /* Green background */
    border-radius: 100%;
    border: 7px solid ${colors.primary};
    cursor: pointer; /* Cursor on hover */
    z-index: ${zIndexes.defaultTop};
    outline: none;
  }
`;
