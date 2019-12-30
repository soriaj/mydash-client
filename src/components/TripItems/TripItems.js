import React, { Component } from 'react';
import PlaneTicket from '../../img/plane-ticket.png'

class TripItems extends Component {
    render() {
        const { name, destination } = this.props
        return (
            <div className='trip-tickets'>
                <div className='ticket-card'>
                    <h4>{name}</h4>
                    <div className='ticket-details'>
                        <img src={PlaneTicket} alt='plane ticket' loading='lazy' />
                        <p>Destination: {destination}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripItems;