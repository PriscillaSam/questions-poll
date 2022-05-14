import { render, screen, cleanup } from 'test-utils';
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
    });

    render(<QuestionDetails />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render question details', () => {
    mockedHook.mockReturnValue({ question, status: 'success' });
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
    });

    render(<QuestionDetails />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
