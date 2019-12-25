import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAsia, FaTimes } from 'react-icons/fa';
import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <aside className='sidenav'>
                <div className='sidenav-logo'>
                    <FaGlobeAsia className='fas fa-globe-asia' />
                    <Link to='/' className='sidenav-logo-link'>Traveler</Link>
                    <FaTimes className='fas fa-times sidenav-close' />
                </div>
                <div className='sidenav-account'>
                    <div className='sidenav-account-title'>Welcome</div>
                </div>
            </aside>
        );
    }
}

export default SideNav;