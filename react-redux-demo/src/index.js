
import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import './scss/common.scss';

import App from './App.jsx';

import store from './store/index.js';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);

