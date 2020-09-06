import React, { Component } from 'react'
import style from './StylingGlass.scss'

export default class ThuKinh extends Component {
  render() {
    let Glasses = this.props.Glasses;
    return (
      <div className="col-12 col-md-6 col-lg-5">
        <div className="glassesItem">
          <img src="./img/model.jpg" style={{ width: "100%" }} alt="" />
          <div className="glasses">
            <img src={Glasses.url}/>
          </div>
          <div className="glassesContent">
            <h3>{Glasses.name}</h3>
            <p>{Glasses.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}