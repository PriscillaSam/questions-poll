import { Heading } from 'components';
import { useQuestions } from 'hooks';

export function Questions() {
	const { questions } = useQuestions();

	return (
		<div>
			<Heading size="lg" tag="h1">
				Questions Poll
			</Heading>

			{questions.map((question) => (
				<p>{question.question}</p>
			))}
		</div>
	);
}
