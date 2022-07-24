import { Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import { Container } from './components/container';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MainLayout children="dasdsa">
        <Container>
          <Outlet />
        </Container>
      </MainLayout>
    </div>
  );
};

export default App;
