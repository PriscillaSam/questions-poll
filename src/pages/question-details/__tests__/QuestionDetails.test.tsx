import { render, screen, cleanup, fireEvent } from 'test-utils';
import { formatQuestion, questions } from 'utils';
import { useQuestionDetails } from 'hooks';
import { Question } from 'types';
import QuestionDetails from '../QuestionDetails';

jest.mock('hooks/useQuestionDetails');
const mockedHook = jest.mocked(useQuestionDetails);

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

const question = formatQuestion(questions[0] as Question);

describe('<QuestionDetails /> Page', () => {
  it('should render the loading text when fetching data', () => {
    mockedHook.mockReturnValue({
      question,
      status: 'fetching',
      vote: jest.fn(),
      votingStatus: 'idle',
    });

    render(<QuestionDetails />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render question details', () => {
    mockedHook.mockReturnValue({
      question,
      status: 'success',
      vote: jest.fn(),
      votingStatus: 'idle',
    });
    render(<QuestionDetails />);
    expect(
      screen.getByText('Favourite programming language?')
    ).toBeInTheDocument();

    expect(screen.getByText('Swift')).toBeInTheDocument();
    expect(screen.getByText('Total votes: 3840')).toBeInTheDocument();
  });

  it('should render error message when status is error', () => {
    mockedHook.mockReturnValue({
      question,
      status: 'error',
      vote: jest.fn(),
      votingStatus: 'idle',
    });

    render(<QuestionDetails />);
    expect(
      screen.getByText('Ooops... Something went wrong')
    ).toBeInTheDocument();
  });

  it('should call the vote function when button is clicked', () => {
    mockedHook.mockReturnValue({
      question,
      status: 'success',
      vote: jest.fn(),
      votingStatus: 'idle',
    });

    render(<QuestionDetails />);
    const button = screen.getByRole('button');

    // button is disabled when no choice is selected
    expect(button).toHaveAttribute('disabled');

    fireEvent.click(screen.getByLabelText('Swift'));

    expect(button).not.toHaveAttribute('disabled');

    fireEvent.click(button);

    expect(mockedHook.mock.results[0]?.value.vote).toHaveBeenCalledWith(
      '/questions/1/choices/1'
    );
  });
});
