import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import { FaCalendarDay, FaTrashAlt } from 'react-icons/fa'
import './EventsTimeline.css'
import config from '../../config'

export default class EventsTimeline extends Component {
    static contextType = TravelerContext

    deleteEvent(event_id) {
        return fetch(`${config.API_ENDPOINT}/new_events/${event_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.error)
            }
        })
    }

    handleDeleteEvent = ev => {
        ev.stopPropagation()
        const event_id = this.props.id
        this.deleteEvent(event_id)
            .then(() => {
                this.context.deleteEventItem(event_id)
            })

    }
    render() {
        const { name, date, description } = this.props
        return (
            <li className='timeline-block'>
                <div className='timeline-icon'>
                    <FaCalendarDay className='fas fa-calendar-day icon-space'></FaCalendarDay>
                </div>
                <div className='timeline-block-content'>
                    <h1 className='block-content-title block-content-padding'>{name}</h1>
                    <p className='block-content-details block-content-padding'>
                        {description}
                    </p>
                    <p className='block-content-date block-content-padding'>{date}</p>
                    <FaTrashAlt onClick={this.handleDeleteEvent} className='event-delete'/>
                </div>
            </li>
        )
    }
}
