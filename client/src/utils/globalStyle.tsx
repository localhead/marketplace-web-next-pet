import "antd-grid-layout/styles/antd-grid-layout.css";
import "antd/lib/style/default.css";

import localFont from "next/font/local";

export const onestFont = localFont({
  src: [
    {
      path: "../../public/assets/fonts/onest/OnestLight1602-hint.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/onest/OnestRegular1602-hint.woff",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/assets/fonts/onest/OnestMedium1602-hint.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/onest/OnestBold1602-hint.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`

  body {
    line-height: 1.2 !important;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${colors.gray1};
    border-radius: 3px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.gray1};
  }


  //Normalize
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  html {
      height: 100%;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
`;
