import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAsia, FaTimes, FaList, FaCalendar, FaPlaneDeparture, FaCalendarDay, FaFileAlt } from 'react-icons/fa';
import './SideNav.css';
import TravelerContext from '../../context/TravlerContext'

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
                        <div className='list-item'>
                            <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                            <span className='list-item-title'>{'List 01'}</span>
                        </div>
                        <div className='list-item'>
                            <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                            <span className='list-item-title'>{'List 02'}</span>
                        </div>
                        <div className='list-item'>
                            <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                            <span className='list-item-title'>{'List 03'}</span>
                        </div>
                    </li>

                    <li className='list-item-heading'>Events <FaCalendar className='fas fa-calendar'></FaCalendar></li>
                    <li className='list-sub-items'>
                        <div className='list-item'>
                            <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                            <span className='list-item-title'>{'Event 01'}</span>
                        </div>
                        <div className='list-item'>
                            <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                            <span className='list-item-title'>{'Event 02'}</span>
                        </div>
                        <div className='list-item'>
                            <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                            <span className='list-item-title'>{'Event 03'}</span>
                        </div>
                    </li>
                    <li className='list-item-heading'>Trips <FaPlaneDeparture className='fas fa-plane'></FaPlaneDeparture></li>
                    <li className='list-sub-items'>
                        <div className='list-item'>
                            <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                            <span className='list-item-title'>{'Flight 01'}</span>
                        </div>
                        <div className='list-item'>
                            <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                            <span  className='list-item-title'>{'Flight 02'}</span>
                        </div>
                        <div className='list-item'>
                            <span><FaPlaneDeparture className='fas fa-plane-departure'></FaPlaneDeparture></span>
                            <span className='list-item-title'>{'Flight 03'}</span>
                        </div>
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