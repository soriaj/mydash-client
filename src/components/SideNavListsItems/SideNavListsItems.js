import React, { Component } from 'react';
import { FaList } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

class SideNavListsItems extends Component {
    render() {
        const { name, id } = this.props
        return (
            <>
            <div className='list-item'>
                <span><FaList className='fas fa-file'></FaList></span>
                <span className='list-item-title'><NavLink to={`/dashboard/lists/${id}`}>{name}</NavLink></span>
            </div>
            </>
        );
    }
}

export default SideNavListsItems;