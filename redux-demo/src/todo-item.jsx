
import React from "react";

import Actions from './store/actions.js';

export default ({data}) => {
  return (
    <div className={data.done ? 'todo-item done' : 'todo-item'}>
      <div className="content">{data.content}</div>
      <div className="operation">
        <a href="javascript:;" className="btn" onClick={Actions.changeToDoStatus.bind(null, data.id)}>{data.done ? '重置' : '完成'}</a>
        <a href="javascript:;" className="btn del" onClick={Actions.deleteTodo.bind(null, data.id)}>删除</a>
      </div>
    </div>
  )
}