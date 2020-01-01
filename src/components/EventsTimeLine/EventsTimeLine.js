import React, { Component } from 'react';
import TravelerContext from '../../context/TravlerContext'
import EventDates from '../EventDates/EventDates'

class EventsTimeLine extends Component {
    static contextType = TravelerContext

    render() {
        const { event } = this.props
        console.log(event)
        return (
            <div className='timeline'>
                <div className='timeline-month'><strong>{event.month}</strong></div>
                {event.event.map((events, idx) => (
                    <EventDates 
                        key={idx}
                        dates={events.event_date}
                        event_detail={events.event_details}
                    />
                ))}
            </div>
        );
    }
}

export default EventsTimeLine;