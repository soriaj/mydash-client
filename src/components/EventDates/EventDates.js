import React, { Component } from 'react';
import EventTimeLineCard from '../EventTimeLineCard/EventTimeLIneCard'

class EventDates extends Component {
    render() {
        const { dates, events } = this.props
        // console.log(event_detail)
        return (
            <>
            <div className='timeline-date arrow'>
                {dates}
            </div>
            <div className='timeline-section'>
                <div className='timeline-card'>
                    {events.map((event, idx) => (
                        <EventTimeLineCard 
                            key={event.id}
                            name={event.name}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>
            </>
        );
    }
}

export default EventDates;