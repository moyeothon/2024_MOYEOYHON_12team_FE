import { createGlobalStyle } from 'styled-components';
import { Fonts } from "./Fonts";

const GlobalStyles = createGlobalStyle`
  ${Fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #686868;
    color: #333;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;