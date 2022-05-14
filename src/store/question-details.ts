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
  },
});

export { actions };
export default reducer;
