import { render, screen, cleanup } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { useCreateQuestion } from 'hooks';
import CreateQuestion from '../CreateQuestion';

jest.mock('hooks/useCreateQuestion');
jest.mock('react-router-dom');
const mockedHook = jest.mocked(useCreateQuestion);

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

const returnValue: any = {
  question: '',
  choices: [],
  removeChoice: jest.fn(),
  handleOnChange: jest.fn(),
  handleEnter: jest.fn(),
  createQuestion: jest.fn(),
  status: 'idle',
};

describe('<CreateQuestion /> Page', () => {
  it('should render create question page', () => {
    mockedHook.mockReturnValue(returnValue);

    render(<CreateQuestion />);
    expect(screen.getByText('Create a new question')).toBeInTheDocument();
  });

  it('should render and change input fields', async () => {
    mockedHook.mockReturnValue(returnValue);

    const user = userEvent.setup();
    render(<CreateQuestion />);

    const choiceInput = screen.getByLabelText('Enter choices');

    await user.type(choiceInput, 'test choice');

    expect(choiceInput).toHaveValue('test choice');

    const button = screen.getByText('Create Question');

    // disabled because values returned from mock are not updated
    expect(button).toHaveAttribute('disabled');
  });

  it('should call the createQuestion function', async () => {
    mockedHook.mockReturnValue({
      ...returnValue,
      status: 'success',
      question: 'question',
      choices: ['choice'],
    });

    const user = userEvent.setup();
    render(<CreateQuestion />);

    const button = screen.getByText('Create Question');

    // button is active when question and choices have values
    expect(button).not.toHaveAttribute('disabled');

    await user.click(button);
    expect(mockedHook.mock.results[0]?.value.createQuestion).toHaveBeenCalled();
  });
});
