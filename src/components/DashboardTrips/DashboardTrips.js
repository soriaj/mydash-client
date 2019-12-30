import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import TripItems from '../TripItems/TripItems'
import TravelerContext from '../../context/TravlerContext'

class DashboardTrips extends Component {
    static contextType = TravelerContext
    render() {
        const { trips } = this.context
        return (
            <div className='content trips-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title'>Trips</h3>
                        <a href='/trips'>View All</a>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>

                {trips.map(trip => 
                    <TripItems 
                        key={trip.id}    
                        name={trip.name}
                        destination={trip.destination}
                    >
                    </TripItems> 
                )}
            </div>
        );
    }
}

export default DashboardTrips;