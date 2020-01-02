import React, { Component } from 'react'
import { FaCalendarDay } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default class SideNavEventsItems extends Component {
    render() {
        const { event_id, name, day} = this.props
        return (
            <div className='list-item'>
                <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                <span className='list-item-title'><NavLink to={`/dashboard/events/${day}/${event_id}`}>{name}</NavLink></span>
            </div>
        )
    }
}
