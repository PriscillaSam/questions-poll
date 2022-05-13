import reducer, { actions } from 'store/questions';
import { questions } from 'utils';

describe('questions reducer', () => {
	test('should return intial state', () => {
		expect(reducer(undefined, {} as any)).toEqual({
			questions: [],
		});
	});

	test('should add questions to the state', () => {
		expect(reducer(undefined, actions.setQuestions(questions))).toEqual({
			questions,
		});
	});
});
