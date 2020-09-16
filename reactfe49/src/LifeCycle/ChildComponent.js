import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor child');
        this.state={
          
        }
    }
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps chid');
        return currentState;

    }
    shouldComponentUpdate(newProps, newState){
        return true;
    }
    render() {
        console.log('render Child')
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount child')
    }
}
