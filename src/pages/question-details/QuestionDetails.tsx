import { Container, Heading, Spinner } from 'components';
import { useQuestionDetails } from 'hooks';
import { Fragment } from 'react';
import { ChoiceList } from './components';

function QuestionDetails() {
  const { question, status } = useQuestionDetails();
  const isLoading = status === 'fetching' || status === 'idle';

  if (isLoading) return <Spinner />;
  if (status === 'error') return <Container>Error</Container>;
  if (!question.question) return null;

  return (
    <Fragment>
      <Container>
        <Heading size="md" tag="h3">
          Question
        </Heading>
        <Heading size="lg" tag="h1">
          {question.question}
        </Heading>
      </Container>
      <ChoiceList question={question} />

      <p>Total votes: {question.votes}</p>
    </Fragment>
  );
}

export default QuestionDetails;
