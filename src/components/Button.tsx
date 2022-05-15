import styled, { css } from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })(
  ({ theme: { spacing, colors, breakpoints } }) => css`
    background: ${colors.secondary};
    border: none;
    padding: ${spacing.sm};
    color: ${colors.white};
    width: 100px;
    font-weight: 500;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
    }

    @media screen and (min-width: ${breakpoints.mobile}) {
      width: 200px;
      font-size: 1.15rem;
    }
  `
);
