import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang'

export default class DanhSachSanPham extends Component {
    renderSP=()=>{
        return this.props.mangSP.map((sp, index)=>{
            return <div className="col-4">
                <SanPhamGioHang sp={sp} renderThemGioHang={this.props.renderThemGioHang} />
            </div>
        })
     }

    render() {
        return (
            <div className="row">
                {this.renderSP()}
            </div>

        )
    }
}
