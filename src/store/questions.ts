import { createSlice } from '@reduxjs/toolkit';

type QuestionsState = {};

const initialState: QuestionsState = {};

const { actions, reducer } = createSlice({
	name: 'questions',
	initialState,
	reducers: {},
});

export { actions };
export default reducer;
