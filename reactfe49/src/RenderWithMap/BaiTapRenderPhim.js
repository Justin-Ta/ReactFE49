import React, { Component } from 'react'
import './styling.scss'
import data from './DataFilms.json';
export default class BaiTapRenderPhim extends Component {
    
   renderFilms=()=>{
return data.map((item, index)=>{
    return <div className="col-2">
        <div class="card text-left">
          <img class="card-img-top" src={item.hinhAnh} style={{height:250}}/>
          <div class="card-body">
<h4 class="card-title" style={{height:50}}>{item.tenPhim.length> 20 ? <span>{item.tenPhim.substr(0,20)}...</span>:<span>{item.tenPhim}</span>}</h4>
<p class="card-text" style={{height:75}}>{item.moTa.length> 50 ? <span>{item.moTa.substr(0,50)}</span>:<span>{item.moTa}</span>}</p>
          </div>
        </div>
    </div>
})
   }
    render() {
        return (
          <div className="background">
              <div className="background2">
              <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <a className="dropdown-item" href="#">
                        Action 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Action 2
                      </a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>

            <h3 className="text-center">Danh Sách Phim</h3>
            <div className="row">{this.renderFilms()}</div>
              </div>
            
          </div>
        );
    }
}
