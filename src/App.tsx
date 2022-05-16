import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Spinner, NotFound } from 'components';
import { GlobalStyles, theme } from 'styles';
import store from 'store';

const Questions = lazy(() => import('pages/questions'));
const QuestionDetails = lazy(() => import('pages/question-details'));
const CreateQuestion = lazy(() => import('pages/create-question'));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Spinner />}>
          <GlobalStyles />

          <Router>
            <Routes>
              <Route path="/" element={<Questions />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/questions/:id" element={<QuestionDetails />} />
              <Route path="/questions/new" element={<CreateQuestion />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
