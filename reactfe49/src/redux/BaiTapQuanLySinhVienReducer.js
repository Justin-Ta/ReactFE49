// import { act } from "react-dom/test-utils";
import {THEM_SINH_VIEN } from "./type/QuanLySinhVienType";

const initialState = {
  mangSinhVien: [
    {
      maSinhVien: 1,
      tenSinhVien: "Nguyen Van A",
      soDienThoai: "23123131",
      email: "anguyen123@gmail.com",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case THEM_SINH_VIEN: {
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      return { ...state };
    }
    default:
      return state;
  }
};
