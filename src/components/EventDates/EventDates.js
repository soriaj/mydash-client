import React, { Component } from 'react';
import EventTimeLineCard from '../EventTimeLineCard/EventTimeLIneCard'

class EventDates extends Component {
    render() {
        const { dates, event_detail } = this.props
        console.log(event_detail)
        return (
            <>
            <div className='timeline-date arrow'>
                {dates}
            </div>
            <div className='timeline-section'>
                <div className='timeline-card'>
                    {event_detail.map((cur, idx) => (
                        <EventTimeLineCard 
                            key={idx}
                            details={cur}
                        />
                    ))}
                </div>
            </div>
            </>
        );
    }
}

export default EventDates;