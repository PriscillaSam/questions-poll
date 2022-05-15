import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  remove: () => void;
}

const StyledBadge = styled.div(
  ({ theme: { colors } }) => css`
    background: ${colors.darkGrey};
    color: ${colors.lightGrey};
    min-width: 100px;
    max-width: fit-content;
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
  `
);

const Button = styled.button(
  ({ theme: { colors } }) => css`
    background: transparent;
    border: none;
    color: ${colors.lightGreen};
    width: fit-content;
    cursor: pointer;
  `
);

export function Badge({ children, remove }: BadgeProps) {
  return (
    <StyledBadge>
      {children}
      <Button onClick={remove}>X</Button>
    </StyledBadge>
  );
}
