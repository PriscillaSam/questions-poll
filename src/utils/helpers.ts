import { Question } from 'types';
import { nanoid } from '@reduxjs/toolkit';

/**
 * @description - This function aggregrates the votes of the choices of a question
 * and returns the question with the total votes.
 */

export function formatQuestion(question: Question) {
  const votes = question.choices.reduce((acc, choice) => acc + choice.votes, 0);

  return {
    ...question,
    id: nanoid(),
    votes,
  };
}
