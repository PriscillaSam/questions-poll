import { StyledHeading } from 'components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="App">
				<StyledHeading size="lg" tag="h1">
					Questions
				</StyledHeading>
			</div>
		</ThemeProvider>
	);
}

export default App;
