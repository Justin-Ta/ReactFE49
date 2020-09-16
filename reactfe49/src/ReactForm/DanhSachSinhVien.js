import React, { Component } from 'react';
import {connect} from "react-redux";
import { chinhSuaSinhVienAction, xoaSinhVienAction } from '../redux/action/QuanLySinhVienAction';
import FormSinhVien from './FormSinhVien';

class DanhSachSinhVien extends Component {
    render() {
        return (
            <div>
                <FormSinhVien/>
                <div className="container-fluid">
                    <table className="table text-center">
                        <thead className="bg-dark text-white ">
                            <td>Mã Sinh Viên</td>
                            <td>Tên Sinh Viên</td>
                            <td>Email</td>
                            <td>Số Điện Thoại</td>
                            <td></td>
                        </thead>
                        <tbody>
                            {this.props.mangSinhVien.map((sinhVien, index)=>{
                                return <tr>
                                    <td>{sinhVien.maSinhVien}</td>
                                    <td>{sinhVien.tenSinhVien}</td>
                                    <td>{sinhVien.email}</td>
                                    <td>{sinhVien.soDienThoai}</td>
                                    <td>
                                        <button className="btn btn-primary mr-2" onClick={()=>{
                                            //Dispatch thông tin sinh viên, cập nhật lại state
                                            let action= chinhSuaSinhVienAction(sinhVien);
                                            this.props.dispatch(action);
                                        }}>Chỉnh Sửa</button>
                                        <button className="btn btn-danger mr-2" >Xóa</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
        
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        mangSinhVien:state.BaiTapQuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)

