import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'store';
import { actions } from 'store/question-details';
import { useFetch } from 'hooks';
import { Question } from 'types';
import { formatQuestion } from 'utils';

export function useQuestionDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { api: fetch, data, status } = useFetch<Question>();
  const { question } = useSelector((state) => state.questionDetails);

  useEffect(() => {
    fetch({
      url: `questions/${id}`,
    });
  }, [id, fetch]);

  useEffect(() => {
    if (data) {
      dispatch(actions.setQuestion(formatQuestion(data)));
    }
  }, [data, dispatch]);

  return {
    status,
    question,
  };
}
