import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { actions } from 'store/questions';
import { useFetch } from 'hooks';
import { Question } from 'types';
import { formatQuestion } from 'utils';

export function useQuestions() {
  const dispatch = useDispatch();
  const { api: fetch, status } = useFetch<Question[]>();
  const { questions } = useSelector((state) => state.questions);

  useEffect(() => {
    fetch(
      {
        url: 'questions',
      },
      (questions) => {
        const questionsWithVotes = questions.map((question) =>
          formatQuestion(question)
        );
        dispatch(actions.setQuestions(questionsWithVotes));
      }
    );
  }, [fetch, dispatch]);

  return { status, questions };
}
