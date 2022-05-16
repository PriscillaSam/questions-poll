import styled, { css } from 'styled-components';
import { Heading, Text } from 'components';
import { Question } from 'types';
import { formatDate } from 'utils';

interface CardProps {
  question: Question;
}

const CardContainer = styled.article(
  ({ theme }) => css`
    background-color: ${theme.colors.darkGrey};
    border-radius: ${theme.borderRadius};
    position: relative;
    padding: 1em;
  `
);

const Date = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.grey};
    font-weight: 600;
    margin: 0.5em 0 ${theme.spacing.sm};
  `
);

const Footer = styled.footer(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.sm};
  `
);

const Link = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

function Card(props: CardProps) {
  const { question, published_at, votes, choices, url, id } = props.question;

  return (
    <CardContainer>
      <Heading tag="h3" size="md" id={id}>
        {question}
      </Heading>
      <Date>{formatDate(published_at)}</Date>
      <Footer>
        <Text>Choices: {choices.length}</Text>
        {votes === 0 ? null : <Text>Votes: {votes}</Text>}
      </Footer>

      {/* eslint-disable-next-line jsx-a11y/anchor-has-content*/}
      <Link href={url} aria-labelledby={id} />
    </CardContainer>
  );
}

export default Card;
