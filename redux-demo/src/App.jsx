

import React from "react";

import ToDoItem from './todo-item.jsx';

import './scss/app.scss';

import Actions from './store/actions.js';

import Store from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneList: [],
      notDoneList: [],
      adding: false,
      content: '',
    }
  }
  
  initList() {
    let {list} = Store.getState();
    let doneList = list.filter(item => item.done);
    let notDoneList = list.filter(item => !item.done);
    this.setState({
      doneList,
      notDoneList,
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
    this.initList();
    this._bind = Store.subscribe(() => {
      this.initList();
    });
  }
};
export default App;