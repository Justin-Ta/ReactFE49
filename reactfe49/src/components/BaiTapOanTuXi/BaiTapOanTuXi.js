import React, { Component } from 'react'
import GamePlay from './GamePlay'

export default class BaiTapOanTuXi extends Component {
  luaChon= [
    {"id":1, "hienThi":"./img/keo.png"},
    {"id":2, "hienThi":"./img/bua.png"},
    {"id":3, "hienThi":"./img/bao.png"}
    ]
    render() {
        return (
          <div
            style={{
              background: 'url(./img/bgGame.png) center no-repeat',
              backgroundSize: "cover",
              height: "1100px",
            }}
          >
            <GamePlay luaChon={this.luaChon}/>
          </div>
        );
    }
}
