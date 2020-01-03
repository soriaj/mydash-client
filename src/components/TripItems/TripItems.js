import React, { Component } from 'react';
import PlaneTicket from '../../img/plane-ticket.png'

class TripItems extends Component {
    viewTripDetails = () => {
        const { trip_id } = this.props
        this.props.history.push(`/trips/${trip_id}`)
    }
    render() {
        const { name, destination } = this.props
        return (
            <div className='trip-tickets'>
                <div className='ticket-card'>
                    <h4>{name}</h4>
                    <div className='ticket-details' onClick={this.viewTripDetails}>
                        <img src={PlaneTicket} alt='plane ticket' loading='lazy' />
                        <p>Destination: {destination}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripItems;