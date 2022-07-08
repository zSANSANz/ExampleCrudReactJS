import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSemester extends Component {

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
        
        console.log(`Form submitted:`);
        console.log(`Semester Semester: ${this.state.semester}`);
        console.log(`Semester Tahun Ajaran: ${this.state.tahun_ajaran}`);
        
        const newSemester = {
            semester: this.state.semester,
            tahun_ajaran: this.state.tahun_ajaran,
        };

        axios.post('https://rumahbelajaribnuabbas-api.herokuapp.com/semesters/', newSemester)
            .then(res => console.log(res.data));

        this.setState({
            semester: '',
            tahun_ajaran: ''
        })

        this.props.history.push('/semesters');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Tambah Semester Baru</h3>
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
                    
                    <div className="form-group">
                        <input type="submit" value="Tambah Semester" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}