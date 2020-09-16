import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert2";
import { themSinhVienAction, capNhatThongTinAction } from "../redux/action/QuanLySinhVienAction";
class FormSinhVien extends Component {
  state = {
    values: {
      maSinhVien: "",
      tenSinhVien: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSinhVien: "",
      tenSinhVien: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChangeInput = (event) => {
    // let value = event.target.value;
    // let name= event.target.name;
    let { value, name } = event.target;
    let type = event.target.getAttribute("type_");
    let newValues = { ...this.state.values, [name]: value };
    // newValues={
    //     ...newValues,
    //     [name]:value
    // }
    let newErrors = {
      ...this.state.errors,
      [name]: value.trim() === "" ? `${name} không được để trống!` : "",
    };

    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (type === "email") {
      if (!regexEmail.test(value)) {
        newErrors[name] = "Email không hợp lệ";
      }
    }

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); //Chặn sự kiện submit của trình duyệt
    let valid = true;

    for (let key in this.state.values) {
      if (this.state.values[key].trim() === "") {
        valid = false;
      }
    }
    for (let key in this.state.errors) {
      if (this.state.errors[key].trim() !== "") {
        valid = false;
      }
    }
    console.log("Valid", valid);

    if (!valid) {
      swal.fire("Thất bại", "Dữ liệu không hợp lệ !", "error");
      return;
    }

    const action = themSinhVienAction(this.state.values);

    // Dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
    this.props.dispatch(action);
    swal.fire("Thành công", "Thêm sinh viên thành công !", "success");
  };

  componentWillReceiveProps(newProps) {
    
    // Life cycle chạy sau khi props thay đổi và trước khi render
    // componet không chạy ại khi setState
    // mỗi lần nội dung bấm chỉnh sửa thì props thay đổi > new props chính là props mới (state.sinhVienSua của render)> đem props mới gán vào this.state value
    this.setState({
      values: newProps.sinhVienSua,
    });
  }
  render() {
    let sinhVienSua = this.state.values;
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
                    value={sinhVienSua.maSinhVien}
                  ></input>
                  <p className="text-danger">{this.state.errors.maSinhVien}</p>

                  <p className="card-text">Ten Sinh Vien</p>
                  <input
                    className="form-control"
                    name="tenSinhVien"
                    onChange={this.handleChangeInput}
                    value={sinhVienSua.tenSinhVien}
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
                    value={sinhVienSua.email}
                  ></input>
                  <p className="text-danger">{this.state.errors.email}</p>
                  <p className="card-text">So Dien Thoai</p>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                    value={sinhVienSua.soDienThoai}
                  ></input>
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-right">
                <button type="submit" className="btn btn-success">
                  Thêm Sinh Viên
                </button>
                <button type="button" className="btn btn-success mx-3" onClick={()=>{
                  // dispatch giá trị sau khi người dung thay đổi lên redux
                  let action= capNhatThongTinAction(this.state.values)
                  this.props.dispatch(action)
                }}>
                  Cập Nhật Sinh Viên
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

const mapStateToProps = (state) => {
  return {
    sinhVienSua: state.BaiTapQuanLySinhVienReducer.sinhVienSua,
  };
};
export default connect(mapStateToProps)(FormSinhVien);
