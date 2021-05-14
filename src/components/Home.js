import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Home extends Component {
    state = {
        todoLists:[],
        newListName:''
    }


    handleChange = (e) => {
        this.setState({
            newListName:e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.newListName.length >0){
            this.props.addTodoList(this.state.newListName);
        }
    }

    confirmDelete = (boxId, boxName) => {
        confirmAlert({
            message: 'Are you sure to delete "'+ boxName+'" plan ?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.props.deleteTodoList(boxId)
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    }

    componentDidMount () {
        this.setState({
            todoLists:this.props.state.todoLists
        });
    }

    render() {
        const todoBoxes = this.state.todoLists.length ? (this.state.todoLists.map(todoBox => {
        return (
            <div className="col s12 m6 l3 center-align" key={todoBox.id} >
                <div className="TodoBox card red lighten-3 " >
                    <span className="card-title text-red text-darken-1"><Link to={'/plans/'+todoBox.name.toLowerCase()}>{todoBox.name}</Link></span>
                    <p></p>
                    <button className=" waves-effect btn-small red" onClick={() => {this.confirmDelete(todoBox.id, todoBox.name)}}>Delete</button>
                </div>
            </div>
        )
        })) : (
            <div className="card center grey lighten-2">
                <h3>No Plans !</h3>
            </div>
        );
        
        return (
            <div className="TodoHome center">
                <div className="row center">
                    {todoBoxes}
                    
                    <div className="col s12 m6 l3 center-align">
                        <form className="card blue accent-1" onSubmit={this.handleSubmit}>
                            <input className="center" type="text" onChange={this.handleChange}></input>
                            <button className=" waves-effect btn-small blue accent-3">Add New Plan</button>
                        </form>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default Home;
