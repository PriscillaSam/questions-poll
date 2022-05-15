import { Fragment } from 'react';
import {
  Heading,
  FlexContainer,
  GridContainer,
  Spinner,
  Link,
} from 'components';
import { useQuestions } from 'hooks';
import { Question } from 'types';
import QuestionCard from './Card';

export function Questions() {
  const { status, questions } = useQuestions();

  return (
    <Fragment>
      <FlexContainer>
        <Heading size="lg" tag="h1">
          Questions Poll
        </Heading>
        <Link to="/questions/new">Create a new question</Link>
      </FlexContainer>

      {status === 'fetching' ? (
        <Spinner />
      ) : (
        <QuestionsList questions={questions} />
      )}
    </Fragment>
  );
}

function QuestionsList({ questions }: { questions: Question[] }) {
  return (
    <GridContainer>
      {questions.map((question, idx) => (
        <QuestionCard key={idx} question={question} />
      ))}
    </GridContainer>
  );
}
