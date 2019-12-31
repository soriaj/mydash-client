import React, { Component } from 'react';
import { FaList } from 'react-icons/fa'

class SideNavListsItems extends Component {
    render() {
        const { name } = this.props
        return (
            <>
            <div className='list-item'>
                <span><FaList className='fas fa-file'></FaList></span>
                <span className='list-item-title'>{name}</span>
                {/* Need to add NavLink for each id for a lists/:lists_id */}
            </div>
            </>
        );
    }
}

export default SideNavListsItems;