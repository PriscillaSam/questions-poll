import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Question } from 'types';
import ChoiceCard from './ChoiceCard';

interface ChoiceListProps {
  question: Question;
  selectedChoice: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const List = styled.ul(
  ({ theme: { spacing, breakpoints } }) => css`
    padding: 0;
    margin-top: ${spacing.sm};

    @media screen and (min-width: ${breakpoints.tablet}) {
      margin: 0 ${spacing.lg};
    }
  `
);

export function ChoiceList({
  selectedChoice,
  handleChange,
  question: { choices, id },
}: ChoiceListProps) {
  return (
    <List>
      {choices.map((choice) => (
        <ChoiceCard
          key={choice.url}
          choice={choice}
          question={id}
          selected={selectedChoice === choice.url}
          handleChange={handleChange}
        />
      ))}
    </List>
  );
}
