import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import EventsTimeline from '../EventsTimeline/EventsTimeLine'
import TravlerContext from  '../../context/TravlerContext'
// import data from '../../mockData/data.json'

export default class DashboardEvents extends Component {
    state = {
        showEvents: true
    }
    static contextType = TravlerContext

    addNewEvent = () => {
        this.props.history.push(`/add-event`)
    }
    showEventItems = () => {
        this.setState({
            showEvents: !this.state.showEvents
        })
    }
    render() {
        const { events } = this.context
        return (
            <div className='content events-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title' onClick={this.showEventItems}>Events</h3>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus' onClick={this.addNewEvent}></FaPlus>
                    </div>
                </div>
                <div className={`events-timeline ${this.state.showEvents ? '' : 'show-list' }`}>
                    {/* Add Filter option here */}
                    <ul className='timeline-list'>
                        {events.map((event, idx) => (
                            <EventsTimeline 
                                key={idx}
                                id={event.id}
                                name={event.event_name}
                                date={event.date}
                                event_loc={event.event_loc}
                                description={event.description}
                                history={this.props.history}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
