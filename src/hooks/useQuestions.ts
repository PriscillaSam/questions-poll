import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { actions } from 'store/questions';
import { useFetch } from 'hooks';
import { Question } from 'types';
import { formatQuestions } from 'utils';

export function useQuestions() {
  const dispatch = useDispatch();
  const { api: fetch, data, status } = useFetch<Question[]>();
  const { questions } = useSelector((state) => state.questions);

  useEffect(() => {
    fetch({
      url: 'questions',
    });
  }, [fetch, dispatch]);

  useEffect(() => {
    if (data) {
      const questionsWithVotes = formatQuestions(data);
      dispatch(actions.setQuestions(questionsWithVotes));
    }
  }, [data, dispatch]);

  return { status, questions };
}
