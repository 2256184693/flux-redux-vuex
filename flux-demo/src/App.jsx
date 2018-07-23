

import React from "react";

import ToDoItem from './todo-item.jsx';

import './scss/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, content: '计划1', status: 0},
        {id: 2, content: '计划2', status: 1}
      ],
    }
  }
  componentDidMount() {
    
  }
  render() {
    var _p = this.props;
    var _s = this.state;
    return (
      <div className="todo-list">
        {
          _s.list.map(item => {
            return <ToDoItem key={item.id} data={item} />
          })
        }
      </div>
    )
  }
};
export default App;