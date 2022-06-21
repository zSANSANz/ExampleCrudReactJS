import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TodosList extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        this.getTodos()
    }

    getTodos = () => {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/todos/')
            .then(response => {
                const todos = response.data.data.todos;
                this.setState({todos})
                // console.log(todos)
                // console.log(response)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <div className="collpase navbar-collapse">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map((data, i) => {
                                console.log(data)
                                return (
                                    <tr key={i}>
                                        <td>{data.todo_description}</td>
                                        <td>{data.todo_responsible}</td>
                                        <td>{data.todo_priority}</td>
                                        <td>
                                            <Link to={"/edit/"+data.id}>Edit</Link>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
