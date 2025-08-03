import React from 'react';
import './index.scss';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux'
import { AuthProvider } from './contexts/AuthContext';


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <AuthProvider>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </AuthProvider>
  </Provider>
);
