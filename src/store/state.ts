import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questions';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
