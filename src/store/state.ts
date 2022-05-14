import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questions';
import questionDetailsReducer from './question-details';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    questionDetails: questionDetailsReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
