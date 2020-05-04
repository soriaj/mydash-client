import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronCircleDown, FaChevronCircleUp, FaCalendarDay } from 'react-icons/fa'
import TravelerContext from  '../../context/TravlerContext'
// import SideNavEventsItems from '../SideNavEventsItems/SideNavEventsItems'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import config from '../../config'

class SideNavEvents extends Component {
    state = {
        showItems: false,
        show: false
    }

    static contextType = TravelerContext
    showEventNavList = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
    }

    async componentDidMount() {
        try {
            const { setEventItems } = this.context
            const eventsAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/events`)
            const eventsRes = await eventsAPI.json()
            setEventItems(eventsRes)
         } catch (error) {
            console.log(error)
         }
    }
    renderNavEventsItems = () => {
        const { events } = this.context
        return (
            events.map(event => (
                <div key={event.id} className='list-item'>
                    <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                    <span className='list-item-title'><NavLink to={`/events/${event.id}`}>{event.event_name}</NavLink></span>
                </div>
            ))
        )
    }
    render() {
        const { showItems, show } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.showEventNavList}>
                Events{show 
                    ? <FaChevronCircleUp className='fas fa-calendar'></FaChevronCircleUp>
                    : <FaChevronCircleDown className='fas fa-calendar'></FaChevronCircleDown>
                }
                </li>
            <TransitionGroup
                component={null}
            >{showItems && 
                <CSSTransition
                    key={0}
                    in={show}
                    timeout={{enter: 300, exit: 500}}
                    classNames="fade"
                ><li className='list-sub-items'>
                    {this.renderNavEventsItems()}
                </li></CSSTransition>}</TransitionGroup>
            </>
        );
    }
}

export default SideNavEvents;