import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MudirsList extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        this.getTodos()
    }

    getTodos = () => {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/mudirs/')
            .then(response => {
                const todos = response.data.data;
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
                <h3>Daftar Mudir</h3>
                <div className="collpase navbar-collapse">
                    <Link to="/mudirs/create"  className="btn btn-primary" >Tambah Mudir</Link>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Asal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map((data, i) => {
                                console.log(data)
                                return (
                                    <tr key={i}>
                                        <td>{data.nama}</td>
                                        <td>{data.tempat_tanggal_lahir_tempat}</td>
                                        <td>
                                            <Link  className="btn btn-info" to={"/mudirs/detail/"+data.id}>Detail</Link>
                                            &nbsp;
                                            <Link  className="btn btn-success" to={"/mudirs/edit/"+data.id}>Edit</Link>
                                            &nbsp;
                                            <Link  className="btn btn-danger" to={"/mudirs/delete/"+data.id}>Delete</Link>
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
