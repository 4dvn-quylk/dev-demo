import logo from './logo.svg';
import { Avatar } from 'antd';

export const Logo = () => (
  <Avatar data-testid="c-logo" src={logo} alt="header-logo" size={64} />
);
