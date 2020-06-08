import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './SideNav.css';
import TravelerContext from '../../context/TravlerContext'
import SideNavLists from './SideNavLists'
import SideNavEvents from './SideNavEvents'
import TokenService from '../../services/token-service'

class SideNav extends Component {
    state = {
        listsShown: false,
    }
    static contextType = TravelerContext

    closeSideNav = () => {
        let close = document.getElementById('sidenav')
        close.classList.remove('sidenav-active')
    }
    renderUser(){
        return (
            <>
            <div className='sidenav-account'>
                <div className='sidenav-account-title'>
                    <Link to={'/dashboard'}><h1 className='sidenav-heading'>{'Hi Username'}</h1></Link>
                </div>
            </div>
            <div className='sidenav-list'>
                <ul className='sidenav-list-items'>
                    <SideNavLists />
                    <SideNavEvents />
                </ul>
            </div>
            </>
        )
    }
    renderWelcome() {
        return (
            <div className='sidenav-account'>
                <div className='sidenav-account-title'>
                    <h1 className='sidenav-heading'>{'Welcome'}</h1>
                </div>
            </div>
        )
    }
    render() {
        return (
            <aside id='sidenav' className='sidenav'>
                <div className='sidenav-logo'>
                    <FaTimes id='sidenav-close' className='fas fa-times sidenav-close' onClick={this.closeSideNav} />
                </div>
                {TokenService.hasAuthToken()
                    ? this.renderUser() 
                    : this.renderWelcome()
                }
            </aside>
        );
    }
}

export default SideNav;