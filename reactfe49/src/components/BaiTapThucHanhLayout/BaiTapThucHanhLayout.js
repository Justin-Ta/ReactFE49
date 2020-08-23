import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BTContent from './BTContent'
import BT3SideBar from './BT3SideBar'
import BTFooter from './BTFooter'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <div>
                    <BT3Header/> 
                </div>
                
                <div className='row'>
                    <div className='col-2'>
                    <BT3SideBar/>
                    </div>
                    <div className='col-7'>
                    <BTContent/>
                    </div>
                </div>
                <div>
                    <BTFooter/>
                </div>
            </div>
        )
    }
}
