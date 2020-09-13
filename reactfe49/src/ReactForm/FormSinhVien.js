import React, { Component } from 'react'
import {connect} from "react-redux";
import swal from 'sweetalert2';
import { THEM_SINH_VIEN } from '../redux/type/QuanLySinhVienType';
class FormSinhVien extends Component {
   state={
       values:{
        maSinhVien:"",
        tenSinhVien:"",
        soDienThoai:"",
        email:"",
        errMaSinhVien:"",
       },
       errors:{
        maSinhVien:"",
        tenSinhVien:"",
        soDienThoai:"",
        email:"",
        errMaSinhVien:"",
       }
       
   }
   handleChangeInput=(event)=>{
    // let value = event.target.value;
    // let name= event.target.name;
    let {value, name}= event.target;
    let type= event.target.getAttribute("type_");
    let newValues={...this.state.values, [name]:value};
    // newValues={
    //     ...newValues,
    //     [name]:value
    // }
    let newErrors={...this.state.errors, [name]:value.trim()==="" ? `${name} không được để trống!`: ""};

    const regexEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(type==="email"){
        if (!regexEmail.test(value)){
            newErrors[name]="Email không hợp lệ"
        }
    }

    this.setState({
        values: newValues,
        errors: newErrors
    }, ()=>{
      console.log(this.state);
    });
   }

   handleSubmit=(event)=>{
    event.preventDefault(); //Chặn sự kiện submit của trình duyệt
    let valid= true;
    for (let key in this.state.value){
        if (this.state.value[key].trim()===""){
            valid= false;
        }
    }

    for (let key in this.state.errors) {
        if (this.state.errors[key].trim()!==""){
            valid= false;
        }
    }
    if (!valid){
        swal.fire(
            'Thất bại?',
            'Dữ liệu không hợp lệ',
            'error'
          )
          return ;
        
    }
    const action= themSinhVienAction(this.state.values)

 
    // Dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
    this.props.dispatch(action);
   }
    render() {
        return (
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <div className="card">
              <div className="card-header">Thong Tin Sinh Vien</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <p className="card-text">Ma Sinh Vien</p>
                      <input
                        className="form-control"
                        name="maSinhVien"
                        onChange={this.handleChangeInput}
                      ></input>
                    <p className="text-danger">{this.state.errors.maSinhVien}</p>

                      <p className="card-text">Ten Sinh Vien</p>
                      <input
                        className="form-control"
                        name="tenSinhVien"
                        onChange={this.handleChangeInput}
                      ></input>
                      <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <p className="card-text">Email</p>
                      <input
                        type_="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleChangeInput}
                      ></input>
                      <p className="text-danger">{this.state.errors.email}</p>
                      <p className="card-text">So Dien Thoai</p>
                      <input
                        className="form-control"
                        name="soDienThoai"
                        onChange={this.handleChangeInput}
                      ></input>
                      <p className="text-danger">{this.state.errors.soDienThoai}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right">
                    <button type="submit" className="btn btn-success">
                      Them Sinh Vien
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="card-footer text-muted">Footer</div> */}
            </div>
          </form>
        );
    }
}


export default connect(null)(FormSinhVien)