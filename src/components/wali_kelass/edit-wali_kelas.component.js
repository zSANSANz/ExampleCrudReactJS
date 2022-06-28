import React, { Component } from 'react';
import axios from 'axios';

export default class EditWaliKelas extends Component {

    constructor(props) {
        super(props);

        this.onChangeWaliKelasNama = this.onChangeWaliKelasNama.bind(this);
        this.onChangeWaliKelasTempatLahir = this.onChangeWaliKelasTempatLahir.bind(this);
        this.onChangeWaliKelasTanggalLahir = this.onChangeWaliKelasTanggalLahir.bind(this);
        this.onChangeWaliKelasBulanLahir = this.onChangeWaliKelasBulanLahir.bind(this);
        this.onChangeWaliKelasTahunLahir = this.onChangeWaliKelasTahunLahir.bind(this);
        this.onChangeKeluar = this.onChangeKeluar.bind(this);
        this.onChangeKelas = this.onChangeKelas.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nama: '',
            tempat_tanggal_lahir_tempat: '',
            tempat_tanggal_lahir_tgl: '',
            tempat_tanggal_lahir_bln: '',
            tempat_tanggal_lahir_tahun: '',
            keluar: '',
            kelas: '',
            created_at: ''
        }
    }

    componentDidMount() {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/wali_kelass/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    nama: response.data.data.nama,
                    tempat_tanggal_lahir_tempat: response.data.data.tempat_tanggal_lahir_tempat,
                    tempat_tanggal_lahir_tgl: response.data.data.tempat_tanggal_lahir_tgl,
                    tempat_tanggal_lahir_bln: response.data.data.tempat_tanggal_lahir_bln,
                    tempat_tanggal_lahir_tahun: response.data.data.tempat_tanggal_lahir_tahun,
                    keluar: response.data.data.keluar,
                    created_at: response.data.data.created_at,
                    kelas: response.data.data.kelas,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeWaliKelasNama(e) {
        this.setState({
            nama: e.target.value
        });
    }

    onChangeWaliKelasTempatLahir(e) {
        this.setState({
            tempat_tanggal_lahir_tempat: e.target.value
        });
    }

    onChangeWaliKelasTanggalLahir(e) {
        this.setState({
            tempat_tanggal_lahir_tgl: e.target.value
        });
    }

    onChangeWaliKelasBulanLahir(e) {
        this.setState({
            tempat_tanggal_lahir_bln: e.target.value
        });
    }

    onChangeWaliKelasTahunLahir(e) {
        this.setState({
            tempat_tanggal_lahir_tahun: e.target.value
        });
    }

    onChangeKeluar(e) {
        this.setState({
            keluar: e.target.value
        });
    }

    onChangeKelas(e) {
        this.setState({
            kelas: e.target.value
        });
    }

    onChangeCreatedAt(e) {
        this.setState({
            created_at: !this.state.created_at
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            nama: this.state.nama,
            tempat_tanggal_lahir_tempat: this.state.tempat_tanggal_lahir_tempat,
            tempat_tanggal_lahir_tgl: this.state.tempat_tanggal_lahir_tgl,
            tempat_tanggal_lahir_bln: this.state.tempat_tanggal_lahir_bln,
            tempat_tanggal_lahir_tahun: this.state.tempat_tanggal_lahir_tahun,
            keluar: this.state.keluar,
            kelas: this.state.kelas,
            created_at: this.state.created_at
        };
        console.log(obj);
        axios.put('https://rumahbelajaribnuabbas-api.herokuapp.com/wali_kelass/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/wali_kelass');
    }

    render() {
        return (
            <div>
                <h3 align="center">Edit</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                        <label>Kelas: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.kelas}
                                onChange={this.onChangeKelas}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Nama: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nama}
                                onChange={this.onChangeWaliKelasNama}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tempat Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tempat}
                                onChange={this.onChangeWaliKelasTempatLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tanggal Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tgl}
                                onChange={this.onChangeWaliKelasTanggalLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Bulan Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_bln}
                                onChange={this.onChangeWaliKelasBulanLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tahun Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tahun}
                                onChange={this.onChangeWaliKelasTahunLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Keluar: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.keluar}
                                onChange={this.onChangeKeluar}
                                />
                    </div>
                    <div className="form-group">
                        <label>Created At: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.created_at}
                                onChange={this.onChangeCreatedAt}
                                disabled />
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Mudir" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}