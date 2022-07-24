/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { renderWithProvider } from '../../test-utils/index';
import SharePage from './index';

describe('Test Share page', () => {
  test('should render successful', () => {
    const { container } = renderWithProvider(<SharePage />);
    expect(container).toMatchSnapshot();
  });
});
