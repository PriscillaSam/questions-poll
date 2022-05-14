import { Question } from 'types';
import { formatQuestion, questions } from 'utils';

test('should return the questions with the correct number of votes', () => {
  expect(formatQuestion(questions[0] as Question).votes).toBe(3840);
  expect(formatQuestion(questions[2] as Question).votes).toBe(7);
});
