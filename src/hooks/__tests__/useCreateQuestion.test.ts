import { cleanup, renderHook, act } from 'test-utils';
import { useCreateQuestion } from 'hooks';

jest.mock('react-router-dom');

afterAll(() => {
  cleanup();
  jest.resetAllMocks();
});

test('useCreateQuestion hook', async () => {
  const { result } = renderHook(() => useCreateQuestion());
  const { question, choices, status } = result.current;

  // assert intial state
  expect(question).toBe('');
  expect(choices).toHaveLength(0);
  expect(status).toBe('idle');

  // call onChange handlers
  act(() => {
    result.current.handleOnChange({
      target: { name: 'question', value: 'question' },
    } as any);
  });

  act(() => {
    result.current.handleEnter({
      key: 'Enter',
      currentTarget: { value: 'choice' },
    } as any);
  });

  // assert state after onChange handlers have been called
  expect(result.current.question).toBe('question');
  expect(result.current.choices).toHaveLength(1);

  // try to add the same choice again
  act(() => {
    result.current.handleEnter({
      key: 'Enter',
      currentTarget: { value: 'Choice' },
    } as any);
  });

  // assert that the same choice was not added
  expect(result.current.choices).toHaveLength(1);

  act(() => {
    result.current.removeChoice('choice');
  });

  expect(result.current.choices).toHaveLength(0);
});
