import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class WaliKelassList extends Component {

    state = {
        semesters: []
    }

    componentDidMount() {
        this.getSemesters()
    }

    getSemesters = () => {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/wali_kelass/')
            .then(response => {
                const semesters = response.data.data;
                this.setState({semesters})
                // console.log(semesters)
                // console.log(response)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Daftar WaliKelas</h3>
                <div className="collpase navbar-collapse">
                    <Link to="/wali_kelass/create"  className="btn btn-primary" >Tambah Wali Kelas</Link>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Kelas</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.semesters.map((data, i) => {
                                console.log(data)
                                return (
                                    <tr key={i}>
                                        <td>{data.nama}</td>
                                        <td>{data.kelas}</td>
                                        <td>
                                            <Link  className="btn btn-info btn-xs" to={"/wali_kelass/detail/"+data.id}>Detail</Link>
                                            &nbsp;
                                            <Link  className="btn btn-success btn-xs" to={"/wali_kelass/edit/"+data.id}>Edit</Link>
                                            &nbsp;
                                            <Link  className="btn btn-danger btn-xs" to={"/wali_kelass/delete/"+data.id}>Delete</Link>
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
