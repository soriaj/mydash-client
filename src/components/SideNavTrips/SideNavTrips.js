import React, { Component } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'

class SideNavTrips extends Component {
    render() {
        return (
            <>
            <div className='list-item'>
                <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                <span className='list-item-title'>{'Flight 01'}</span>
            </div>
            <div className='list-item'>
                <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                <span  className='list-item-title'>{'Flight 02'}</span>
            </div>
            <div className='list-item'>
                <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                <span className='list-item-title'>{'Flight 03'}</span>
            </div>
            </>
        );
    }
}

export default SideNavTrips;