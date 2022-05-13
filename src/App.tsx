import { Spinner } from 'components';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

const Questions = lazy(() => import('pages/questions'));

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Spinner />}>
				<GlobalStyles />

				<Router>
					<Routes>
						<Route path="/" element={<Questions />} />
					</Routes>
				</Router>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
