import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from '../stores/store';

// test utils file
export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    // user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export const renderWithProvider = (ui, { route = '/', providerProps } = {}) => {
  window.history.pushState({}, 'Test page', route);
  const AppStore = createStore(providerProps);
  return {
    ...render(<AppStore.Provider>{ui}</AppStore.Provider>, {
      wrapper: BrowserRouter,
    }),
  };
};
