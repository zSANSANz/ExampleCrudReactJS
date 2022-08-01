import axios from 'axios';
import React, { Component } from 'react'

export default class CreateNilaiImtihanChild extends Component {

    constructor(props) {
        super(props);

        this.onChangeNilaiImtihanChildIdNilaiHead = this.onChangeNilaiImtihanChildIdNilaiHead.bind(this);
        this.onChangeNilaiImtihanChildIdSemester = this.onChangeNilaiImtihanChildIdSemester.bind(this);
        this.onChangeNilaiImtihanChildIdPelajar = this.onChangeNilaiImtihanChildIdPelajar.bind(this);
        this.onChangeNilaiImtihanChildIdPelajaran = this.onChangeNilaiImtihanChildIdPelajaran.bind(this);
        this.onChangeNilaiImtihanChildNilaiImtihan = this.onChangeNilaiImtihanChildNilaiImtihan.bind(this);
        this.onChangeNilaiImtihanChildNilaiImtihanBobot = this.onChangeNilaiImtihanChildNilaiImtihanBobot.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id_nilai_head: '',
            id_semester: '',
            id_pelajar: '',
            id_pelajaran: '',
            nilai_imtihan: '',
            nilai_imtihan_bobot: '',
        }
    }

    onChangeNilaiImtihanChildIdNilaiHead(e) {
        this.setState({
            id_nilai_head: e.target.value
        })
    }

    onChangeNilaiImtihanChildIdSemester(e) {
        this.setState({
            id_semester: e.target.value
        })
    }

    onChangeNilaiImtihanChildIdPelajar(e) {
        this.setState({
            id_pelajar: e.target.value
        })
    }

    onChangeNilaiImtihanChildIdPelajaran(e) {
        this.setState({
            id_pelajaran: e.target.value
        })
    }

    onChangeNilaiImtihanChildNilaiImtihan(e) {
        this.setState({
            nilai_imtihan: e.target.value
        })
    }

    onChangeNilaiImtihanChildNilaiImtihanBobot(e) {
        this.setState({
            nilai_imtihan_bobot: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`nilai_imtihan_child: ${this.state.id_nilai_head}`);
        console.log(`nilai_imtihan_child: ${this.state.id_semester}`);
        console.log(`nilai_imtihan_child: ${this.state.id_pelajar}`);
        console.log(`nilai_imtihan_child: ${this.state.id_pelajaran}`);
        console.log(`nilai_imtihan_child: ${this.state.nilai_imtihan}`);
        console.log(`nilai_imtihan_child: ${this.state.nilai_imtihan_bobot}`);

        const newNilaiImtihanChild = {
            id_nilai_head: this.state.id_nilai_head,
            id_semester: this.state.id_semester,
            id_pelajar: this.state.id_pelajar,
            id_pelajaran: this.state.id_pelajaran,
            nilai_imtihan: this.state.nilai_imtihan,
            nilai_imtihan_bobot: this.state.nilai_imtihan_bobot,
        };

        axios.post('https://rumahbelajaribnuabbas-api.herokuapp.com/nilai_imtihan_childs/', newNilaiImtihanChild)
            .then(res => console.log(res.data));
        
        this.setState({
            id_nilai_head: '',
            id_semester: '',
            id_pelajar: '',
            id_pelajaran: '',
            nilai_imtihan: '',
            nilai_imtihan_bobot: ''
        })

        this.props.history.push('/nilai_imtihan_childs');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Nilai Imtihan Child</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>id_nilai_head</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id_nilai_head}
                                onChange={this.onChangeNilaiImtihanChildIdNilaiHead}
                                />
                        <label>id_semester</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id_semester}
                                onChange={this.onChangeNilaiImtihanChildIdSemester}
                                />
                        <label>id_pelajar</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id_pelajar}
                                onChange={this.onChangeNilaiImtihanChildIdPelajar}
                                />
                        <label>id_pelajaran</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id_pelajaran}
                                onChange={this.onChangeNilaiImtihanChildIdPelajaran}
                                />
                        <label>nilai_imtihan</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nilai_imtihan}
                                onChange={this.onChangeNilaiImtihanChildNilaiImtihan}
                                />
                        <label>nilai_imtihan_bobot</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nilai_imtihan_bobot}
                                onChange={this.onChangeNilaiImtihanChildNilaiImtihanBobot}
                                />
                        <div className="form-group">
                            <input type="submit" value="Tambah Nilai Imtihan Child" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
