/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import {
  cleanup,
  screen,
  render,
  act,
  fireEvent,
} from '@testing-library/react';
import * as store from './stores';
import { renderWithProvider } from './test-utils';
import App from './App';

describe('Test App component', () => {
  test('should render', () => {
    const { container } = render(<App />);
    const component = screen.getByTestId('t-layout');
    expect.assertions(2);
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

describe('Integration test', () => {
  let mockUpdateStore;
  beforeEach(() => {
    jest.restoreAllMocks();
    mockUpdateStore = jest.fn();
    jest
      .spyOn(store, 'useAppStore')
      .mockImplementation(() => [store.initialStore, mockUpdateStore]);
  });

  afterEach(() => {
    mockUpdateStore = undefined;
    cleanup();
    jest.clearAllMocks();
  });

  test('should have register successful', async () => {
    const { container } = renderWithProvider(<App />);
    const registerBtn = container.querySelector('button');
    const emailInput = container.querySelector('#email');
    const passwordInput = container.querySelector('#password');

    fireEvent.input(emailInput, { target: { value: 'quylk@gmail.com' } });
    fireEvent.input(passwordInput, { target: { value: '123123' } });
    await act(async () => {
      fireEvent.click(registerBtn);
      const login = screen.queryByText(/Login/i);
      expect(login).toBeInTheDocument();
    });
  });
});
