import { Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainLayout children="dasdsa">
        <Outlet />
      </MainLayout>
    </div>
  );
}

export default App;
