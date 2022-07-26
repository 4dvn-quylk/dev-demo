import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { AppStore } from './stores';
import './index.css';

const HomePage = lazy(() => import('./pages/home'));
const SharePage = lazy(() => import('./pages/share'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Spin />}>
      <AppStore.Provider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="share" element={<SharePage />} />
          </Route>
        </Routes>
      </AppStore.Provider>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
