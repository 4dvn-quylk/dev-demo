// import { Link } from 'react-router-dom';
import { Logo } from '../logo';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

export const Header = () => {
  return (
    <AntHeader className="App-header">
      <Logo />
    </AntHeader>
  );
};
