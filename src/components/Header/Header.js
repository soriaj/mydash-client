import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaUserAlt, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaChevronCircleDown } from 'react-icons/fa';
import './Header.css'

class Header extends Component {
    state = {
        active: true,
        hasToken: false
    }

    handleOnLogout = () => {
        this.setState({
            hasToken: false
        })
    }
    renderLogin() {
        return (
            <>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaUserPlus /></span>
                <span className='dropdown-label'><Link to='/signup'>Sign Up</Link></span>
            </li>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaSignInAlt /></span>
                <span className='dropdown-label'><Link to='/login'>Login</Link></span>
            </li>
            </>
        )
    }

    renderLogout() {
        return (
            <>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaUserAlt /></span>
                <span className='dropdown-label'><Link to='/account'>Account</Link></span>
            </li>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaSignOutAlt /></span>
                <span className='dropdown-label'><Link to='/' onClick={this.handleOnLogout}>Log Out</Link></span>
            </li> 
            </>
        )
    }

    render() {
        return (
            <header className='header' role='banner'>
                <FaBars className='header-menu' />
                <div className='header-dropdown-container'>
                    <FaChevronCircleDown className='fa-chevron-circle-down' />
                    <div className='header-dropdown-menu'>
                    <ul className='dropdown-list'>
                        {this.state.hasToken ? this.renderLogout() : this.renderLogin()}
                    </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
