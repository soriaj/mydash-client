import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAsia, FaTimes } from 'react-icons/fa';
import './SideNav.css';

class SideNav extends Component {
    closeSideNav = () => {
        let close = document.getElementById('sidenav')
        close.classList.remove('sidenav-active')

    }
    render() {
        return (
            <aside id='sidenav' className='sidenav'>
                <div className='sidenav-logo'>
                    <FaGlobeAsia className='fas fa-globe-asia' />
                    <Link to='/' className='sidenav-logo-link'>Traveler</Link>
                    <FaTimes id='sidenav-close' className='fas fa-times sidenav-close' onClick={this.closeSideNav} />
                </div>
                <div className='sidenav-account'>
                    <div className='sidenav-account-title'>Welcome</div>
                </div>
            </aside>
        );
    }
}

export default SideNav;