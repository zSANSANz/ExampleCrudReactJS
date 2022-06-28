import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteWaliKelas extends Component {

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
        
        axios.delete('https://rumahbelajaribnuabbas-api.herokuapp.com/wali_kelass/'+this.props.match.params.id)
            .then(res => console.log(res.data));
        
        this.props.history.push('/wali_kelass');
    }

    render() {
        return (
            <div>
                <h3 align="center">Apakah Yakin Mau di Hapus Data ini???</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Kelas: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.kelas}
                                onChange={this.onChangeKelas}
                                disabled />
                    </div>
                    <div className="form-group"> 
                        <label>Nama: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nama}
                                onChange={this.onChangeWaliKelasNama}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tempat Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tempat}
                                onChange={this.onChangeWaliKelasTempatLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tanggal Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tgl}
                                onChange={this.onChangeWaliKelasTanggalLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Bulan Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_bln}
                                onChange={this.onChangeWaliKelasBulanLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tahun Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tahun}
                                onChange={this.onChangeWaliKelasTahunLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Keluar: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.keluar}
                                onChange={this.onChangeKeluar}
                                disabled />
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
                        <input type="submit" value="Delete Wali Kelas" className="btn btn-danger"/>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/wali_kelass/"  className="btn btn-primary" >Kembali</Link>
                    </div>
                </form>
            </div>
        )
    }
}