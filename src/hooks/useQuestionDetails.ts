import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'store';
import { actions } from 'store/question-details';
import { useFetch } from 'hooks';
import { Choice, Question } from 'types';
import { formatQuestion } from 'utils';

export function useQuestionDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { api: fetchQuestion, status } = useFetch<Question>();
  const { api: voteChoice, status: votingStatus } = useFetch<Choice>();

  const { question } = useSelector((state) => state.questionDetails);

  const vote = (choiceUrl: string) => {
    voteChoice(
      {
        url: `${choiceUrl.slice(1)}`,
        method: 'POST',
      },
      (choice) => dispatch(actions.voteChoice(choice.url))
    );
  };

  useEffect(() => {
    fetchQuestion(
      {
        url: `questions/${id}`,
      },
      (question) => dispatch(actions.setQuestion(formatQuestion(question)))
    );
  }, [id, fetchQuestion, dispatch]);

  return {
    status,
    question,
    vote,
    votingStatus,
  };
}
