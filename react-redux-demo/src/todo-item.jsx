
import React from "react";

import Actions from './store/actions.js';

import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeToDoStatus: () => {
      dispatch(Actions.changeToDoStatus(ownProps.data.id));
    },
    deleteTodo: () => {
      dispatch(Actions.deleteTodo(ownProps.data.id));
    },
  }
}


@connect(
  () => {
    return {};
  },
  mapDispatchToProps,
)
class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // changeToDoStatus = () => {
  //   let { dispatch, data }  = this.props;
  //   dispatch();
  // }
  
  // deleteTodo = () => {
  //   let { dispatch, data }  = this.props;
  //   dispatch(Actions.deleteTodo(data.id));
  // }

  render() {
    let { data } = this.props;
    return (
      <div className={data.done ? 'todo-item done' : 'todo-item'}>
        <div className="content">{data.content}</div>
        <div className="operation">
          <a href="javascript:;" className="btn" onClick={this.props.changeToDoStatus}>{data.done ? '重置' : '完成'}</a>
          <a href="javascript:;" className="btn del" onClick={this.props.deleteTodo}>删除</a>
        </div>
      </div>
    )
  }
}

export default ToDoItem;