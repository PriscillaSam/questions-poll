import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import questionsReducer from 'store/questions';
import { theme } from 'styles';

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider
        store={configureStore({
          reducer: { questions: questionsReducer },
        })}
      >
        {children}
      </Provider>
    </ThemeProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
