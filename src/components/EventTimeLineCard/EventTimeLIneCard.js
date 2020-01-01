import React, { Component } from 'react';

class EventTimeLIneCard extends Component {
    render() {
        const { details } = this.props
        return (
            <>
              <div className='card-title'>
                    {details.name}
                </div>
                <div className='card-details'>
                    <p>{details.description}</p>
                </div>  
            </>
        );
    }
}

export default EventTimeLIneCard;