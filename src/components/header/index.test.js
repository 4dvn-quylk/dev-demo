/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { cleanup, screen } from '@testing-library/react';
import { renderWithRouter, renderWithProvider } from '../../test-utils/index';
import { Header } from './index';
import * as store from '../../stores';

describe('Test <Header /> component', () => {
  let mockUpdateStore;
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('Render default', () => {
    test('should render', () => {
      const { container } = renderWithProvider(<Header />);
      const header = screen.getByTestId('app-header');
      expect.assertions(2);
      expect(header).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    test('should have a register form', () => {
      const { container } = renderWithRouter(<Header />);
      expect.assertions(4);
      expect(container.querySelectorAll('input').length).toEqual(2);
      expect(container.querySelector('#email')).toBeTruthy();
      expect(container.querySelector('#password')).toBeTruthy();
      expect(screen.getByText(/Register/)).toBeTruthy();
    });
  });

  describe('Test <Header /> component render after register', () => {
    beforeEach(() => {
      mockUpdateStore = jest.fn();
      jest.spyOn(store, 'useAppStore').mockImplementation(() => [
        {
          registered: true,
        },
        mockUpdateStore,
      ]);
    });
    test('should render', () => {
      const { container } = renderWithProvider(<Header />);
      const header = screen.getByTestId('app-header');
      expect.assertions(2);
      expect(header).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    test('should have a login form', () => {
      const { container } = renderWithRouter(<Header />);
      expect.assertions(4);
      expect(container.querySelectorAll('input').length).toEqual(2);
      expect(container.querySelector('#email')).toBeTruthy();
      expect(container.querySelector('#password')).toBeTruthy();
      expect(screen.getByText(/Login/)).toBeTruthy();
    });
  });

  describe('Test <Header /> component render after login', () => {
    beforeEach(() => {
      mockUpdateStore = jest.fn();
      jest.spyOn(store, 'useAppStore').mockImplementation(() => [
        {
          registered: true,
          user: { email: 'quylk@gmail.com' },
        },
        mockUpdateStore,
      ]);
    });

    test('should render', () => {
      const { container } = renderWithProvider(<Header />);
      const header = screen.getByTestId('app-header');
      expect.assertions(2);
      expect(header).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    test('should login successful', () => {
      const { container } = renderWithRouter(<Header />);
      expect.assertions(8);
      expect(container.querySelectorAll('input').length).toEqual(0);
      expect(container.querySelector('#email')).toBeFalsy();
      expect(container.querySelector('#password')).toBeFalsy();
      expect(screen.getByText(/quylk@gmail.com/)).toBeTruthy();
      expect(screen.getByText(/Share a movie/)).toBeTruthy();
      expect(screen.getByText(/Logout/)).toBeTruthy();
      expect(screen.queryByText(/Login/)).toBeFalsy();
      expect(screen.queryByText(/Register/)).toBeFalsy();
    });
  });
});
