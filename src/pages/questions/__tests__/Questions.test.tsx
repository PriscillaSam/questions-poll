import { render, screen, cleanup } from 'test-utils';
import { questions as mockQuestions } from 'utils';
import { useQuestions } from 'hooks';
import { Questions } from '../Questions';

jest.mock('hooks/useQuestions');
const mockedHook = jest.mocked(useQuestions);

afterEach(() => {
	cleanup();
	jest.resetAllMocks();
});

describe('<Questions /> Page', () => {
	it('should render the loading text when fetching data', () => {
		mockedHook.mockReturnValue({
			questions: mockQuestions,
			status: 'fetching',
		});

		render(<Questions />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('should render questions', () => {
		mockedHook.mockReturnValue({ questions: mockQuestions, status: 'idle' });
		render(<Questions />);
		expect(
			screen.getByText('Favourite programming language?')
		).toBeInTheDocument();
	});
});
