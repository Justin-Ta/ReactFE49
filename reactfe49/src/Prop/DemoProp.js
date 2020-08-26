import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien.js'

export default class DemoProp extends Component {
// This.props: là thuộc tính có sẵn của component, lưu ý L dùng để nhận giá tị từ component cha truyền vào, và không thay đổi được giá trị đó.
sinhVien={
    hoTen:'DuyTa',
    hinhAnh: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    lop:'Fefe4',
}
    render() {
        return (
            <div>
                {/* <ThongTinSinhVien hoTen="Duy" lop="FE49"/>
                <ThongTinSinhVien hoTen="Duy" lop="FE2423449"/> */}
                <ThongTinSinhVien sinhVien={this.sinhVien}/>

            </div>
        )
    }
}
