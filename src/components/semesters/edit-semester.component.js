import React, { Component } from 'react';
import axios from 'axios';

export default class EditMudir extends Component {

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
        const obj = {
            semester: this.state.semester,
            tahun_ajaran: this.state.tahun_ajaran
        };
        console.log(obj);
        axios.put('https://rumahbelajaribnuabbas-api.herokuapp.com/semesters/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/semesters');
    }

    render() {
        return (
            <div>
                <h3 align="center">Edit</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Semester: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.semester}
                                onChange={this.onChangeSemesterSemester}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tahun Ajaran: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tahun_ajaran}
                                onChange={this.onChangeSemesterTahunAjaran}
                                />
                    </div>
                    
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update SEmester" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}