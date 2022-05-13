import { Fragment } from 'react';
import { Heading, Container, GridContainer } from 'components';
import { useQuestions } from 'hooks';
import { Question } from 'types';

export function Questions() {
	const { status, questions } = useQuestions();

	return (
		<Fragment>
			<Container>
				<Heading size="lg" tag="h1">
					Questions Poll
				</Heading>
			</Container>

			{status === 'fetching' ? (
				<p>Loading...</p>
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
				<p key={idx}>{question.question}</p>
			))}
		</GridContainer>
	);
}
