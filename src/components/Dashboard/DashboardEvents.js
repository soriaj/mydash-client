import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import EventsTimeLine from '../EventsTimeLine/EventsTimeLine'
import TravlerContext from  '../../context/TravlerContext'
import data from '../../mockData/data.json'

export default class DashboardEvents extends Component {
    static contextType = TravlerContext
    componentDidMount() {
        const { all_events } = data
        this.context.setEventItems(all_events)
    }
    addNewEvent = () => {
        this.props.history.push(`/add-event`)
    }
    render() {
        const { all_events } = this.context
        return (
            <div className='content events-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title'>Events</h3>
                        <NavLink to='/events'>View All</NavLink>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus' onClick={this.addNewEvent}></FaPlus>
                    </div>
                </div>
                <div className='events-timeline'>
                    {all_events.map((events, index) => (
                        <EventsTimeLine 
                            key={index}
                            all_events={events}
                            history={this.props.history}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
