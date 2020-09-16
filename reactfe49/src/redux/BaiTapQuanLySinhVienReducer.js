import { findAllByAltText } from "@testing-library/react";
import { act } from "react-dom/test-utils";
// import { act } from "react-dom/test-utils";
import { CAP_NHAT_SINH_VIEN, CHINH_SUA_SINH_VIEN, THEM_SINH_VIEN } from "./type/QuanLySinhVienType";

const initialState = {
  mangSinhVien: [
    {
      maSinhVien: 1,
      tenSinhVien: "Nguyen Van A",
      soDienThoai: "23123131",
      email: "anguyen123@gmail.com",
    },
  ],
  sinhVienSua: {
    maSinhVien: "",
    tenSinhVien: "",
    soDienThoai: "",
    email: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case THEM_SINH_VIEN: {
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      return { ...state };
    }
    case CHINH_SUA_SINH_VIEN: {
      state.sinhVienSua = action.sinhVien;
      return { ...state };
    }
    case CAP_NHAT_SINH_VIEN:{
      let mangSinhVienCapNhat=[...state.mangSinhVien];
      let index= mangSinhVienCapNhat.findIndex(sv=>sv.maSinhVien===action.sinhVienCapNhat.maSinhVien);
      if (index!=-1){
        mangSinhVienCapNhat[index]={...action.sinhVienCapNhat}
      }
     state.mangSinhVien=mangSinhVienCapNhat;
      return { ...state };

    }
    // case XOA_SINH_VIEN:{
    //   let sinhVienXoa= action.sinhVien;

    // }
    default:
      return state;
  }
};
