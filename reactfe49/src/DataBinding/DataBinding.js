import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Thuộc tính
    product ={
        id: 1,
        name: 'iphoneX',
        price: 1000,
    }
// Phương thức được khai báo bên ngoài render()
    renderCard= ()=>{
return <div className="card text-left">
  <img className="card-img-top" src="http://picsum.photos/200/200" alt />
  <div className="card-body">
    <h4 className="card-title">{this.product.name}</h4>
    <p className="card-text">{this.product.price}</p>
  </div>
</div>

    }
    render() {
        // Binding data
        let title='Hello FontEnd 49';
        let photo= 'http://picsum.photos/200/200';

        // Binding function
        let renderImg = ()=> {
            return <img src='https://picsum.photos/100/100'></img>
        }

        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={photo}></img>
                <img src='./img/logo.jpg'></img>
                <div>
                    {renderImg()}
                    {this.renderCard()}
                </div>

            </div>
        )
    }
}
