import React, { Component } from 'react';

class EventTimeLIneCard extends Component {
    viewEventDetails = () => {
        const { event_id, date } = this.props
        this.props.history.push(`/events/${date}/${event_id}`)
    }
    render() {
        const { name, description } = this.props
        return (
            <div className='timeline-card' onClick={this.viewEventDetails}>
                <div className='card-title'>
                    {name}
                </div>
                <div className='card-details'>
                    <p>{description}</p>
                </div>  
            </div>
        );
    }
}

export default EventTimeLIneCard;