import React from 'react';
import Demo from './components/Demo';
import DemoHeader from './components/DemoHeader';
import BaiTapLayout1 from './components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import ChangeCar from './RenderWithState/ChangeCar/ChangeCar';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapThucHanhLayout from './components/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import BaiTapRenderPhim from './RenderWithMap/BaiTapRenderPhim';
import DemoProp from './Prop/DemoProp';
import BaiTapQuanLySanPham from './Prop/BaiTapQuanLySanPham';
import BaiTapGioHang from './Prop/BaiTapGioHang/BaiTapGioHang';
import BaiTapThuKinh from './components/BaiTapThucHanhThuKinh/BaiTapThuKinh';
import BaiTapGioHangRedux from './components/BaiTapRedux/BaiTapGioHangRedux';
import BaiTapOanTuXi from './components/BaiTapOanTuXi/BaiTapOanTuXi';
import DanhSachSinhVien from './ReactForm/DanhSachSinhVien'
import LifeCycle from './LifeCycle/LifeCycle';



function App() {
  // let mangSP=[
  //   { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
  //   { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
  //   { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
  //   { maSP: 4, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }
  //   ]

    // let mangSP= [
    //   { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    //   { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    //   { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
    //   ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <BaiTapQuanLySanPham mangSP={mangSP}/> */}
        {/* <BaiTapGioHang/> */}
        {/* <BaiTapThuKinh/> */}
        {/* <BaiTapGioHangRedux/> */}
        {/* <BaiTapOanTuXi/> */}
        <DanhSachSinhVien/>
        {/* <LifeCycle/> */}
      </header>
    </div>
  );
}

export default App;
