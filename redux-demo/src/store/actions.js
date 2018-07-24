

import * as T from './types.js';

import Store from './index.js';
/**
 * Dispatcher的作用是将Action派发到store中
 */
export default {
  addTodo: (content) => {
    console.log('触发Action，通过Dispatch派发该Action');
    Store.dispatch({
      type: T.ADD_TODO,
      payload: {
        content,
      },
    });
  },
  deleteTodo: (id) => {
    Store.dispatch({
      type: T.DELETE_TODO,
      payload: {
        id,
      },
    });
  },
  changeToDoStatus: (id) => {
    Store.dispatch({
      type: T.CHANGE_TODO_STATUS,
      payload: {
        id,
      },
    });
  }

};