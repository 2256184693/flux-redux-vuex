import * as T from './types.js';

export default (state = {
  number: 3,
  list: [
    {content: '计划1', id: 1, done: false},
    {content: '计划2', id: 2, done: true},
    {content: '计划3', id: 3, done: false},
  ],
}, action) => {
  switch(action.type) {

    case T.ADD_TODO : {
      let {content} = action.payload;
      return {
        ...state,
        number: state.number + 1,
        list: [
          ...state.list,
          {
            content: content,
            id: state.number + 1,
            done: false,
          }
        ]
      }
    }

    case T.DELETE_TODO : {
      let {id} = action.payload;
      let list = state.list.filter(item => item.id != id);
      return {
        ...state,
        list: list,
      };
    }

    case T.CHANGE_TODO_STATUS : {
      let {id} = action.payload;
      return {
        ...state,
        list: state.list.map(item => {
          if(item.id == id) {
            return {...item, done: !item.done};
          }
          return item;
        }),
      };
    }

    default: return state;
  }
};