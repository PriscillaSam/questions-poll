import styled, { css } from 'styled-components';

export const Text = styled.p(
  ({ theme: { colors } }) => css`
    color: ${colors.lightGrey};
  `
);
