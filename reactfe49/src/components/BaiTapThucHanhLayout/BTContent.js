import React, { Component } from 'react'
import BTCard from './BTCard'
import BTCarousel from './BTCarousel'

export default class BTContent extends Component {
    render() {
        return (
            <div style={{marginTop:'55px'}}>
                <div className='my-5'>
                    <BTCarousel/>
                </div>
                <div className='row'>
                 <BTCard/>
                 <BTCard/>
                 <BTCard/>
                 <BTCard/>
                 <BTCard/>
                 <BTCard/>
                </div>
            </div>
        )
    }
}
