import React, { Component } from 'react'
import { connect } from 'react-redux';
import { rootReducer } from '../../redux/rootReducer';
import styling from './StylingGame123.scss'
class Player extends Component {
  renderLuaChon = () => {
    return this.props.luaChon?.map((luaChon, index) => {
      return <div key={index}
          className="col mx-2"
          style={{ border: "2px solid white", backgroundColor: "white" }}
        >
          <img src={luaChon.hienThi} className="img-fluid" onClick={()=>{
         this.props.playerChoice(luaChon);
      }}/>
        </div>
    });
  };
  render() {
    let { PlayersChoice } = this.props;
    return (
      <div className="col-4 mt-4 text-center">
        <div className="speech-bubble">
          {/* Thay hinh anh bang click */}
          <img src={PlayersChoice.hienThi} style={{ width: "40%" }} alt="" />
        </div>

        <img src="./img/player.png" style={{ width: "80%" }} alt="" />
        <div className="row">{this.renderLuaChon()}</div>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    playerChoice:(choice)=>{
      const action={
        type: "LUA_CHON",
        luaChon: choice
    }
    //Dùng hàm dispatch đưa nội dung lên redux (Reducer)
    dispatch(action);
    }
  }
}

const mapStateToProps= (state)=>{
  return{
    PlayersChoice: state.GamePlay123Reducer.PlayersChoice,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player)