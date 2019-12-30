import React, { Component } from 'react';
import { FaPlaneDeparture } from 'react-icons/fa'
class SideNavTripsItems extends Component {
    render() {
        const { name } = this.props
        return (
            <div className='list-item'>
                <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                <span className='list-item-title'>{name}</span>
            </div>
        );
    }
}

export default SideNavTripsItems;