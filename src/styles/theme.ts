import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '10px',
  colors: {
    primary: '#0D1117',
    secondary: '#30713E',
    lightGreen: '#3CC15A',
    white: '#FFFFFF',
    grey: '#868686',
    lightGrey: '#E5E5E5',
    darkGrey: '#21262D',
  },
  fonts: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.5rem',
  },
  spacing: {
    sm: '1em',
    md: '2rem',
    lg: '5rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};
