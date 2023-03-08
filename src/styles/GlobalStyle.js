import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.4;
    font-family: 'Share Tech', sans-serif;
  }
`;

export default GlobalStyle;