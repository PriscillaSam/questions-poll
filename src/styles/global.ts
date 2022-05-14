import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.primary};
    font-family: 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  p, h1, h2, h3, h4 {
    overflow-wrap: break-word;
  }
`;
