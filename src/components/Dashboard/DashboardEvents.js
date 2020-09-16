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
        isDesktop: false
    }
    static contextType = TravlerContext
    
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth > 1024 });
    }
    enableChevronClick = () => {
        return (
            <h3 
                className='content-header-title' 
                onClick={this.showEventItems}>
                {this.state.showEvents ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
                Events
            </h3>
        )
    }
    disableChevronClick = () => {
        return (
            <h3 className='content-header-title'>Events</h3>            
        )
    }
    addNewEvent = () => {
        this.props.history.push(`/add-event`)
    }
    // On click handler to change state of showing events
    showEventItems = () => {
        this.setState({
            showEvents: !this.state.showEvents
        })
    }
    // Handles selected date filter selection
    handleDateChange = (date) => {
        console.log(`selected date`, moment.utc(date).local().format())
        this.setState({ startDate: date })
    }
    render() {
        const { events } = this.context
        const { showEvents, startDate } = this.state
        return (
            <section className={`content events-section ${showEvents ? 'content-visible' : ''}`}>
                <div className='content-header'>
                    <div className='content-titles'>
                        {this.state.isDesktop 
                            ? this.disableChevronClick()
                            : this.enableChevronClick()
                        }
                    </div>
                    <div className={`add-icon ${showEvents ? 'event-add' : ''}`} onClick={this.addNewEvent}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                    </div>                    
                </div>
                <div className={`events-timeline ${showEvents ? 'event-cards-visible' : 'event-cards-hidden'}`}>
                {/* Filter selector based on date, defaults to current date */}
                    <h4>Filter By Date:</h4>
                    <SearchBox handleDateFilter={selected => this.handleDateChange(selected)} />
                    <ul className='timeline-list'>
                        {/* filter evets array and only show events that match selected date */}
                        {/* {events.filter(item => item.date.includes(moment(startDate).utc().local().format().slice(0,10))) */}
                        {events.filter(item => item.date.includes(moment.utc(startDate).local().format().slice(0,10)))
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
                    <div className='add-icon-container event-add'>
                        <div className='add-icon-cir'>
                            <FaPlus className='fas fa-plus-cir' onClick={this.addNewEvent}></FaPlus>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
