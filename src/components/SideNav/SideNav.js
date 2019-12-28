import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAsia, FaTimes, FaList, FaCalendar, FaPlaneDeparture } from 'react-icons/fa';
import './SideNav.css';
import TravelerContext from '../../context/TravlerContext'
import SideNavLists from '../SideNavLists/SideNavLists'
import SideNavEvents from '../SideNavEvents/SideNavEvents'
import SideNavTrips from '../SideNavTrips/SideNavTrips'

class SideNav extends Component {
    closeSideNav = () => {
        let close = document.getElementById('sidenav')
        close.classList.remove('sidenav-active')
    }

    static contextType = TravelerContext
    renderUser = () => {
        return (
            <>
            <div className='sidenav-account'>
                <div className='sidenav-account-title'>{'Username'}</div>
            </div>
            <div className='sidenav-list'>
                <ul className='sidenav-list-items'>
                    <li className='list-item-heading'>Lists <FaList className='fas fa-list'></FaList></li>
                    <li className='list-sub-items'>
                        <SideNavLists />
                    </li>

                    <li className='list-item-heading'>Events <FaCalendar className='fas fa-calendar'></FaCalendar></li>
                    <li className='list-sub-items'>
                        <SideNavEvents />
                    </li>
                    <li className='list-item-heading'>Trips <FaPlaneDeparture className='fas fa-plane'></FaPlaneDeparture></li>
                    <li className='list-sub-items'>
                        <SideNavTrips />
                    </li>
                </ul>
            </div>
            </>
        )
    }
    renderWelcome = () => {
        return (
            <div className='sidenav-account'>
                <div className='sidenav-account-title'>Welcome</div>
            </div>
        )
    }
    render() {
        const { hasToken } = this.context
        return (
            <aside id='sidenav' className='sidenav'>
                <div className='sidenav-logo'>
                    <FaGlobeAsia className='fas fa-globe-asia' />
                    <Link to='/' className='sidenav-logo-link'>Traveler</Link>
                    <FaTimes id='sidenav-close' className='fas fa-times sidenav-close' onClick={this.closeSideNav} />
                </div>
                {hasToken ? this.renderUser() : this.renderWelcome()}
            </aside>
        );
    }
}

export default SideNav;