import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProvider } from '../../test-utils/index';
import HomePage from './index';

describe('Test Home page', () => {
  test('should render successful', () => {
    const { container } = renderWithProvider(<HomePage />);
    expect(container).toMatchSnapshot();
  });

  test('should have 3 card video', () => {
    renderWithProvider(<HomePage />);
    expect(screen.getAllByTestId('c-video-card').length).toEqual(3);
  });
});
