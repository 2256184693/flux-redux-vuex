
import dispatcher from './createDispatcher.js';

import * as Types from './types.js';

var EventEmitter = require('events').EventEmitter;

let ToDoListStore = Object.assign({}, EventEmitter.prototype, {
  number: 3,
  list: [
    {content: '计划1', id: 1, done: false},
    {content: '计划2', id: 2, done: true},
    {content: '计划3', id: 3, done: false},
  ],

  getList() {
    return this.list;
  },

  getDoneList() {
    return this.list.filter(item => item.done);
  },

  getNotDoneList() {
    return this.list.filter(item => !item.done);
  },

  addTodo(content) {
    console.log('StoreAPI被调用，修改Store数据');
    let todo = {
      id: this.number + 1,
      content: content,
      done: false,
    };
    this.list.push(todo);
    this.number = this.number + 1;
  },

  deleteTodo(id) {
    this.list = this.list.filter(item => item.id != id);
  },

  changeTodoStatus(id) {
    this.list = this.list.map(item => {
      if(item.id == id) {
        return Object.assign({}, item, {
          done: !item.done,
        });
      }
      return item;
    });
  },

  /**
   * 向外抛出一个change事件，通知View层Store数据改动。
   */
  emitChange() {
    console.log('Store数据发生变化，抛出change事件通知View层');
    this.emit('change');
  },

  /**
   * 订阅函数
   */
  addListener(cb) {
    this.on('change', cb);
  },

  /**
   * 取消订阅函数
   */
  removeListener(cb) {
    this.removeListener('change', cb);
  },
});

/**
 * 使用register登记Action的回掉函数
 */
dispatcher.register((action) => {
  switch(action.actionType) {
    case Types.ADD_TODO : {
      let {content} = action.payload;
      /**
       * 使用Store提供的API去修改Store
       * 同时触发change事件，通知view曾获取最新的Store数据。
       */
      console.log('触发Action回调函数，调用Store的API');
      ToDoListStore.addTodo(content);
      ToDoListStore.emitChange();
      break;
    };
    case Types.CHANGE_TODO_STATUS : {
      let {id} = action.payload;
      ToDoListStore.changeTodoStatus(id);
      ToDoListStore.emitChange();
      break;
    };
    case Types.DELETE_TODO : {
      let {id} = action.payload;
      ToDoListStore.deleteTodo(id);
      ToDoListStore.emitChange();
      break;
    }
    default: 
  }
}); 

export default ToDoListStore;

