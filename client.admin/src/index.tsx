
import '@ant-design/pro-layout/dist/layout.css';
import 'antd/dist/antd.css';
import MainFeature from 'features/main';
import Error404Page from 'features/_error/404';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFeature />,
    errorElement: <Error404Page />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
