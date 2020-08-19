import React, { Component } from 'react'

export default class HandleEvent extends Component {
    // Phương thức sự kiện
    handleClick= () =>{
        alert('Hello');
    }
    showInfo= (name)=>{
        alert(`name: ${name}`);
    }
    render() {
        return (
            <div className="container">
                {/* HandleClick không chứa (), nghĩa là chưa được gọi cho đến khi được click 
                Truyền callback function*/}
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={()=>{
                    alert('Hhh');
                }}>Show Message</button>
                
                <br></br>
                <button onClick={()=>{
                    this.showInfo('Duy')
                }}>Show info</button>
                </div>
        )
    }
}
