import React, { Component } from 'react';
import TravelerContext from '../../context/TravlerContext'
import EventDates from '../EventDates/EventDates'

class EventsTimeLine extends Component {
    static contextType = TravelerContext

    render() {
        const { all_events } = this.props
        console.log(all_events)
        return (
            <div className='timeline'>
                <div className='timeline-month'><strong>{all_events.month}</strong></div>
                {all_events.month_events.map((cur, idx) => (
                    <EventDates 
                        key={cur.id}
                        month_events={cur}
                    />
                ))}
            </div>
        );
    }
}

export default EventsTimeLine;