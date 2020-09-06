const stateDefault= {
    gioHang: [{maSP:1, tenSP:'VinSmart Live', hinhAnh:'./img/vsphone.jpg', gia: 5700000, soLuong:1}]
}

export const GioHangReducer=(state= stateDefault, action)=>{
    switch (action.type){
        case "THEM_GIO_HANG":{
            // xử lý trả về state mới reder lại tất cả component theo dỡi state này
            let spGioHang={
                maSP: action.sanPham.maSP,
                tenSP: action.sanPham.tenSP,
                hinhAnh: action.sanPham.hinhAnh,
                soLuong: 1,
                gia: action.sanPham.gia,
            };
            // Xử lý thêm giỏ hàng
            const gioHangUpdate=[...state.gioHang]
            const index= gioHangUpdate.findIndex(spGH=> spGH.maSP===spGioHang.maSP);
            if(index !== -1){
                gioHangUpdate[index].soLuong += 1;
            }else{
                gioHangUpdate.push(spGioHang)
            };
            state.gioHang= gioHangUpdate;
            return {...state};
        }
        case "XOA_GIO_HANG":{
            const gioHangUpdate=[...state.gioHang];
            // Xử lý xóa giỏ hàng
            const index =gioHangUpdate.findIndex(spGH=>spGH.maSP===action.maSP);
            if(index!== -1){
                gioHangUpdate.splice(index,1);
            }
            state.gioHang=gioHangUpdate;
            return {...state};
        }
        case "TANG_GIAM_SOLUONG":{
            const gioHangUpdate=[...state.gioHang];
            const index =gioHangUpdate.findIndex(spGH=>spGH.maSP===action.maSP);
            if (action.tangGiam){
                gioHangUpdate[index].soLuong++;
            }else{
                if (gioHangUpdate[index].soLuong>1){
                    gioHangUpdate[index].soLuong--;
                    
                }
                else{
                    // gioHangUpdate.splice(index,1);
                    alert('Số lượng không được nhỏ hơn 1')
                }
            }
            state.gioHang=gioHangUpdate;
            return {...state};
        }
        default:  return {...state};
    }
}