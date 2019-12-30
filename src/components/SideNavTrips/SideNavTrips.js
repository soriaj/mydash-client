import React, { Component } from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import SideNavTripsItems from '../SideNavTripsItems/SideNavTripsItems'

class SideNavTrips extends Component {
    state = {
        showItems: this
    }
    static contextType = TravelerContext
    renderTripsItems = () => {
        this.setState({ showItems: !this.state.showItems })
    }
    render() {
        const { trips } = this.context
        const { showItems } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.renderTripsItems}>
                Trips<FaPlaneDeparture className='fas fa-plane'></FaPlaneDeparture></li>
            {showItems && <li className='list-sub-items'>
                {trips.map(item => 
                    <SideNavTripsItems
                        key={item.id}
                        name={item.name}
                        destination={item.destination}
                        deptCity={item.deptCity}>
                    </SideNavTripsItems>
                )}
            </li>}
            </>
        );
    }
}

export default SideNavTrips;