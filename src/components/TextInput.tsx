import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input(
  ({ theme: { colors, borderRadius, spacing } }) => css`
    border: 1px solid ${colors.darkGrey};
    border-radius: ${borderRadius};
    min-width: 300px;
    padding: ${spacing.sm};
    background: transparent;
    color: ${colors.lightGrey};

    &:focus {
      outline: 2px solid ${colors.darkGrey};
    }
  `
);

const Label = styled.label(
  ({ theme: { colors, spacing } }) => css`
    display: block;
    margin-bottom: ${spacing.sm};
    color: ${colors.lightGrey};
  `
);

const Wrapper = styled.div(
  ({ theme: { spacing } }) => css`
    margin: ${spacing.md} 0;
  `
);

const Small = styled.small(
  ({ theme: { colors } }) => css`
    font-size: 0.875rem;
    display: block;
    color: ${colors.darkGrey};
  `
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  infoText?: string;
}

export function TextInput({ label, name, infoText, ...props }: InputProps) {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput id={name} name={name} {...props} />
      {infoText ? <Small>{infoText}</Small> : null}
    </Wrapper>
  );
}
