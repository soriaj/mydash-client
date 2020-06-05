import React, { Component } from 'react'
import { FaPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import EventsTimeline from '../EventsTimeline/EventsTimeLine'
import TravlerContext from  '../../context/TravlerContext'
import SearchBox from '../SearchBox/SearchBox'
import moment from 'moment'

export default class DashboardEvents extends Component {
    state = {
        showEvents: true,
        startDate: new Date(),
    }
    static contextType = TravlerContext

    addNewEvent = () => {
        this.props.history.push(`/add-event`)
    }
    // On click handler to change state of showing events list or not
    showEventItems = () => {
        this.setState({
            showEvents: !this.state.showEvents
        })
    }
    // Handles selected date filter selection
    handleDateChange = date => {
        this.setState({ startDate: date })
    }
    render() {
        const { events } = this.context
        // Sort events by newest
        const displayEventSorted = events.sort((a,b) => new Date(b.date) - new Date(a.date))
        const { showEvents, startDate } = this.state
        return (
            <div className='content events-section'>
                <div className='content-header'>
                    <div className='content-titles'>
                        <h3 
                            className='content-header-title' 
                            onClick={this.showEventItems}>
                            {showEvents ? <FaChevronCircleUp className='title-chevron hide-chevron'/> : <FaChevronCircleDown className='title-chevron hide-chevron'/>}
                            Events
                        </h3>
                    </div>
                    <div className='add-icon'>
                        <FaPlus className='fas fa-plus' onClick={this.addNewEvent}></FaPlus>
                    </div>
                </div>
                <div className={`events-timeline ${showEvents ? '' : 'show-list' }`}>
                    {/* Filter selector based on date, defaults to current date */}
                    <h4>Filter By Date:</h4>
                    <SearchBox handleDateFilter={selected => this.handleDateChange(selected)} />
                    <ul className='timeline-list'>
                        {/* filter sorted evets array and only show events that match selected date */}
                        {/* {displayEventSorted.filter(item => item.date.includes(startDate.toISOString().slice(0,10))) */}
                        {displayEventSorted.filter(item => item.date.includes(moment(startDate).utc().format("YYYY-MM-DD")))
                            .map((event,idx) =>
                                <EventsTimeline 
                                    key={idx}
                                    id={event.id}
                                    name={event.event_name}
                                    date={event.date}
                                    event_loc={event.event_loc}
                                    description={event.description}
                                    history={this.props.history}
                                />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
