import reducer, { actions } from 'store/question-details';
import { Question } from 'types';
import { formatQuestion, questions } from 'utils';

const question = formatQuestion(questions[0] as Question);

describe('questions reducer', () => {
  it('should return intial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      question: {},
    });
  });

  it('should add question to the state', () => {
    expect(reducer(undefined, actions.setQuestion(question))).toEqual({
      question,
    });
  });

  it('should update the total votes on a question when a choice is voted', () => {
    expect(
      reducer({ question }, actions.voteChoice('/questions/1/choices/4'))
        .question.votes
    ).toEqual(question.votes! + 1);
  });

  it('should update the total votes on a choice', () => {
    expect(
      reducer({ question }, actions.voteChoice('/questions/1/choices/4'))
        .question.choices[3]!.votes
    ).toEqual(question.choices[3]!.votes + 1);
  });
});
