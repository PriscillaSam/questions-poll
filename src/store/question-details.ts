import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from 'types';

type QuestionsState = {
  question: Question;
};

const initialState: QuestionsState = {
  question: {} as Question,
};

const { actions, reducer } = createSlice({
  name: 'question-details',
  initialState,
  reducers: {
    setQuestion: (state, action: PayloadAction<Question>) => {
      state.question = action.payload;
    },

    voteChoice: (state, action: PayloadAction<string>) => {
      state.question.choices.forEach((choice) => {
        if (choice.url === action.payload) {
          choice.votes += 1;
        }
      });

      state.question.votes! += 1;
    },
  },
});

export { actions };
export default reducer;
