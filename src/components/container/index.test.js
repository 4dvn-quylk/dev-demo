/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Container } from './index';

describe('Test Container component', () => {
  test('should render', () => {
    const { container } = render(<Container />);
    const component = screen.getByTestId('c-container');
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
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
