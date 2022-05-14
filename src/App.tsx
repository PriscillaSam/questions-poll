import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Spinner } from 'components';
import { GlobalStyles, theme } from 'styles';
import store from 'store';

const Questions = lazy(() => import('pages/questions'));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
