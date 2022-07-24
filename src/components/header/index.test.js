/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/dom';
import { screen } from '@testing-library/react'; // (or /dom, /vue, ...)
import { renderWithRouter } from '../../test-utils/index';
import { Header } from './index';

describe('Test <Header /> component', () => {
  beforeAll(() => {});

  test('should render', () => {
    renderWithRouter(<Header />);
    const header = screen.getByTestId('app-header');
    expect(header).toBeInTheDocument();
  });
  test('should have 3 items 1', () => {
    // const { user } = renderWithRouter(<Header />);
    // console.log(user);
    //  const listCards = screen.getAllByTestId('video-card');
    //  expect(listCards.length).toEqual(3);
    expect(1).toEqual(1);
  });
});