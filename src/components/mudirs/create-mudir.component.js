import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeMudirNama = this.onChangeMudirNama.bind(this);
        this.onChangeMudirTempatLahir = this.onChangeMudirTempatLahir.bind(this);
        this.onChangeMudirTanggalLahir = this.onChangeMudirTanggalLahir.bind(this);
        this.onChangeMudirBulanLahir = this.onChangeMudirBulanLahir.bind(this);
        this.onChangeMudirTahunLahir = this.onChangeMudirTahunLahir.bind(this);
        this.onChangeKeluar = this.onChangeKeluar.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nama: '',
            tempat_tanggal_lahir_tempat: '',
            tempat_tanggal_lahir_tgl: '',
            tempat_tanggal_lahir_bln: '',
            tempat_tanggal_lahir_tahun: '',
            keluar: ''
        }
    }

    onChangeMudirNama(e) {
        this.setState({
            nama: e.target.value
        });
    }

    onChangeMudirTempatLahir(e) {
        this.setState({
            tempat_tanggal_lahir_tempat: e.target.value
        });
    }

    onChangeMudirTanggalLahir(e) {
        this.setState({
            tempat_tanggal_lahir_tgl: e.target.value
        });
    }

    onChangeMudirBulanLahir(e) {
        this.setState({
            tempat_tanggal_lahir_bln: e.target.value
        });
    }

    onChangeMudirTahunLahir(e) {
        this.setState({
            tempat_tanggal_lahir_tahun: e.target.value
        });
    }

    onChangeKeluar(e) {
        this.setState({
            keluar: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Mudir Nama: ${this.state.nama}`);
        console.log(`Mudir Tempat Lahir: ${this.state.tempat_tanggal_lahir_tempat}`);
        console.log(`Mudir Tanggal Lahir: ${this.state.tempat_tanggal_lahir_tgl}`);
        console.log(`Mudir Bulan Lahir: ${this.state.tempat_tanggal_lahir_bln}`);
        console.log(`Mudir Tahun Lahir: ${this.state.tempat_tanggal_lahir_tahun}`);
        console.log(`Mudir Keluar: ${this.state.keluar}`);
     
        const newMudir = {
            nama: this.state.nama,
            tempat_tanggal_lahir_tempat: this.state.tempat_tanggal_lahir_tempat,
            tempat_tanggal_lahir_tgl: this.state.tempat_tanggal_lahir_tgl,
            tempat_tanggal_lahir_bln: this.state.tempat_tanggal_lahir_bln,
            tempat_tanggal_lahir_tahun: this.state.tempat_tanggal_lahir_tahun,
            keluar: this.state.keluar,
        };

        axios.post('https://rumahbelajaribnuabbas-api.herokuapp.com/mudirs/', newMudir)
            .then(res => console.log(res.data));

        this.setState({
            nama: '',
            tempat_tanggal_lahir_tempat: '',
            tempat_tanggal_lahir_tgl: '',
            tempat_tanggal_lahir_bln: '',
            tempat_tanggal_lahir_tahun: '',
            keluar: ''
        })

        this.props.history.push('/mudirs');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Tambah Mudir Baru</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Nama: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.mudir_nama}
                                onChange={this.onChangeMudirNama}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tempat Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tempat}
                                onChange={this.onChangeMudirTempatLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tanggal Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tgl}
                                onChange={this.onChangeMudirTanggalLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Bulan Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_bln}
                                onChange={this.onChangeMudirBulanLahir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tahun Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tahun}
                                onChange={this.onChangeMudirTahunLahir}
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
                        <input type="submit" value="Tambah Mudir" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}