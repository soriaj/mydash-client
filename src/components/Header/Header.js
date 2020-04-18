import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaUserAlt, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import './Header.css'
import TravelerContext from '../../context/TravlerContext'
import TokenService from '../../services/token-service'

class Header extends Component {
    state = {
        error: null,
        show: false,
    }
    static contextType = TravelerContext;

    handleOnLogout = () => {
        const { handleTokenChange } = this.context
        TokenService.clearAuthToken()
        handleTokenChange()
        this.showMenu()
    }

    showSideNav = () => {
        let showSideNav = document.getElementById('sidenav')
        showSideNav.classList.add('sidenav-active')
    }
    showMenu = () => {
        this.setState({ show: !!this.state.show })
        let showMenu = document.querySelector('.header-dropdown-menu')
        showMenu.classList.toggle('header-dropdown-menu-active')
    }

    closeOnRouteChange = () => {
        this.showMenu()
    }
    renderLogin() {
        return (
            <>
            <li className='dropdown-list-item'>
                <span className='dropdown-i'><FaUserPlus /></span>
                <span className='dropdown-label'><Link to='/signup' onClick={this.closeOnRouteChange}>Sign Up</Link></span>
            </li>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaSignInAlt /></span>
                <span className='dropdown-label'><Link to='/login' onClick={this.closeOnRouteChange}>Login</Link></span>
            </li>
            </>
        )
    }

    renderLogout() {
        return (
            <>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaUserAlt /></span>
                <span className='dropdown-label'><Link to='/account' onClick={this.closeOnRouteChange}>Account</Link></span>
            </li>
            <li className='dropdown-list-item'>
                <span className='dropdown-icon'><FaSignOutAlt /></span>
                <span className='dropdown-label'><Link to='/login' onClick={this.handleOnLogout}>Log Out</Link></span>
            </li> 
            </>
        )
    }

    render() {
        const { show } = this.state
        return (
            <header className='header' role='banner'>
                <FaBars className='header-menu' onClick={this.showSideNav} />
                <div className='header-dropdown-container'>
                    {show 
                        ? <FaChevronCircleUp className='fa-chevron-circle-down' onClick={this.showMenu}/>
                        : <FaChevronCircleDown className='fa-chevron-circle-down' onClick={this.showMenu}/>
                    }
                    <div className='header-dropdown-menu'>
                    <ul className='dropdown-list'>
                        {TokenService.hasAuthToken() 
                            ? this.renderLogout() 
                            : this.renderLogin()
                        }
                    </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
