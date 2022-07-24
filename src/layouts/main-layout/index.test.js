/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MainLayout } from './index';

describe('Test MainLayout component', () => {
  test('should render', () => {
    const { container } = render(<MainLayout />);
    const component = screen.getByTestId('t-layout');
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('should have children', () => {
    render(<MainLayout>Main Layout</MainLayout>);
    expect(screen.getByText('Main Layout')).toBeTruthy();
  });
  test('should have no children', () => {
    render(<MainLayout />);
    expect(screen.queryByText('hello')).toBeFalsy();
  });
});
