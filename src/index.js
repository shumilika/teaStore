import React from 'react';
import './index.scss';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux'


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
);
