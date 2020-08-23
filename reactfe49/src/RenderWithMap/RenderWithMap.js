import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList=[
        {id=1, name:'iphone X', price:1000},
        {id=2, name:'Samsung Note 10plus', price:3000},
        {id=3, name:'Htc m10', price:2000}
    ]

    renderProduct= ()=> {
    // let content=[];
    // for (let i=0; i<= this.producList.length; i++){
    //         let product= this.producList[i];
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

    let arrJSXProduct= this.producList.map((product, index)=> {
    return <div key={index} className="col-4">
    <div className="card text-left">
    <img className="card-img-top" src="https://picsum/photos/200/200" alt />
    <div className="card-body">
    <h4 className="card-title">{'{'}product.name{'}'}</h4>
    <p className="card-text">{'{'}product.price{'}'}</p>
    </div>
    </div>
    </div>;
    })
    return arrJSXProduct;
    }
    
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}

