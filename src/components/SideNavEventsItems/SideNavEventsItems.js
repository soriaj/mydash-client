import React, { Component } from 'react'
import { FaCalendarDay } from 'react-icons/fa'

export default class SideNavEventsItems extends Component {
    render() {
        const { name, date } = this.props
        return (
            <div className='list-item'>
                <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                <span className='list-item-title'>{name} - {date}</span>
            </div>
        )
    }
}
