import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component {
  // state = {
  //   todos:[
  //     {id:1, content: "Make mango shake"},
  //     {id:2, content: "Start systems"},
  //   ],
  // }

  deleteTodo = (id) => {
    this.props.deleteTodo(this.props.id, id);
  }

  addTodo = (content) => {
    this.props.addTodo(this.props.id, content);
    // console.log(this.state);
  }

  render() {
    return (
      <div className="TodoList container">
        <h2 className="center blue-text">{this.props.name}</h2>
        <Todo todos={this.props.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
