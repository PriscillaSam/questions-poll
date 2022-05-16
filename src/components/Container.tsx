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
      padding: ${spacing.md} ${spacing.lg};
    }
  `
);

export function Container({ children, className }: ContainerProps) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(250px, 1fr);
  grid-gap: ${({ theme: { spacing } }) => spacing.sm};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
  }
`;
