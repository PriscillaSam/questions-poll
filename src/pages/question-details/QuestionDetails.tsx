import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Heading,
  Spinner,
  Button,
  FlexContainer,
  Text,
  Link,
} from 'components';
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

const Flex = styled(FlexContainer)(
  ({ theme: { breakpoints, spacing, colors } }) => css`
    padding: 0 ${spacing.sm};
    margin-bottom: ${spacing.sm};

    @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 0 ${spacing.lg};

      p {
        font-size: 1.5rem;
      }
    }
  `
);

const Error = styled(Text)`
  color: #de2727;
`;

const Success = styled(Text)`
  color: ${({ theme }) => theme.colors.lightGreen};
`;

function QuestionDetails() {
  const [selectedChoice, setSelectedChoice] = useState('');
  const { question, status, vote, votingStatus } = useQuestionDetails();
  const isLoading = status === 'fetching' || status === 'idle';

  if (isLoading) return <Spinner />;
  if (status === 'error')
    return (
      <Container>
        <Text>Ooops... Something went wrong</Text>
        <Link href="/">Go to questions</Link>
      </Container>
    );
  if (!question.question) return null;

  return (
    <Wrapper>
      <Container>
        <Heading size="md" as="h3">
          Question
        </Heading>
        <Heading size="lg" as="h1">
          {question.question}
        </Heading>
      </Container>
      {votingStatus === 'error' ? (
        <Error>Ooops... something went wrong. Please try again</Error>
      ) : null}
      {votingStatus === 'success' ? (
        <Success>Your vote has been registered</Success>
      ) : null}
      <ChoiceList
        selectedChoice={selectedChoice}
        handleChange={(event) => setSelectedChoice(event.target.value)}
        question={question}
      />
      <Flex>
        <Text>Total votes: {question.votes}</Text>
        <Button disabled={!selectedChoice} onClick={() => vote(selectedChoice)}>
          {votingStatus === 'fetching' ? 'Voting...' : 'Vote'}
        </Button>
      </Flex>
    </Wrapper>
  );
}

export default QuestionDetails;
