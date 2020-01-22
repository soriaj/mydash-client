import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import { FaCalendarDay } from 'react-icons/fa'
import './EventsTimeline.css'

export default class EventsTimeline extends Component {
    static contextType = TravelerContext
    render() {
        const { all_events, key } = this.props
        return (
            <li className='timeline-block'>
                <div className='timeline-icon'>
                    <FaCalendarDay className='fas fa-calendar-day icon-space'></FaCalendarDay>
                </div>
                <div className='timeline-block-content'>
                    <h1 className='block-content-title block-content-padding'>Test</h1>
                    <p className='block-content-details block-content-padding'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem illo adipisci numquam aut ratione quas sunt suscipit voluptatem a. Quia enim dignissimos ducimus officia incidunt? Quisquam suscipit delectus voluptas rem?
                    </p>
                    <p className='block-content-date block-content-padding'>01/22/2020</p>
                </div>
            </li>
        )
    }
}
