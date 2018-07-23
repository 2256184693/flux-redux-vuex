
import React from "react";

import Actions from './store/actions.js';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {};
  }

  deleteTodo() {
    let {id} = this.props.data;
    Actions.deleteTodo(id);
  }

  changeTodoStatus = () => {
    let {id} = this.props.data;
    Actions.changeToDoStatus(id);
  }

  render() {
    var _p = this.props;
    var _s = this.state;
    const {data} = _p;
    return (
      <div className={data.done ? 'todo-item done' : 'todo-item'}>
        <div className="content">{data.content}</div>
        <div className="operation">
          <a href="javascript:;" className="btn" onClick={this.changeTodoStatus}>{data.done ? '重置' : '完成'}</a>
          <a href="javascript:;" className="btn del" onClick={this.deleteTodo}>删除</a>
        </div>
      </div>
    )
  }
};
export default ToDoItem;