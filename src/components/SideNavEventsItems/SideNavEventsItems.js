import React, { Component } from 'react'
import { FaCalendarDay } from 'react-icons/fa'

export default class SideNavEventsItems extends Component {
    render() {
        const { event } = this.props
        // const name = event.event_details.map(cur => cur.name)
        console.log(event.event)
        // event.map(cur => console.log(cur.name))
        return (
            <div className='list-item'>
                <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                <span className='list-item-title'>{'name'}</span>
            </div>
        )
    }
}
