import React, { Component } from 'react';

class AddTodo extends Component {
    state ={
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
        // console.log("New element added")
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.content.length > 0){
            this.props.addTodo(this.state.content);
        }

        this.setState({
            content: ''
        });
    }

    render () {
        return (
            <div>
                <form className="center" onSubmit={this.handleSubmit}>
                    {/* <label className="text-darken-5 black-text">Add new Todo:</label> */}
                    <input className="center cyan lighten-4 black-text" type="text" onChange={this.handleChange} value={this.state.content} />
                    <button className=" waves-effect btn-small blue accent-3">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;