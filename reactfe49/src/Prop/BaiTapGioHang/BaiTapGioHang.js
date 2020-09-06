import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapGioHang extends Component {
    state={
        gioHang:[
            // {maSP:1, tenSP:'VinSmart Live', hinhAnh:'./img/vsphone.jpg', gia: 5700000, soLuong:1 }
        ]
    }
    mangSP= [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
            { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
            { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
            ]
    renderThemGioHang=(spClick)=>{
        let spGioHang={
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh,
            gia: spClick.gia,
            soLuong: 1
        }
        let gioHangUpdate= this.state.gioHang;
        
        // Tìm maSP có trong giỏ hàng hay không, nếu có cộng thêm số lượng ngược lại thêm item đó vào 
        let index= gioHangUpdate.findIndex(spGH=> spGH.maSP=== spGioHang.maSP);
        if (index!=-1){
            gioHangUpdate[index].soLuong++;
        }
        else{
            gioHangUpdate.push(spGioHang)
        }
        this.setState({
           gioHang: gioHangUpdate
        })
    }

    xoaGioHang=(maSP)=>{
        // let gioHangUpdate= this.state.gioHang;
        // // Xóa giỏ hàng
        // let index= gioHangUpdate.findIndex(spGH=> spGH.maSP===maSP);
        // if (index!=-1){
        //     gioHangUpdate.splice(index,1);
        // }
// Filter lọc ra những sp khác mã đã bấm click
        this.setState({
            gioHang: this.state.gioHang.filter(sp=> sp.maSP!==maSP)
         })
    }

    tinhSoLuongGioHang=()=>{
        return this.state.gioHang.reduce((soLuong, spGH, index)=>{
            return soLuong += spGH.soLuong;
        },0)
    }

    tangGiamSoLuong=(maSP, tangGiam)=>{
// tangGiam== true: tăng
// Ngược lại tangGiam== false: giảm
        let gioHangUpdate=this.state.gioHang;
        let index= gioHangUpdate.findIndex(sp=>sp.maSP=== maSP);
        if (index!==1){
            if (tangGiam){
                gioHangUpdate[index].soLuong++;
            }
            else{
                if (gioHangUpdate[index].soLuong>1){
                    gioHangUpdate[index].soLuong--;
                }
                else{
                    this.xoaGioHang(maSP);
                }
            }
        }
        this.setState({
            gioHangUpdate:gioHangUpdate,
        })
    }
    render() {
        return (
            <div className="container">
                <h3> Bai Tap Gio Hang</h3>
                <div className="gioHang">
                    <div className="text-right">
                        <span  className='text-danger' data-toggle="modal" data-target="#modelId">Gio Hang ({this.tinhSoLuongGioHang()})</span>
                    </div>
                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
                </div>
                <div className="danhSachSanPham">
                <DanhSachSanPham mangSP={this.mangSP} renderThemGioHang={this.renderThemGioHang} />
                </div>
                
            </div>
        )
    }
}
