import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import { FaCalendarDay, FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa'
import './EventsTimeline.css'
import config from '../../config'
// import moment from 'moment'

export default class EventsTimeline extends Component {
    state = {
        contentEditable: true,
        dscription: ''
    }
    static contextType = TravelerContext

    deleteEvent(event_id) {
        return fetch(`${config.API_ENDPOINT}/events/${event_id}`, {
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
    handleEditEvent = ev => {
        const event_id = this.props.id
        this.props.history.push(`/events/${event_id}`)
    }
    render() {
        const { name, date, description, event_loc } = this.props
        return (
            <li className='timeline-block'>
                <div className='timeline-icon'>
                    <FaCalendarDay className='fas fa-calendar-day icon-space'></FaCalendarDay>
                </div>
                <div className='timeline-block-content'>
                    <h1 className='block-content-title block-content-padding'>{name} - {date}</h1>
                    <p className='block-content-details block-content-padding'>
                        <span>{description}</span>
                    </p>
                    <p className='block-content-date block-content-padding'><strong>Location:</strong> {event_loc}</p>
                    <div className='event-control-bar'>
                        <div className='control-bar-delete' onClick={this.handleDeleteEvent}>
                            <FaRegTrashAlt className='fa-trash-title' /><span className='control-bar-titles'>{'Remove'}</span>
                        </div>
                        <div className='control-bar-edit' onClick={this.handleEditEvent}>
                            <FaPencilAlt className='fa-pencil-title' /><span className='control-bar-titles'>{'Edit'}</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
