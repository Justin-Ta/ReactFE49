import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {
    renderSanPham=()=>{
        return this.props.mangSanPham.map((sanPham, index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham}/>
            </div>
        })
    }
    render() {
        
        return (
            <div>
                <h3 className="text-center display-4">Bài Tập Giỏ Hàng Redux</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
