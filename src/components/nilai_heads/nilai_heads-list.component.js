import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NilaiHeadsList extends Component {
  
    state = {
        nilai_heads: []
    }

    componentDidMount() {
        this.getNilaiHeads()
    }

    getNilaiHeads = () => {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/nilai_heads/')
            .then(response => {
                const nilai_heads = response.data.data;
                this.setState({nilai_heads})
            })
            .catch(function (error){
                console.log(error);
            })
    }
  
    render() {
        return (
        <div>
            <h3>Nilai Heads</h3>
            <div className="collpase navbar-collapse">
                <Link to="/nilai_heads/create" className="btn btn-primary">Tambah Nilai Head</Link>
            </div>
            <table className="table table-striped" style={{ margin:20 }} >
                <thead>
                    <tr>
                        <th>
                            id_semester
                        </th>
                        <th>
                            id_pelajaran
                        </th>
                        <th>
                            tf_atau_imtihan
                        </th>
                        <th>
                            nilai_bobot
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.nilai_heads.map((data, i) => {
                            console.log(data)
                            return (
                                <tr key={i}>
                                    <td>
                                        { data.id_semester }
                                    </td>
                                    <td>
                                        { data.id_pelajaran }
                                    </td>
                                    <td>
                                        { data.tf_atau_imtihan }
                                    </td>
                                    <td>
                                        { data.nilai_bobot }
                                    </td>
                                    <td>
                                        <Link className="btn btn-info" to={"/nilai_heads/detail/"+data.id}>Detail</Link>
                                        &nbsp;
                                        <Link className="btn btn-success" to={"/nilai_heads/edit/"+data.id}>Edit</Link>
                                        &nbsp;
                                        <Link className="btn btn-danger" to={"/nilai_heads/delete/"+data.id}>Delete</Link>
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
