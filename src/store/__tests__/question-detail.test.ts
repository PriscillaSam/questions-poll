import reducer, { actions } from 'store/question-details';
import { Question } from 'types';
import { questions } from 'utils';

describe('questions reducer', () => {
  test('should return intial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      question: {},
    });
  });

  test('should add questions to the state', () => {
    expect(
      reducer(undefined, actions.setQuestion(questions[0] as Question))
    ).toEqual({
      question: questions[0],
    });
  });
});
