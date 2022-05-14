import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Question } from 'types';
import ChoiceCard from './ChoiceCard';

interface ChoiceListProps {
  question: Question;
}

const List = styled.ul(
  ({ theme: { spacing, breakpoints } }) => css`
    padding: 0;
    margin-top: ${spacing.sm};

    @media screen and (min-width: ${breakpoints.mobile}) {
      margin: 0 ${spacing.lg};
    }
  `
);

export function ChoiceList({ question: { choices, id } }: ChoiceListProps) {
  const [selectedChoice, setSelectedChoice] = useState('');

  return (
    <List>
      {choices.map((choice) => (
        <ChoiceCard
          key={choice.url}
          choice={choice}
          question={id}
          selected={selectedChoice === choice.url}
          handleChange={(event) => setSelectedChoice(event.target.value)}
        />
      ))}
    </List>
  );
}
