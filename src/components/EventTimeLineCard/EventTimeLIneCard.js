import React, { Component } from 'react';

class EventTimeLIneCard extends Component {
    render() {
        const { name, description } = this.props
        return (
            <div className='timeline-card'>
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