import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {
    render() {
        return (
            <div>
                <p>Họ và Tên: {this.props.sinhVien.hoTen}</p>
                <p>Lớp: {this.props.sinhVien.lop}</p>
                <img src={this.props.sinhVien.hinhAnh}/>
            </div>
        )
    }
}
