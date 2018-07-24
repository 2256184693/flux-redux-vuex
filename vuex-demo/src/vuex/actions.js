import * as T from './types.js';

export default {
  addTodo({commit, state}, content) {
    commit(T.ADD_TODO, {
      content,
    });
  },
  deleteTodo({commit, state}, id) {
    commit(T.DELETE_TODO, {
      id,
    });
  },
  changeTodoStatus({commit, state}, id) {
    commit(T.CHANGE_TODO_STATUS, {
      id,
    });
  }
}