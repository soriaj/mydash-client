import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import { FaCalendarDay } from 'react-icons/fa'
import './EventsTimeline.css'

export default class EventsTimeline extends Component {
    static contextType = TravelerContext
    render() {
        const { all_events } = this.props
        return (
            <li className='timeline-block'>
                <div className='timeline-icon'>
                    <FaCalendarDay className='fas fa-calendar-day icon-space'></FaCalendarDay>
                </div>
                <div className='timeline-block-content'>
                    <h1 className='block-content-title block-content-padding'>{all_events.event_name}</h1>
                    <p className='block-content-details block-content-padding'>
                        {all_events.description}
                    </p>
                    <p className='block-content-date block-content-padding'>{all_events.date}</p>
                </div>
            </li>
        )
    }
}
