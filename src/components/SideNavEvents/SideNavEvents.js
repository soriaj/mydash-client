import React, { Component } from 'react';
import { FaCalendar } from 'react-icons/fa'
import TravelerContext from  '../../context/TravlerContext'
import SideNavEventsItems from '../SideNavEventsItems/SideNavEventsItems'

class SideNavEvents extends Component {
    state = {
        showItems: false
    }
    static contextType = TravelerContext
    renderEventsItems = () => {
        this.setState({ showItems: !this.state.showItems })
    }
    render() {
        const { events } = this.context
        const { showItems } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.renderEventsItems}>
                Events<FaCalendar className='fas fa-calendar'></FaCalendar></li>
            {showItems && <li className='list-sub-items'>
                {events.map(item => 
                    <SideNavEventsItems
                        key={item.id}
                        name={item.name}
                        date={item.date}>
                    </SideNavEventsItems>
                )}
            </li>}
            </>
        );
    }
}

export default SideNavEvents;