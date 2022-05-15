import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Container, Heading, Spinner, Button } from 'components';
import { useQuestionDetails } from 'hooks';
import { ChoiceList } from './components';

const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 70%;
  }
`;

const FlexContainer = styled.div(
  ({ theme: { breakpoints, spacing, colors } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${spacing.sm};
    margin-bottom: ${spacing.sm};

    p {
      color: ${colors.lightGrey};
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 0 ${spacing.lg};

      p {
        font-size: 1.5rem;
      }
    }
  `
);

function QuestionDetails() {
  const [selectedChoice, setSelectedChoice] = useState('');
  const { question, status, vote, votingStatus } = useQuestionDetails();
  const isLoading = status === 'fetching' || status === 'idle';

  if (isLoading) return <Spinner />;
  if (status === 'error') return <Container>Error</Container>;
  if (!question.question) return null;

  return (
    <Wrapper>
      <Container>
        <Heading size="md" tag="h3">
          Question
        </Heading>
        <Heading size="lg" tag="h1">
          {question.question}
        </Heading>
      </Container>
      <ChoiceList
        selectedChoice={selectedChoice}
        handleChange={(event) => setSelectedChoice(event.target.value)}
        question={question}
      />
      <FlexContainer>
        <p>Total votes: {question.votes}</p>
        <Button disabled={!selectedChoice} onClick={() => vote(selectedChoice)}>
          {votingStatus === 'fetching' ? 'Voting...' : 'Vote'}
        </Button>
      </FlexContainer>
    </Wrapper>
  );
}

export default QuestionDetails;
