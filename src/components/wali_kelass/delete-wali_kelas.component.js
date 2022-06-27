import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteMudir extends Component {

    constructor(props) {
        super(props);

        this.onChangeMudirNama = this.onChangeMudirNama.bind(this);
        this.onChangeMudirTempatLahir = this.onChangeMudirTempatLahir.bind(this);
        this.onChangeMudirTanggalLahir = this.onChangeMudirTanggalLahir.bind(this);
        this.onChangeMudirBulanLahir = this.onChangeMudirBulanLahir.bind(this);
        this.onChangeMudirTahunLahir = this.onChangeMudirTahunLahir.bind(this);
        this.onChangeKeluar = this.onChangeKeluar.bind(this);
        this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nama: '',
            tempat_tanggal_lahir_tempat: '',
            tempat_tanggal_lahir_tgl: '',
            tempat_tanggal_lahir_bln: '',
            tempat_tanggal_lahir_tahun: '',
            keluar: '',
            created_at: ''
        }
    }

    componentDidMount() {
        axios.get('https://rumahbelajaribnuabbas-api.herokuapp.com/mudirs/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    nama: response.data.data.nama,
                    tempat_tanggal_lahir_tempat: response.data.data.tempat_tanggal_lahir_tempat,
                    tempat_tanggal_lahir_tgl: response.data.data.tempat_tanggal_lahir_tgl,
                    tempat_tanggal_lahir_bln: response.data.data.tempat_tanggal_lahir_bln,
                    tempat_tanggal_lahir_tahun: response.data.data.tempat_tanggal_lahir_tahun,
                    keluar: response.data.data.keluar,
                    created_at: response.data.data.created_at,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeCreatedAt(e) {
        this.setState({
            created_at: !this.state.created_at
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        axios.delete('https://rumahbelajaribnuabbas-api.herokuapp.com/mudirs/'+this.props.match.params.id)
            .then(res => console.log(res.data));
        
        this.props.history.push('/mudirs');
    }

    render() {
        return (
            <div>
                <h3 align="center">Apakah Yakin Mau di Hapus Data ini???</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Nama: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nama}
                                onChange={this.onChangeMudirNama}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tempat Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tempat}
                                onChange={this.onChangeMudirTempatLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tanggal Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tgl}
                                onChange={this.onChangeMudirTanggalLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Bulan Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_bln}
                                onChange={this.onChangeMudirBulanLahir}
                                disabled />
                    </div>
                    <div className="form-group">
                        <label>Tahun Lahir: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tempat_tanggal_lahir_tahun}
                                onChange={this.onChangeMudirTahunLahir}
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
                        <input type="submit" value="Delete Mudir" className="btn btn-danger"/>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/mudirs/"  className="btn btn-primary" >Kembali</Link>
                    </div>
                </form>
            </div>
        )
    }
}