import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let sanPham=this.props.sp;
        return (
          <div>
            <div className="card text-dark">
              <img
                className="card-img-top img-fluid"
                src={sanPham.hinhAnh}
                style={{ height: 300 }}
                alt
              />
              <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.gia}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.props.xemChiTiet(sanPham);
                  }}
                >
                  Chi Tiết
                </button>
                <button
                className="btn btn-danger"
                  onClick={() => {
                    
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
