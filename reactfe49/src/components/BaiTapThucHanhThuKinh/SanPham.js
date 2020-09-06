import React, { Component } from 'react'
import style from './StylingGlass.scss'
export default class SanPham extends Component {
  renderGlasses = () => {
    return this.props.sanPham.map((sanPham, index) => {
      return (
        <div className="col-4 col-md-4 col-lg-3 m-3">
          <div className="productGlasses">
            <img src={sanPham.url} className="img-fluid"></img>
            <div className="form-group">
              <button className="btn mt-2 form-control" onClick={() => {
                    this.props.tryIt(sanPham);
                  }}>Try it</button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-7">
        <div
          className="product mt-5"
          style={{ background: "white", padding: "10px" }}
        >
          <div className="row">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}
