import React, { Component } from 'react'
import HeaderComponents from './HeaderComponents'
import Carousel from './Carousel'
import SmartPhone from './SmartPhone'
import Laptop from './Laptop'
import Promotion from './Promotion'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <HeaderComponents />
                <Carousel />
                <SmartPhone />
                <Laptop />
                <Promotion />
            </div>
        )
    }
}
