import React, { Component } from 'react'

export default class RenderWithState extends Component {

    // Quản lý những giá trị thay đổi trên giao diện
    state= {
        login: false,
    }

    // Khai bao thuoc tinh
    // login= false;
    userName="Duy123";
    
    renderLogin= () =>{
        if(this.state.login){
        return <p>Hello {this.userName}</p>
        }
        return <div>
            <button className="btn btn-primary" onClick={()=>{
                this.handleLogin();
            }}
            >Login</button>
        </div>
    }

    handleLogin= ()=>{
        this.state.login=true;
        // Không được gán state trực tiếpPhương thức setState
        // setState là phương thức bất đồng bộ
        // 
        let newState={state:true};
        this.setState(newState);
        console.log(this.state.login);
        this.setState(newState, ()=>{
            console.log(this.state.login);
        });
    }

    // Component chi goi ham render 1 lan
    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p>: <div><button className="btn btn-primary">Login</button></div>} */}

                {this.renderLogin()}
            </div>
        )
    }
}
