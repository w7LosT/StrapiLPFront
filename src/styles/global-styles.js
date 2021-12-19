import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: yellow;
  }

  h1{
    ${({ theme }) => css`
      background-color: ${theme.default.mainBG};
      color: ${theme.default.mainColor};
    `};
  }
`;
