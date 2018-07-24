

import * as T from './types.js';

export default {
  addTodo: (content) => dispatch => {
    // Do Something
    dispatch({
      type: T.ADD_TODO,
      payload: {
        content,
      },
    })
  },
  deleteTodo: (id) => dispatch => {
    dispatch({
      type: T.DELETE_TODO,
      payload: {
        id,
      },
    });
  },
  changeToDoStatus: (id) => dispatch => {
    dispatch({
      type: T.CHANGE_TODO_STATUS,
      payload: {
        id,
      },
    });
  }

};