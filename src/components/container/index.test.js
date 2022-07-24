/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'; // (or /dom, /vue, ...)
import { Container } from './index';

describe('Test Container component', () => {
  test('should render', () => {
    render(<Container />);
    const container = screen.getByTestId('c-container');
    expect(container).toBeInTheDocument();
  });
  test('should have children', () => {
    render(<Container>hello</Container>);
    expect(screen.getByText('hello')).toBeTruthy();
  });
  test('should have no children', () => {
    render(<Container />);
    expect(screen.queryByText('hello')).toBeFalsy();
  });
});
