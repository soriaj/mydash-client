import React, { Component } from 'react'
import { FaBars, FaUserAlt, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <header className='header' role='banner'>
                <FaBars className='header-menu' />
                <div className='header-dropdown-container'>
                    <i className='fas fa-chevron-circle-down'></i>
                    <div className='header-dropdown-menu'>
                    <ul className='dropdown-list'>
                        <li className='dropdown-list-item'>
                            <span className='dropdown-icon'><FaUserPlus /></span>
                            <span className='dropdown-label'>Sign Up</span>
                        </li>
                        <li className='dropdown-list-item'>
                            <span className='dropdown-icon'><FaSignInAlt /></span>
                            <span className='dropdown-label'>Login</span>
                        </li>
                        {/* <li className='dropdown-list-item'>
                            <span className='dropdown-icon'><FaUserAlt /></i></span>
                            <span className='dropdown-label'>account</span>
                        </li> */}
                        {/* <li className='dropdown-list-item'>
                        <span className='dropdown-icon'><FaSignOutAlt /></span>
                        <span className='dropdown-label'>log out</span>
                        </li>  */}
                    </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
