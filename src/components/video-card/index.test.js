/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react'; // (or /dom, /vue, ...)
import { VideoCard } from './index';

const TEST_DATA = {
  id: 1,
  videoSrc: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
  title: 'World energy crisis - BBC News Review',
  sharedUser: 'Quylk',
  numberLikes: 6,
  numberDislikes: 9,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const renderCard = () => render(<VideoCard {...TEST_DATA} />);

const renderCardEmpty = () =>
  render(
    <VideoCard
      {...TEST_DATA}
      numberLikes={0}
      numberDislikes={0}
      sharedUser={undefined}
    />
  );

describe('Test <VideoCard /> component', () => {
  test('should render', () => {
    renderCard();
    const card = screen.getByTestId('c-video-card');
    expect(card).toBeInTheDocument();
  });

  test('should have video iframe', () => {
    const { container } = renderCard();
    // eslint-disable-next-line testing-library/no-node-access
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
  });

  test('should have title', () => {
    renderCard();
    const title = screen.getByTestId('test-title');
    const { getByText } = within(title);
    expect(title).toBeInTheDocument();
    expect(getByText(TEST_DATA.title)).toBeInTheDocument();
  });

  test('should have likes', () => {
    renderCard();
    const likeEl = screen.queryByTestId('test-liked');
    expect(likeEl).toBeInTheDocument();
    
  });

  test('should have dislikes', () => {
    renderCard();
    const dislikeEl = screen.queryByTestId('test-disliked');
    expect(dislikeEl).toBeInTheDocument();
  });

  test('should have shared user', () => {
    renderCard();
    const sharedUserEl = screen.queryByTestId('test-shared-user');
    expect(sharedUserEl).toBeInTheDocument();
  });

  test('should have description', () => {
    renderCard();
    const descriptionEl = screen.queryByTestId('test-description');
    expect(descriptionEl).toBeInTheDocument();
  });

  test('should have paragraph', () => {
    renderCard();
    const paragraphEl = screen.queryByTestId('test-paragraph');
    expect(paragraphEl).toBeInTheDocument();
  });

  test('should have no like', () => {
    renderCardEmpty();
    const paragraphEl = screen.queryByTestId('test-liked');
    expect(paragraphEl).not.toBeInTheDocument();
  });

  test('should have no dislike', () => {
    renderCardEmpty();
    const paragraphEl = screen.queryByTestId('test-disliked');
    expect(paragraphEl).not.toBeInTheDocument();
  });

  test('should have no shared user', () => {
    renderCardEmpty();
    const paragraphEl = screen.queryByTestId('test-shared-user');
    expect(paragraphEl).not.toBeInTheDocument();
  });
});
