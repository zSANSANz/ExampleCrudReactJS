import React, { Component } from 'react';
import axios from 'axios';

export default class DetailSemester extends Component {

    constructor(props) {
        super(props);

        this.onChangeSemesterSemester = this.onChangeSemesterSemester.bind(this);
        this.onChangeSemesterTahunAjaran = this.onChangeSemesterTahunAjaran.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nama: '',
            tempat_tanggal_lahir_tempat: '',
            
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
        this.props.history.push('/semesters');
    }

    render() {
        return (
            <div>
                <h3 align="center">Detail</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Semester: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.semester}
                                onChange={this.onChangeSemesterNama}
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
                        <input type="submit" value="Back" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}