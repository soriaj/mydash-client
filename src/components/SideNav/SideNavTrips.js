import React, { Component } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import SideNavTripsItems from '../SideNavTripsItems/SideNavTripsItems'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import config from '../../config'

class SideNavTrips extends Component {
    state = {
        showItems: false,
        show: false
    }
    static contextType = TravelerContext

    showTripsItems = () => {
        this.setState({ showItems: !this.state.showItems, show: !this.state.show })
    }

    async componentDidMount() {
        try {
            const { setTripItems } = this.context
            const tripsAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/trips`)
            const tripsRes = await tripsAPI.json()
            // this.setState({ new_events: eventsRes })
            setTripItems(tripsRes)
         } catch (error) {
            console.log(error)
         }
    }
    render() {
        const { trips } = this.context
        const { showItems, show } = this.state
        return (
            <>
            <li className='list-item-heading' onClick={this.showTripsItems}>
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
                    {trips.map(trip => 
                        <SideNavTripsItems
                            key={trip.id}
                            trip_id={trip.id}
                            name={trip.name}
                        >
                        </SideNavTripsItems>
                    )}
                </li></CSSTransition>}</TransitionGroup>
            </>
        );
    }
}

export default SideNavTrips;