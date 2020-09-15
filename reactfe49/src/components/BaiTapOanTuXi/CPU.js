import React, { Component } from 'react'
import { connect } from 'react-redux';

class CPU extends Component {
    render() {
      let {CPUChoice}=this.props;
        return (
          <div className="col-4 mt-4 text-center">
            <div className="speech-bubble">
              <img src={CPUChoice.hienThi} style={{ width: "40%" }} alt="" />
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
const mapStateToProps= (state)=>{
  return{
    CPUChoice: state.GamePlay123Reducer.CPUChoice,
  }
}
export default connect(mapStateToProps)(CPU);
