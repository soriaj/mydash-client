import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import TripItems from '../TripItems/TripItems'
import TravelerContext from '../../context/TravlerContext'
import data from '../../mockData/data.json'

class DashboardTrips extends Component {
    static contextType = TravelerContext
    componentDidMount() {
        const { trips } = data
        this.context.setTripItems(trips)

    } 
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
                        trip_id={trip.id}   
                        name={trip.name}
                        destination={trip.destination}
                        history={this.props.history}
                    >
                    </TripItems> 
                )}
            </div>
        );
    }
}

export default DashboardTrips;