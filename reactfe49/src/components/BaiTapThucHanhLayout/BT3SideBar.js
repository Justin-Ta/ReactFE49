import React, { Component } from 'react'

export default class BT3SideBar extends Component {
    render() {
        return (
          <div
            style={{
              position: "fixed",
              height: "100%",
              width: "250px",
              position: "fixed",
              zIndex: "1",
              top: "0",
              left: 0,
              overflowX: "hidden",
              marginTop: "55px",
              paddingLeft: '20px'

            }}
            className="sidenav "
          >
            <h3>Shop Name</h3>
            <ul style={{ 
                listStyle: "none",
                padding: 0
                }}>
              <li>
                <a style={{ textDecoration: "none" }} href="#">
                  Category 1
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#">
                  Category 2
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#">
                  Category 3
                </a>
              </li>
            </ul>
          </div>
        );
    }
}
