

import dispatcher from './createDispatcher.js';

import * as Types from './types.js';

/**
 * Dispatcher的作用是将Action派发到store中
 */
export default {
  addTodo: (content) => {
    console.log('触发Action，通过Dispatch派发该Action');
    dispatcher.dispatch({
      actionType: Types.ADD_TODO,
      payload: {
        content,
      },
    });
  },
  deleteTodo: (id) => {
    dispatcher.dispatch({
      actionType: Types.DELETE_TODO,
      payload: {
        id,
      },
    });
  },
  changeToDoStatus: (id) => {
    dispatcher.dispatch({
      actionType: Types.CHANGE_TODO_STATUS,
      payload: {
        id,
      },
    });
  }

};