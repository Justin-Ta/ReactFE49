import { act } from "react-dom/test-utils";
import swal from 'sweetalert2';

const stateDefault={
    mangLuaChon:[
        {"id":1, "hienThi":"./img/keo.png"},
        {"id":2, "hienThi":"./img/bua.png"},
        {"id":3, "hienThi":"./img/bao.png"}
    ],
    PlayersChoice:{"id":1, "hienThi":"./img/keo.png"},
    CPUChoice: {"id":2, "hienThi":"./img/bua.png"},
    soBanThang: 0,
    soTranDau: 0,
}

export const GamePlay123Reducer= (state= stateDefault, action)=>{
    switch (action.type){
        case "LUA_CHON":{
            let luaChon={
                id: action.luaChon.id,
                hienThi: action.luaChon.hienThi,
            }
            state.PlayersChoice=luaChon;
            return {...state};
        }
        case "PLAY_GAME":{
            // alert('1')
            let luaChonCPU= Math.floor(Math.random()*3);
            console.log("Random:", luaChonCPU);
            state.CPUChoice= state.mangLuaChon[luaChonCPU];
            let Player={...state.PlayersChoice};
            let CPU= {...state.CPUChoice};
            if((Player.id>CPU.id && (Player.id-CPU.id)===1)|| (Player.id<CPU.id && (CPU.id-Player.id)===2)){
                state.soBanThang++;
                swal.fire(
                    'You win',
                    'Congratulation!',
                    'success'
                  )
            }else if (Player.id===CPU.id){
                swal.fire(
                    'Draw',
                    'Try again!',
                  )
            }
            else{
                swal.fire(
                    'You lose',
                    'Try again!',
                    'error'
                  )
            }
           state.soTranDau++;
           return {...state};
        }
        default:  return {...state};
    }
    return { ...state };
}