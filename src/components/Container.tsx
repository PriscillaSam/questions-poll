import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const StyledContainer = styled.section(
  ({ theme: { breakpoints, spacing } }) => css`
    padding: ${spacing.sm};

    @media (min-width: ${breakpoints.tablet}) {
      padding: ${spacing.lg};
    }
  `
);

export function Container({ children, className }: ContainerProps) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${({ theme: { spacing } }) => spacing.sm};
`;
