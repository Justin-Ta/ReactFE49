import React, { Component } from 'react'
import Player from './Player'
import CPU from './CPU'
import {connect} from 'react-redux'
import styling from './StylingGame123.scss'

class GamePlay extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <Player luaChon={this.props.luaChon}/>
              <div className="col-4 mt-5 text-center">
                  <h3 style={{fontSize:"40px", fontWeight:"bold", color:"yellow"}}>I'm iron man, i love you 3000!!</h3>
                <p className="win" style={{fontSize:"40px", color:"green", margin:"0"}}>Win: {this.props.BanThang}</p>
                <p className="round" style={{fontSize:"45px", color:"green", margin:"0"}}>Round: {this.props.TranDau}</p>
                <div className="form-group">
                    <button className="btn btn-success" onClick={(()=>{
                      this.props.playGame()
                    })}>Play Game</button>
                </div>
              </div>
              <CPU />
            </div>
          </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    playGame:()=>{
    const action={
        type: "PLAY_GAME",
    }
    dispatch(action)
  }
  }
}

const mapStateToProps= (state)=>{
  return{
    BanThang: state.GamePlay123Reducer.soBanThang,
    TranDau: state.GamePlay123Reducer.soTranDau,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GamePlay)
