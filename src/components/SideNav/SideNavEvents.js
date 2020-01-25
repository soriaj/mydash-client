import React, { Component } from 'react';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import TravelerContext from  '../../context/TravlerContext'
import SideNavEventsItems from '../SideNavEventsItems/SideNavEventsItems'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class SideNavEvents extends Component {
    state = {
        showItems: false,
        show: false
    }
    static contextType = TravelerContext
    showEventNavList = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
    }
    renderNavEventsItems = () => {
        const { all_events } = this.context
        return (
            all_events.map(event => (
                <SideNavEventsItems
                    key={event.id}
                    event_id={event.id}
                    date={event.date}
                    name={event.event_name}
                />
            ))
            // all_events.map(cur => (
            //     cur.month_events.map(month => (
            //         month.events.map(event => (
            //             <SideNavEventsItems 
            //                 key={event.id}
            //                 event_id={event.id}
            //                 day={month.date}
            //                 name={event.name}
            //             />
            //         ))
            //     ))
            // ))
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