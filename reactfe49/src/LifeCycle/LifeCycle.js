import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import headerLifeCycle from "./headerLifeCycle";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sinhVien:{
          id: 1,
          name: 'Duy'
      }, 
      number: 1,
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }
  render() {
    console.log("render component cha");
    return (
      <div className="container">
          
        <h1>{this.state.sinhVien.name}</h1>
        <button
          onClick={() => {
              let sinhVien =this.state.sinhVien;
              sinhVien.name= 'TQD'
            this.setState({
              sinhVien: sinhVien,
            });
          }}
        >
          +
        </button>

        <button onClick={()=>{
            this.setState({
                number: this.state.number+1
            })
        }}>Set Number</button>
        {/* {this.state.render<3 ? <headerLifeCycle sinhVien={this.state.sinhVien}/>:""} */}
        <headerLifeCycle sinhVien={this.state.sinhVien}/>
        <ChildComponent />
        
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(propsCu, stateCu) {
    console.log("componentDidUpdate");
  }
}
