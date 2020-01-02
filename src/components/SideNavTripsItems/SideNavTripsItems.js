import React, { Component } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

class SideNavTripsItems extends Component {
    render() {
        const { name, trip_id } = this.props
        return (
            <div className='list-item'>
                <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                <span className='list-item-title'><NavLink to={`/dashboard/trips/${trip_id}`} >{name}</NavLink></span>
            </div>
        );
    }
}

export default SideNavTripsItems;