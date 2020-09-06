import React, { Component } from 'react'
import {connect} from "react-redux"
import { rootReducers } from '../../redux/rootReducer';

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index)=>{
      return <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} style={{ width: "50px" }} />
          </td>
          <td>{spGioHang.tenSP}</td>
            
          <td>
          <button className="btn btn-danger mr-3" onClick={()=>{
              this.props.tangGiamSoLuong(spGioHang.maSP, false)
          }}>-</button>
              {spGioHang.soLuong}
          <button className="btn btn-primary ml-3" onClick={()=>{
              this.props.tangGiamSoLuong(spGioHang.maSP, true)
          }}>+</button>
          </td>
          <td>{spGioHang.gia.toLocaleString()}</td>
          <td>{(spGioHang.gia * spGioHang.soLuong).toLocaleString()}</td>
          <td><button className="btn btn-danger" onClick={()=>{
              this.props.xoaGioHang(spGioHang.maSP)
          }}>Xóa</button></td>
        </tr>
    });
  };
  render() {
    console.log(this.props.gioHang);
    return (
      <div>
        <table className="table">
          <thead>
            <th>Mã Sản Phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </thead>
          <tbody>
              {this.renderGioHang()}
              </tbody>
            <tfoot>
              <td colSpan="5"></td>
              <td >
                Tổng Tiền
              </td>
              <td style={{fontWeight:"bold"}}>
                {this.props.gioHang.reduce((tongTien, spGH, index)=>{
                  return tongTien+=spGH.soLuong * spGH.gia
                },0).toLocaleString()}
              </td>
              </tfoot>  
        </table>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        xoaGioHang: (maSP)=>{
                const action={
                    type: "XOA_GIO_HANG", //Thuộc tính bắt buộc
                    maSP: maSP //Nội dung đưa lên store của redux
                }
                //Dùng hàm dispatch đưa nội dung lên redux (Reducer)
                dispatch(action);
        },
        tangGiamSoLuong: (maSP, tangGiam)=>{
            const action={
                type: "TANG_GIAM_SOLUONG", //Thuộc tính bắt buộc
                maSP: maSP, //Nội dung đưa lên store của redux
                tangGiam,
            }
            //Dùng hàm dispatch đưa nội dung lên redux (Reducer)
            dispatch(action);
        }
    }
}
// Phương thức biến đổi stateRedux => props của component
const mapStateToProps =(state)=>{
    return{
        gioHang: state.GioHangReducer.gioHang
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)
