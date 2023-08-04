import localFont from "@next/font/local";
import { colors } from "@packages/uiKit";

import "antd/dist/antd.min.css";

export const onestFont = localFont({
  preload: true,

  src: [
    {
      path: "../../public/fonts/onest/OnestLight1602-hint.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/onest/OnestRegular1602-hint.woff",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/fonts/onest/OnestMedium1602-hint.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/onest/OnestBold1602-hint.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 @font-face {
  font-family: "Onest";
  src: url('/fonts/onest/OnestLight1602-hint.woff') format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: fallback;
}
  
@font-face {
  font-family: "Onest";
  src: url('/fonts/onest/OnestRegular1602-hint.woff') format("woff");
  font-weight: 400;
  font-style: regular;
  font-display: fallback;
}
  
@font-face {
  font-family: "Onest";
  src: url('/fonts/onest/OnestMedium1602-hint.woff') format("woff");
  font-weight: 500;
  font-style: medium;
  font-display: fallback;
}

@font-face {
  font-family: "Onest";
  src: url('/fonts/onest/OnestBold1602-hint.woff') format("woff");
  font-weight: 700;
  font-style: bold;
  font-display: fallback;
} 




  body {
    line-height: 1.2 !important;
    font-family: 'Onest' , sans-serif !important;
  }

  body::-webkit-scrollbar {
    width: 16px;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
  }

  body::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: ${colors.dark};

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
