import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import EventsTimeline from '../EventsTimeline/EventsTimeline'
import TravlerContext from  '../../context/TravlerContext'
// import data from '../../mockData/data.json'

export default class DashboardEvents extends Component {
    static contextType = TravlerContext
    // componentDidMount() {
    //     const { all_events } = this.context
    //     this.context.setEventItems(all_events)
    // }
    addNewEvent = () => {
        this.props.history.push(`/add-event`)
    }
    render() {
        const { events } = this.context
        return (
            <div className='content events-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 className='content-header-title'>Events</h3>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus' onClick={this.addNewEvent}></FaPlus>
                    </div>
                </div>
                <div className='events-timeline'>
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
