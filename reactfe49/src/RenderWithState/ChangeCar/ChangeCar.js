import React, { Component } from 'react'

export default class ChangeCar extends Component {
    
    state={
        imgCar:'./img/black-car.jpg'
    }
    
    handleChangeColor = (imgColor)=> {
        this.setState({
            imgCar:`./img/${imgColor}-car.jpg`
        })
    }

    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-md-8">
                <img src={this.state.imgCar} style={{ width: "100%" }} />
              </div>
              <div className="col-12 col-md-4">
                <p>Exterior color</p>
                <button
                  class="btn p-2 mt-2"
                  style={{ borderColor: "black", width: "100%" }}
                  onClick={()=>{
                    this.handleChangeColor('black');
                }}
                >
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="./img/icon-black.jpg"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-9">
                      <p
                        tyle={{ fontSize: "25px" }}
                        style={{ marginBottom: "0", fontWeight: "bold" }}
                      >
                        Crystal Black
                      </p>
                      <p style={{ marginBottom: "0" }}>Pear</p>
                    </div>
                  </div>
                </button>

                <button
                  class="btn p-2 mt-2"
                  style={{ borderColor: "black", width: "100%" }}
                  onClick={()=>{
                    this.handleChangeColor('steel');
                }}
                >
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="./img/icon-steel.jpg"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-9">
                      <p
                        tyle={{ fontSize: "25px" }}
                        style={{ marginBottom: "0", fontWeight: "bold" }}
                      >
                        Modern Steel
                      </p>
                      <p style={{ marginBottom: "0" }}>Metallic</p>
                    </div>
                  </div>
                </button>

                <button
                  class="btn p-2 mt-2"
                  style={{ borderColor: "black", width: "100%" }}
                  onClick={()=>{
                    this.handleChangeColor('silver');
                }}
                >
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="./img/icon-silver.jpg"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-9">
                      <p
                        tyle={{ fontSize: "25px" }}
                        style={{ marginBottom: "0", fontWeight: "bold" }}
                      >
                        Lunar Silver
                      </p>
                      <p style={{ marginBottom: "0" }}>Metallic</p>
                    </div>
                  </div>
                </button>

                <button
                  class="btn p-2 mt-2"
                  style={{ borderColor: "black", width: "100%" }}
                  onClick={()=>{
                    this.handleChangeColor('red');
                }}
                >
                  <div className="row">
                    <div className="col-3">
                      <img src="./img/icon-red.jpg" style={{ width: "100%" }} />
                    </div>
                    <div className="col-9">
                      <p
                        tyle={{ fontSize: "25px" }}
                        style={{ marginBottom: "0", fontWeight: "bold" }}
                      >
                        Rallye Red
                      </p>
                      <p style={{ marginBottom: "0" }}>Metallic</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        );
    }
}
