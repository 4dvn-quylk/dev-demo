/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'; // (or /dom, /vue, ...)
import { Logo } from './index';

describe('Test <Logo /> component', () => {
  test('should render', () => {
    render(<Logo />);
    const logo = screen.getByTestId('c-logo');
    expect(logo).toBeInTheDocument();
  });
});