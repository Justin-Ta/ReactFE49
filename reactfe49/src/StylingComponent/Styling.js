import React, { Component } from 'react'
import Child from './Child'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <h3 className="title">Hello</h3>
                <p className="coon"> 123456</p>
                <Child />
            </div>
        )
    }
}
