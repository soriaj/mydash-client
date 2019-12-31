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
    renderEventsItems = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
    }
    render() {
        const { events } = this.context
        const { showItems, show } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.renderEventsItems}>
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
                    {events.map(item => 
                        <SideNavEventsItems
                            key={item.id}
                            name={item.name}
                            date={item.date}>
                        </SideNavEventsItems>
                    )}
                </li></CSSTransition>}</TransitionGroup>
            </>
        );
    }
}

export default SideNavEvents;