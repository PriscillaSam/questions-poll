import { Question } from 'types';
import { nanoid } from '@reduxjs/toolkit';

/**
 * @description - This function aggregrates the votes of the choices of a question
 * and returns the question with the total votes and generated id.
 */

export function formatQuestion(question: Question) {
  const votes = question.choices.reduce((acc, choice) => acc + choice.votes, 0);

  return {
    ...question,
    id: nanoid(),
    votes,
  };
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
