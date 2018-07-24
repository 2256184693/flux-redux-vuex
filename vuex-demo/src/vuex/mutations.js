import * as T from './types.js';

export default {
  [T.ADD_TODO](state, payload) {
    let {content} = payload;
    state.list = [...state.list, {
      content,
      id: state.number + 1,
      done: false,
    }];
    state.number++;
  },
  [T.DELETE_TODO](state, payload) {
    let {id} = payload;
    state.list = state.list.filter(item => item.id != id);
  },
  [T.CHANGE_TODO_STATUS](state, payload) {
    let {id} = payload;
    state.list = state.list.map(item => {
      if(item.id == id) {
        return {...item, done: !item.done};
      }
      return item;
    });
  },
};