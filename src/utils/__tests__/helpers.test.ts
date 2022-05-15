import { Question } from 'types';
import { formatQuestion, questions, formatDate } from 'utils';

describe('formatQuestion', () => {
  it('should return the questions with the correct number of votes', () => {
    expect(formatQuestion(questions[0] as Question).votes).toBe(3840);
    expect(formatQuestion(questions[2] as Question).votes).toBe(7);
  });
});

describe('formatDate', () => {
  it('should return the date in the correct format', () => {
    expect(formatDate('2020-04-29T12:00:00.000Z')).toBe('29/4/2020');
  });
});
