import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const StyledRadio = styled.div(
  ({ theme: { spacing, colors, breakpoints } }) => css`
    display: inline-block;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.lightGreen};
    transition: all 150ms;
    margin-right: ${spacing.sm};

    @media screen and (min-width: ${breakpoints.mobile}) {
      width: 35px;
      height: 35px;
      margin-right: ${spacing.md};
    }
  `
);

const RadioButtonContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })(
  ({ theme }) => css`
    // Source: https://polished.js.org/docs/#hidevisually
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    overflow: hidden;
    margin: -1px;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;

    &:checked + ${StyledRadio} {
      border: 2px solid ${theme.colors.white};

      span {
        background-color: ${theme.colors.white};
        height: 10px;
        width: 10px;
      }
    }
  `
);

const Label = styled.label(
  ({ theme }) => css`
    color: ${theme.colors.lightGrey};
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (min-width: ${theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  `
);

interface CustomRadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function CustomRadioButton({
  id,
  value,
  checked,
  name,
  onChange,
  children,
}: CustomRadioButtonProps) {
  return (
    <Label htmlFor={id}>
      <RadioButtonContainer>
        <RadioButton
          value={value}
          checked={checked}
          id={id}
          name={name}
          onChange={onChange}
        />
        <StyledRadio>
          <span />
        </StyledRadio>
      </RadioButtonContainer>
      {children}
    </Label>
  );
}
