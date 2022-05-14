import styled, { css } from 'styled-components';
import { Heading } from 'components';
import { Question } from 'types';

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

const Date = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;

const Footer = styled.footer(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.sm};

    p {
      color: ${theme.colors.white};
    }
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
      <Date>{published_at}</Date>
      <Footer>
        <p>Choices: {choices.length}</p>
        {votes === 0 ? null : <p>Votes: {votes}</p>}
      </Footer>

      {/* eslint-disable-next-line jsx-a11y/anchor-has-content*/}
      <Link href={url} aria-labelledby={id} />
    </CardContainer>
  );
}

export default Card;
