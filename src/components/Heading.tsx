import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Heading = styled.h1<HeadingProps>`
  font-size: ${({ size, theme }) => theme.fonts[size!]};
  color: ${({ theme }) => theme.colors.white};
`;
