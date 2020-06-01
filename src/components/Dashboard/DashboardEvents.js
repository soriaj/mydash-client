import React, { Component } from 'react'
import { FaPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import EventsTimeline from '../EventsTimeline/EventsTimeLine'
import TravlerContext from  '../../context/TravlerContext'
import SearchBox from '../SearchBox/SearchBox'

export default class DashboardEvents extends Component {
    state = {
        showEvents: true,
        searchTerm: ''
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

    updateSearchTerm = term => {
        this.setState({ searchTerm: term })
    }

    render() {
        const { events } = this.context
        const displayEventSorted = events.sort((a,b) => new Date(b.date) - new Date(a.date))
        const { showEvents, searchTerm } = this.state
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
                    <SearchBox
                        searchTerm={searchTerm}
                        handleUpdate={term => this.updateSearchTerm(term)}
                    >
                    </SearchBox>
                    <ul className='timeline-list'>
                        {displayEventSorted.filter(item => item.event_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
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
                        {/* {displayEventSorted.map((event, idx) => (
                            <EventsTimeline 
                                key={idx}
                                id={event.id}
                                name={event.event_name}
                                date={event.date}
                                event_loc={event.event_loc}
                                description={event.description}
                                history={this.props.history}
                            />
                        ))} */}
                    </ul>
                </div>
            </div>
        )
    }
}
