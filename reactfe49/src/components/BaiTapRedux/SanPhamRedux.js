import React, { Component } from 'react'
import {connect} from 'react-redux';
import BaiTapGioHangRedux from './BaiTapGioHangRedux';

class SanPhamRedux extends Component {
    render() {
        let {sanPham}=this.props;
        return (
            <div>
  <div className="card text-left">
    <img className="card-img-top img-fluid" style={{width:"250px"}} src={sanPham.hinhAnh} alt />
    <div className="card-body">
        <h4 className="card-title">{sanPham.tenSP}</h4>
      <p className="card-text">{sanPham.gia.toLocaleString()}</p>
      <button className="btn btn-success" onClick={()=>{
          this.props.themGioHang(sanPham);
      }}>Thêm Sản Phẩm</button>
    </div>
  </div>
</div>
        )
    }
}
const mapDispatchToProps =(dispatch)=> {
    // Dispatch là hàm giống vói hàm setState
    return{
        themGioHang: (sanPhamClick)=>{
        console.log("sanPhamClick", sanPhamClick);
        const action={
            type: "THEM_GIO_HANG", //Thuộc tính bắt buộc
            sanPham: sanPhamClick //Nội dung đưa lên store của redux
        }
        //Dùng hàm dispatch đưa nội dung lên redux
        dispatch(action);
        }
    }   
}

export default connect (null, mapDispatchToProps)(SanPhamRedux)