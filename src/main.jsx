import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import Invo from './pages/Invo.jsx';

const router = createBrowserRouter(([
  {
    path: '/',
    element: <App />,
    errorElement: <HomePage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'test',
        element: <Invo />
      }
    ]
  }
]));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);