import React, { Component } from 'react';
import { FaFileAlt } from 'react-icons/fa'

class SideNavListsItems extends Component {
    render() {
        const { name } = this.props
        return (
            <>
            <div className='list-item'>
                <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                <span className='list-item-title'>{name}</span>
                {/* Need to add NavLink for each id for a lists/:lists_id */}
            </div>
            </>
        );
    }
}

export default SideNavListsItems;