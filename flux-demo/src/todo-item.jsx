
import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    
  }
  render() {
    var _p = this.props;
    var _s = this.state;
    const {data} = _p;
    return (
      <div className={data.status === 0 ? 'todo-item done' : 'todo-item'}>
        <div className="content">{data.content}</div>
        <div className="operation">
          <a href="javascript:;" className="btn">{data.status !== 0 ? '完成' : '重置'}</a>
          <a href="javascript:;" className="btn del">删除</a>
        </div>
      </div>
    )
  }
};
export default ToDoItem;