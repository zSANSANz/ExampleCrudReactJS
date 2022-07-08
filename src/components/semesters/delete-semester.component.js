import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteMudir extends Component {

    constructor(props) {
        super(props);

        this.onChangeSemesterSemester = this.onChangeSemesterSemester.bind(this);
        this.onChangeSemesterTahunAjaran = this.onChangeSemesterTahunAjaran.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            semester: '',
            tahun_ajaran: ''
        }
    }

    componentDidMount() {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/semesters/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    semester: response.data.data.semester,
                    tahun_ajaran: response.data.data.tahun_ajaran,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeSemesterSemester(e) {
        this.setState({
            semester: e.target.value
        });
    }

    onChangeSemesterTahunAjaran(e) {
        this.setState({
            tahun_ajaran: e.target.value
        });
    }
 
    onSubmit(e) {
        e.preventDefault();
        
        axios.delete('https://rumahbelajaribnuabbas-api.herokuapp.com/semesters/'+this.props.match.params.id)
            .then(res => console.log(res.data));
        
        this.props.history.push('/semesters');
    }

    render() {
        return (
            <div>
                <h3 align="center">Apakah Yakin Mau di Hapus Data ini???</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Semester: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.semester}
                                onChange={this.onChangeSemesterSemester}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tahun Ajaran: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tahun_ajaran}
                                onChange={this.onChangeSemesterTahunAjaran}
                                disabled />
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Delete Semester" className="btn btn-danger"/>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/semesters/"  className="btn btn-primary" >Kembali</Link>
                    </div>
                </form>
            </div>
        )
    }
}