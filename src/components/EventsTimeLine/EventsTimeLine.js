import React, { Component } from 'react';
import TravelerContext from '../../context/TravlerContext'
import EventDates from '../EventDates/EventDates'

class EventsTimeLine extends Component {
    static contextType = TravelerContext

    render() {
        const { all_events } = this.props
        // console.log(event)
        return (
            <div className='timeline'>
                <div className='timeline-month'><strong>{all_events.month}</strong></div>
                {all_events.month_events.map((month_events, idx) => (
                    <EventDates 
                        key={month_events.id}
                        date={month_events.date}
                        events={month_events.events}
                    />
                ))}
            </div>
        );
    }
}

export default EventsTimeLine;