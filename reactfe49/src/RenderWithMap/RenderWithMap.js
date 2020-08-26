import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        {id:1,name:'Iphone X',price:1000},
        {id:2,name:'Samsung Note 10plus',price:3000},
        {id:3,name:'Htc m10',price:2000},
    ]

    renderTable=()=>{
        return this.productList.map((item, index)=>{
            return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button className="btn-danger">Delete</button></td>
            </tr>
        })
    }

    renderProduct=()=>{
    // let content=[];
    // for (let i=0; i<= this.productList.length; i++){
    //         let product= this.productList[i];
    //         let cardProduct= <div key={i} className="col-4">
    //   <div className="card text-left">
    //     <img className="card-img-top" src="https://picsum/photos/200/200" alt />
    //     <div className="card-body">
    //       <h4 className="card-title">{'{'}product.name{'}'}</h4>
    //       <p className="card-text">{'{'}product.price{'}'}</p>
    //     </div>
    //   </div>
    // </div>;
    // content.push({cardProduct});
    //     }
    //     return content;

    let arrJSXProduct= this.productList.map((product, index)=> {
    return <div key={index} className="col-4">
    <div className="card text-left">
    <img className="card-img-top" src="https://picsum.photos/200/200" alt />
    <div className="card-body">
    <h4 className="card-title">{product.name}</h4>
    <p className="card-text">{product.price}</p>
    </div>
    </div>
    </div>;
    })
    return arrJSXProduct;
    }
    
    
    render() {
        return (
          <div className="container">
            {/* <div className="row">{this.renderProduct()}</div> */}
            <h3 className="text-center">Danh sach san pham</h3>
            <table>
                {this.renderTable()}
            </table>
          </div>
        );
    }
}

