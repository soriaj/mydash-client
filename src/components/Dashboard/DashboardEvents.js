import React, { Component } from 'react'
import { FaPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import EventsTimeline from '../EventsTimeline/EventsTimeLine'
import TravlerContext from  '../../context/TravlerContext'

export default class DashboardEvents extends Component {
    state = {
        showEvents: true,
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
        const displayEventSorted = events.sort((a,b) => new Date(a.date) - new Date(b.date))
        const { showEvents } = this.state
        return (
            <div className='content events-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 
                            className='content-header-title' 
                            onClick={this.showEventItems}>
                            {showEvents ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
                            Events
                        </h3>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus' onClick={this.addNewEvent}></FaPlus>
                    </div>
                </div>
                <div className={`events-timeline ${showEvents ? '' : 'show-list' }`}>
                    {/* Add Filter option here */}
                    <ul className='timeline-list'>
                        {displayEventSorted.map((event, idx) => (
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
