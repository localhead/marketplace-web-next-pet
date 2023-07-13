import { colors } from "@packages/uiKit";
import styled from "styled-components";

export const StyledDangerouslySetInnerHTMLContent = styled.div`
  min-width: 0;
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.dark};
  }

  hr {
    border: 1px solid ${colors.gray11};
    margin-top: 15px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 19px;
    color: ${colors.dark};
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  li {
    margin: 22px 0px 18px 0px;
    padding-left: 25px;
    font-weight: 500;
    font-size: 16px;
    color: ${colors.dark};
  }

  ul {
    position: relative;
    margin-top: 25px;
  }

  ol {
    counter-reset: list;
  }

  ol > li {
    list-style: none;
  }

  ol > li:before {
    content: counter(list, decimal) ") ";
    counter-increment: list;
  }

  li::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    margin-top: 3px;
    background-color: ${colors.primary};
  }

  img {
    max-width: 100%;
    min-width: 0;
    width: 100%;
    height: 270px;
    border-radius: 18px;
    object-fit: cover;
    margin: 40px 0px 40px 0px;
  }
`;
