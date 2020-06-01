import React, { Component } from 'react';
import { FaPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import TripItems from '../TripItems/TripItems'
import TravelerContext from '../../context/TravlerContext'

class DashboardTrips extends Component {
    state = {
        showTrips: true
    }
    static contextType = TravelerContext
    addTrip = () => {
        this.props.history.push(`/trips`)
    }
    showTriptItems = () => {
        this.setState({
            showTrips: !this.state.showTrips
        })
    }
    render() {
        const { trips } = this.context
        const { showTrips } = this.state
        return (
            <section className='content trips-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 
                            className='content-header-title'
                            onClick={this.showTriptItems}>
                            {showTrips ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
                            Trips
                        </h3>
                    </div>
                    <div className='add-icon' onClick={this.addTrip}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                <div className={showTrips ? '' : 'show-list' }>
                    <ul>
                        {trips.map(trip => 
                            <TripItems
                                key={trip.id}
                                trip_id={trip.id}
                                name={trip.name}
                                destination={trip.destination}
                                history={this.props.history}
                            />   
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}

export default DashboardTrips;