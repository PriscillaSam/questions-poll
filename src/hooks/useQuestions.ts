import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { actions } from 'store/questions';
import { useFetch } from 'hooks';
import { Question } from 'types';
import { formatQuestions } from 'utils';

export function useQuestions() {
	const [status, fetch] = useFetch();
	const dispatch = useDispatch();
	const { questions } = useSelector((state) => state.questions);

	useEffect(() => {
		fetch(
			{
				url: 'questions',
			},
			(response: Question[]) => {
				const questionsWithVotes = formatQuestions(response);
				dispatch(actions.setQuestions(questionsWithVotes));
			}
		);
	}, [fetch, dispatch]);

	return { status, questions };
}
