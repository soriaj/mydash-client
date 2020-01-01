import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import EventsTimeLine from '../EventsTimeLine/EventsTimeLine'

export default class DashboardEvents extends Component {
    render() {
        return (
            <div className='content events-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title'>Events</h3>
                        <NavLink to='/events'>View All</NavLink>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>
                </div>
                <div className='events-timeline'>
                    <EventsTimeLine />
                </div>
            </div>
        )
    }
}
