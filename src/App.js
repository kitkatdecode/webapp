import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import BG from './img/bg1.png';

class App extends Component {
  state = {
    todoLists:[
      {
        name:"Today",
        todos:[
          {id:1, content: "Make Banana shake"},
          {id:2, content: "Insta"},
        ],
        id:1
      },
      {
        name:"Study",
        todos:[
          {id:1, content: "Start systems"},
          {id:2, content: "CP"},
        ],
        id:2
      },
    ],
  }

  deleteTodo = (listId, todoId) => {
    let newTodoList = this.state.todoLists.filter(todoList => {
      return todoList.id === listId;
    });
    newTodoList = newTodoList[0];
    newTodoList.todos = newTodoList.todos.filter(todo => {
      return todo.id !== todoId;
    });

    let newTodoLists = this.state.todoLists.map(todoList => {
      if(todoList.id === listId){
        return newTodoList;
      }
      else{
        return todoList;
      }
    });
    this.setState({
      todoLists:newTodoLists
    });
  }

  deleteTodoList = (id) => {
    let todoLists = this.state.todoLists.filter(todoList => {
      return todoList.id !== id;
    });

    this.setState({
      todoLists
    })
  }

  addTodo = (listId, content) => {
    let newTodo = {id:Math.random(), content:content};
    let newTodoList = this.state.todoLists.filter(todoList => {
      return todoList.id === listId;
    });
    
    newTodoList = newTodoList[0];
    newTodoList.todos = [...newTodoList.todos, newTodo];

    let newTodoLists = this.state.todoLists.map(todoList => {
      if(todoList.id === listId){
        return newTodoList;
      }
      else{
        return todoList;
      }
    });
    this.setState({
      todoLists:newTodoLists
    });
  }

  addTodoList = (name) => {
    let newTodoList = {name:name, todos:[], id:Math.random()};
    let todoLists = [...this.state.todoLists, newTodoList];

    this.setState({
      todoLists
    });
  }

  render() {
    const paths = this.state.todoLists.map( todoBox =>{
      return (
        <Route path={'/plans/'+todoBox.name.toLowerCase()} component={() => (<TodoList todos={todoBox.todos} id={todoBox.id} name={todoBox.name} deleteTodo={this.deleteTodo} addTodo={this.addTodo}/>)} key={todoBox.id}/>
      );
    });

    return (
      <BrowserRouter>
        <div className="TodoApp" style={{ backgroundImage:`url(${BG})` }}>
          <Navbar />
          <Route exact path='/' component={() => (<Home state={this.state} deleteTodoList={this.deleteTodoList} addTodoList={this.addTodoList} />)}/>
          <Route path='/profile' component={Profile} />
          {paths}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
