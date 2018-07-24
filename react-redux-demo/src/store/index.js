import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers.js';

import thunkMiddleWare from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunkMiddleWare));