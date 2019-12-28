import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAsia, FaTimes } from 'react-icons/fa';
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
            <div className='sidenav-account'>
                <div className='sidenav-account-title'>{'Username'}</div>
            </div>
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