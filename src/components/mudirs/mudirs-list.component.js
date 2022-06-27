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
                    <Link to="/mudirs/create" className="nav-link">Tambah Mudir</Link>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Tempat</th>
                            <th>Tanggal</th>
                            <th>Bulan</th>
                            <th>Tahun</th>
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
                                        <td>{data.tempat_tanggal_lahir_tgl}</td>
                                        <td>{data.tempat_tanggal_lahir_bln}</td>
                                        <td>{data.tempat_tanggal_lahir_tahun}</td>
                                        <td>
                                            <Link to={"/mudirs/detail/"+data.id}>Detail</Link>
                                            &nbsp;
                                            <Link to={"/mudirs/edit/"+data.id}>Edit</Link>
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
