import axios from 'axios';
import React, { Component } from 'react'

export default class CreateNilaiHead extends Component {

    constructor(props) {
        super(props);

        this.onChangeNilaiHeadIdSemester = this.onChangeNilaiHeadIdSemester.bind(this);
        this.onChangeNilaiHeadIdPelajaran = this.onChangeNilaiHeadIdPelajaran.bind(this);
        this.onChangeNilaiHeadTfAtauImtihan = this.onChangeNilaiHeadTfAtauImtihan.bind(this);
        this.onChangeNilaiBobot = this.onChangeNilaiBobot.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id_semester: '',
            id_pelajaran: '',
            tf_atau_imtihan: '',
            nilai_bobot: '',
        }
    }

    onChangeNilaiHeadIdSemester(e) {
        this.setState({
            id_semester: e.target.value
        })
    }

    onChangeNilaiHeadIdPelajaran(e) {
        this.setState({
            id_pelajaran: e.target.value
        })
    }

    onChangeNilaiHeadTfAtauImtihan(e) {
        this.setState({
            tf_atau_imtihan: e.target.value
        })
    }

    onChangeNilaiBobot(e) {
        this.setState({
            nilai_bobot: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`nilai_head id_semester: ${this.state.id_semester}`);
        console.log(`nilai_head id_pelajar: ${this.state.id_pelajaran}`);
        console.log(`nilai_head tf_atau_imtihan: ${this.state.tf_atau_imtihan}`);
        console.log(`nilai_head nilai_bobot: ${this.state.nilai_bobot}`);

        const newNilaiHead = {
            id_semester: this.state.id_semester,
            id_pelajaran: this.state.id_pelajaran,
            tf_atau_imtihan: this.state.tf_atau_imtihan,
            nilai_bobot: this.state.nilai_bobot,
        };

        axios.post('https://rumahbelajaribnuabbas-api.herokuapp.com/nilai_heads/', newNilaiHead)
            .then(res => console.log(res.data));

        this.setState({
            id_semester: '',
            id_pelajaran: '',
            tf_atau_imtihan: '',
            nilai_bobot: ''
        })

        this.props.history.push('/nilai_heads');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Tambah Nilai Head Baru</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>id_semester: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id_semester}
                                onChange={this.onChangeNilaiHeadIdSemester}
                                />
                        <label>id_pelajaran: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id_pelajaran}
                                onChange={this.onChangeNilaiHeadIdPelajaran}
                                />
                        <label>tf_atau_imtihan: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.tf_atau_imtihan}
                                onChange={this.onChangeNilaiHeadTfAtauImtihan}
                                />     
                        <label>nilai_bobot: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nilai_bobot}
                                onChange={this.onChangeNilaiBobot}
                                />     
                        <div className="form-group">
                            <input type="submit" value="Tambah Nilai Head" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
