import { CustomRadioButton } from 'components';
import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Choice } from 'types';

interface ChoiceCardProps {
  choice: Choice;
  selected: boolean;
  question: string;
  className?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Card = styled.li(
  ({ theme: { spacing, colors, breakpoints, borderRadius } }) => css`
    background-color: ${colors.darkGrey};
    margin-bottom: ${spacing.md};
    display: flex;
    flex-direction: column;
    padding: ${spacing.sm};

    @media screen and (min-width: ${breakpoints.mobile}) {
      border-radius: ${borderRadius};
      margin-bottom: ${spacing.md};
      padding: ${spacing.md};
      flex-direction: row;
      justify-content: space-between;
    }
  `
);

const Votes = styled.div(
  ({ theme: { spacing, colors, breakpoints } }) => css`
    display: flex;
    margin-top: 1em;
    color: ${colors.lightGrey};

    @media screen and (min-width: ${breakpoints.mobile}) {
      margin-top: unset;
    }
  `
);

export function ChoiceCard({
  selected,
  handleChange,
  question,
  className,
  ...props
}: ChoiceCardProps) {
  const { choice, votes, url } = props.choice;

  return (
    <Card className={className}>
      <CustomRadioButton
        id={url}
        value={url}
        checked={selected}
        name={question}
        onChange={handleChange}
      >
        {choice}
      </CustomRadioButton>

      <Votes>
        <span>Votes: {votes}</span>
      </Votes>
    </Card>
  );
}

const StyledCard = styled(ChoiceCard)(
  ({ selected, theme: { colors } }) => css`
    background-color: ${selected ? colors.secondary : colors.darkGrey};
  `
);

export default StyledCard;
