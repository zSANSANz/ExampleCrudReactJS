import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SemestersList extends Component {

    state = {
        semesters: []
    }

    componentDidMount() {
        this.getTodos()
    }

    getTodos = () => {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/semesters/')
            .then(response => {
                const semesters = response.data.data;
                this.setState({semesters})
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
                <h3>Daftar Semester</h3>
                <div className="collpase navbar-collapse">
                    <Link to="/semesters/create"  className="btn btn-primary" >Tambah Semester</Link>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Tahun Ajaran</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.semesters.map((data, i) => {
                                console.log(data)
                                return (
                                    <tr key={i}>
                                        <td>{data.semester}</td>
                                        <td>{data.tahun_ajaran}</td>
                                        <td>
                                            <Link  className="btn btn-info" to={"/semesters/detail/"+data.id}>Detail</Link>
                                            &nbsp;
                                            <Link  className="btn btn-success" to={"/semesters/edit/"+data.id}>Edit</Link>
                                            &nbsp;
                                            <Link  className="btn btn-danger" to={"/semesters/delete/"+data.id}>Delete</Link>
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
