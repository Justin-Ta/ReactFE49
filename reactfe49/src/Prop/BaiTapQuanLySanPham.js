import React, { Component } from 'react'

export default class BaiTapQuanLySanPham extends Component {

state={
    sanPhamChiTiet: { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
}

                 renderSP = () => {
                   return this.props.mangSP?.map((sp, index) => {
                     return (
                       <div key="{index}" className="col-4">
                         <div className="card text-dark">
                           <img
                             className="card-img-top img-fluid"
                             src={sp.hinhAnh}
                             style={{ height: 300 }}
                             alt
                           />
                           <div className="card-body">
                             <h4 className="card-title">{sp.tenSP}</h4>
                             <p className="card-text">{sp.gia}</p>
                             <button className="btn btn-primary" onClick={()=>{this.xemChiTiet(sp)
                             }}>
                               Chi Tiết
                             </button>
                           </div>
                         </div>
                       </div>
                     );
                   });
                 };

                 xemChiTiet=(spClick)=>{
                    this.setState({
                        sanPhamChiTiet: spClick,
                    })
                 }
                 render() {
                     let {maSP, tenSP, hinhAnh, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom}=this.state.sanPhamChiTiet
                   return (
                     <div className="container">
                       <h3>Danh Sách Sản Phẩm</h3>
                       <div className="row">{this.renderSP()}</div>
                       <hr />
                       <div className="row">
                         <div className="col-4">
                           <h3 className="text-center">{tenSP}</h3>
                           <img src={hinhAnh} className="img-fluid"></img>
                         </div>

                         <div className="col-8">
                           <h3>Thông Số Kỹ Thuật</h3>
                           <table className="table">
                             <thead>
                               <tr>
                                 <th>Màn hình: </th>
                                 <th>{manHinh}</th>
                               </tr>

                               <tr>
                                 <th>Hệ điều hành: </th>
                                 <th>{heDieuHanh}</th>
                               </tr>

                               <tr>
                                 <th>Camera trước: </th>
                                 <th>{cameraTruoc}</th>
                               </tr>

                               <tr>
                                 <th>Camera sau: </th>
                                 <th>{cameraSau}</th>
                               </tr>

                               <tr>
                                 <th>RAM: </th>
                                 <th>{ram}</th>
                               </tr>

                               <tr>
                                 <th>ROM: </th>
                                 <th>{rom}</th>
                               </tr>
                             </thead>
                           </table>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
