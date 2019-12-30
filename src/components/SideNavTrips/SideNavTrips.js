import React, { Component } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import SideNavTripsItems from '../SideNavTripsItems/SideNavTripsItems'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class SideNavTrips extends Component {
    state = {
        showItems: false,
        show: false
    }
    static contextType = TravelerContext
    renderTripsItems = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
    }
    render() {
        const { trips } = this.context
        const { showItems, show } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.renderTripsItems}>
                Trips{show 
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
                    {trips.map(item => 
                        <SideNavTripsItems
                            key={item.id}
                            name={item.name}
                            destination={item.destination}
                            deptCity={item.deptCity}>
                        </SideNavTripsItems>
                    )}
                </li></CSSTransition>}</TransitionGroup>
            </>
        );
    }
}

export default SideNavTrips;