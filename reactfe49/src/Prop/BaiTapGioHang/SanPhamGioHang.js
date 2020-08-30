import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    
    render() {
        let sanPham=this.props.sp;
        return (
          <div>
            <div className="card">
              <img className="card-img-top" src={sanPham.hinhAnh} alt />
              <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                <button
                  className="btn btn-success"
                  onClick={()=>{
                      this.props.renderThemGioHang(sanPham);
                  }}
                >
                  Thêm giỏ hàng
                </button>
              </div>
            </div>
          </div>
        );
    }
}
