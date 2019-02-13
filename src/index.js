import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

require('dotenv').config()


const options = {
  position: 'bottom center',
  timeout: 2000,
  offset: '30px',
  transition: 'scale'
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  , document.querySelector('.container'));
