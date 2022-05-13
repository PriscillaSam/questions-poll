import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from 'types';

type QuestionsState = {
	questions: Question[];
};

const initialState: QuestionsState = {
	questions: [],
};

const { actions, reducer } = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setQuestions: (state, action: PayloadAction<Question[]>) => {
			state.questions = action.payload;
		},
	},
});

export { actions };
export default reducer;
