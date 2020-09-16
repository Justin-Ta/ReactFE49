import {THEM_SINH_VIEN, CHINH_SUA_SINH_VIEN, CAP_NHAT_SINH_VIEN} from '../type/QuanLySinhVienType'

export const themSinhVienAction= (sinhVien) => {
    return {
        type: THEM_SINH_VIEN,
        sinhVien
    }
}
export const chinhSuaSinhVienAction=(sinhVien)=> {
    return{
        type: CHINH_SUA_SINH_VIEN,
        sinhVien,
    }
}
export const capNhatThongTinAction=(sinhVienCapNhat)=> {
    return{
        type: CAP_NHAT_SINH_VIEN,
        sinhVienCapNhat,
    }
}
// export const xoaSinhVienAction = (sinhVien) => {
//   return {
//     type: XOA_SINH_VIEN,
//     sinhVien,
//   }
// };
// {return } => ()
// rxaction