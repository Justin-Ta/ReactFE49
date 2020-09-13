import React, { Component } from 'react'
import Player from './Player'
import CPU from './CPU'
import styling from './StylingGame123.scss'

export default class GamePlay extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <Player luaChon={this.props.luaChon}/>
              <div className="col-4 mt-5 text-center">
                  <h3 style={{fontSize:"45px", fontWeight:"bold", color:"yellow"}}>I'm iron man, i love you 3000!!</h3>
                <p className="win" style={{fontSize:"45px", color:"green", margin:"0"}}>Win: 0</p>
                <p className="round" style={{fontSize:"45px", color:"green", margin:"0"}}>Round: 1</p>
                <div className="form-group">
                    <button className="btn btn-success">Play Game</button>
                </div>
              </div>
              <CPU />
            </div>
          </div>
        );
    }
}
