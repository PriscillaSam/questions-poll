import { formatQuestions, questions } from 'utils';

test('should return the questions with the correct number of votes', () => {
  const questionsWithVotes = formatQuestions(questions);

  expect(questionsWithVotes[0].votes).toBe(3840);
  expect(questionsWithVotes[2].votes).toBe(7);
});
