import React, { Component } from 'react';
import EventTimeLineCard from '../EventTimeLineCard/EventTimeLIneCard'

class EventDates extends Component {
    render() {
        const { month_events } = this.props
        return (
            <>
            <div className='timeline-date arrow'>
                {month_events.date}
            </div>
            <div className='timeline-section'>
                {month_events.events.map((event, idx) => (
                    <EventTimeLineCard 
                        key={event.id}
                        name={event.name}
                        description={event.description}
                    />
                ))}
            </div>
            </>
        );
    }
}

export default EventDates;