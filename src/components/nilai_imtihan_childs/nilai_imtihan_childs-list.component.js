import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NilaiImtihanChildsList extends Component {

    state = {
        nilai_imtihan_childs: []
    }

    componentDidMount() {
        this.getNilaiImtihanChilds()
    }

    getNilaiImtihanChilds = () => {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/nilai_imtihan_childs/')
            .then(response => {
                const nilai_imtihan_childs = response.data.data;
                this.setState({nilai_imtihan_childs})
            })
            .catch(function (error){
                console.log(error);
            })

    }

    render() {
        return (
            <div>
                <h3>NilaiImtihanChildsList</h3>
                <div className="collpase navbar-collapse">
                    <Link to="/nilai_imtihan_childs/create" className="btn btn-primary" >Tambah Nilai Imtihan Child</Link>
                </div>
                <table className="table table-striped" style={{ margin:20 }} >
                    <thead>
                        <tr>
                            <th>
                                id_nilai_head
                            </th>
                            <th>
                                id_semester
                            </th>
                            <th>
                                id_pelajar
                            </th>
                            <th>
                                id_pelajaran
                            </th>
                            <th>
                                nilai_imtihan
                            </th>
                            <th>
                                nilai_imtihan_bobot
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.nilai_imtihan_childs.map((data, i) => {
                                console.log(data)
                                return (
                                    <tr key={i}>
                                        <td>
                                            { data.id_nilai_head }
                                        </td>
                                        <td>
                                            { data.id_semester }
                                        </td>
                                        <td>
                                            { data.id_pelajar }
                                        </td>
                                        <td>
                                            { data.id_pelajaran }
                                        </td>
                                        <td>
                                            { data.nilai_imtihan }
                                        </td>
                                        <td>
                                            { data.nilai_imtihan_bobot }
                                        </td>
                                        <td>
                                            
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
