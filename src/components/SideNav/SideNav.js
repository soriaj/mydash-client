import React, { Component } from 'react';
import { } from 'react-icons';
import { FaGlobeAsia, FaTimes } from 'react-icons/fa';
import './SideNav.css'

class SideNav extends Component {
    render() {
        return (
            <aside className='sidenav'>
                <div className='sidenav-logo'>
                    <FaGlobeAsia className='fas fa-globe-asia' />>
                    <a className="sidenav-logo-link" href="/">Traveler</a>
                    <FaTimes className="fas fa-times sidenav-close" />
                </div>
                <div className="sidenav-account">
                    <div className="sidenav-account-title">Welcome</div>
                </div>
            </aside>
        );
    }
}

export default SideNav;