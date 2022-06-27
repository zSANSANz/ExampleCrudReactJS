import React, { Component } from 'react';
import axios from 'axios';

export default class CreateWaliKelas extends Component {

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
            kelas: ''
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`WaliKelas Nama: ${this.state.nama}`);
        console.log(`WaliKelas Tempat Lahir: ${this.state.tempat_tanggal_lahir_tempat}`);
        console.log(`WaliKelas Tanggal Lahir: ${this.state.tempat_tanggal_lahir_tgl}`);
        console.log(`WaliKelas Bulan Lahir: ${this.state.tempat_tanggal_lahir_bln}`);
        console.log(`WaliKelas Tahun Lahir: ${this.state.tempat_tanggal_lahir_tahun}`);
        console.log(`WaliKelas Keluar: ${this.state.keluar}`);
        console.log(`WaliKelas Kelas: ${this.state.kelas}`);
     
        const newWaliKelas = {
            nama: this.state.nama,
            tempat_tanggal_lahir_tempat: this.state.tempat_tanggal_lahir_tempat,
            tempat_tanggal_lahir_tgl: this.state.tempat_tanggal_lahir_tgl,
            tempat_tanggal_lahir_bln: this.state.tempat_tanggal_lahir_bln,
            tempat_tanggal_lahir_tahun: this.state.tempat_tanggal_lahir_tahun,
            keluar: this.state.keluar,
            kelas: this.state.kelas,
        };

        axios.post('https://rumahbelajaribnuabbas-api.herokuapp.com/wali_kelass/', newWaliKelas)
            .then(res => console.log(res.data));

        this.setState({
            nama: '',
            tempat_tanggal_lahir_tempat: '',
            tempat_tanggal_lahir_tgl: '',
            tempat_tanggal_lahir_bln: '',
            tempat_tanggal_lahir_tahun: '',
            keluar: '',
            kelas: ''
        })

        this.props.history.push('/wali_kelass');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Tambah WaliKelas Baru</h3>
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
                                value={this.state.wali_kelas_nama}
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
                        <input type="submit" value="Tambah WaliKelas" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}