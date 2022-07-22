import { Layout } from 'antd';
import { Header } from '../../components/header';
const { Content } = Layout;


export const MainLayout = ({ children }) => (
  <Layout className="layout">
    <Header />
    <Content>{children}</Content>
  </Layout>
);
