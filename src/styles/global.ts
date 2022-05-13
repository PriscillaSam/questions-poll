import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.primary};
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  p, h1, h2, h3, h4 {
    overflow-wrap: break-word;
  }
`;
