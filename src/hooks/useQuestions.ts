import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { actions } from 'store/questions';
import { useFetch } from 'hooks';
import { Question } from 'types';

export function useQuestions() {
	const [status, fetch] = useFetch();
	const { questions } = useSelector((state) => state.questions);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(
			{
				url: 'questions',
			},
			(questions: Question[]) => dispatch(actions.setQuestions(questions))
		);
	}, [fetch, dispatch]);

	return { status, questions };
}
