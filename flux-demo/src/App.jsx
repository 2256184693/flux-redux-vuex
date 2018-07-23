

import React from "react";

import ToDoItem from './todo-item.jsx';

import './scss/app.scss';

import ToDoListStore from './store/index.js';

import Actions from './store/actions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneList: ToDoListStore.getDoneList(),
      notDoneList: ToDoListStore.getNotDoneList(),
      adding: false,
      content: '',
    }
  }
  
  initList = () => {
    console.log('接受到Store数据变动通知，重新拉取Store数据');
    this.setState({
      content: '',
      doneList: ToDoListStore.getDoneList(),
      notDoneList: ToDoListStore.getNotDoneList(),
    });
  }

  addTodo = () => {
    var content = this.state.content.replace(/(^\s*|\s*$)/ , '');
    if(!content) {
      alert('请输入Todo内容');
      return;
    }
    /**
     * 发起一个Action
     */
    Actions.addTodo(content);
  }

  inputChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  }
  render() {
    var _p = this.props;
    var _s = this.state;
    return (
      <div className="container">
        <h3 className="title">ToDo List</h3>
        <div className="todo-input-container">
          <input className="todo-input" type="text" value={_s.content} onInput={this.inputChange} />
          <a href="javascript:;" className="add-btn" onClick={this.addTodo}>新增</a>
        </div>
        <div className="todo-list">
          {
            _s.notDoneList.map(item => {
              return <ToDoItem key={item.id} data={item} />
            })
          }
        </div>
        <div className="todo-list">
          {
            _s.doneList.map(item => {
              return <ToDoItem key={item.id} data={item} />
            })
          }
        </div>
      </div>
    )
  }
  componentDidMount() {
    /**
     * 订阅监听事件，当Store触发change事件时，代表Store数据改变，则通过回调函数重新拉去数据
     */
    console.log('订阅监听事件');
    ToDoListStore.addListener(this.initList);
  }
  componentWillUnmount() {
    /**
     * 取消订阅
     */
    console.log('取消订阅');
    ToDoListStore.removeListener(this.initList);
  }
};
export default App;