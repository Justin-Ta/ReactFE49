import React, { Component } from 'react'

export default class CPU extends Component {
    render() {
        return (
          <div className="col-4 mt-4 text-center">
            <div className="speech-bubble">
              <img src="./img/keo.png" style={{ width: "40%" }} alt="" />
            </div>
            <img
              src="./img/playerComputer.png"
              style={{ width: "80%" }}
              alt=""
            />
          </div>
        );
    }
}
