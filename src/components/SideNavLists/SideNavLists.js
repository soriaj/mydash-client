import React, { Component } from 'react';
import { FaFileAlt } from 'react-icons/fa'

class SideNavLists extends Component {
    render() {
        return (
            <>
            <div className='list-item'>
                <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                <span className='list-item-title'>{'List 01'}</span>
            </div>
            <div className='list-item'>
                <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                <span className='list-item-title'>{'List 02'}</span>
            </div>
            <div className='list-item'>
                <span><FaFileAlt className='fas fa-file'></FaFileAlt></span>
                <span className='list-item-title'>{'List 03'}</span>
            </div>
            </>
        );
    }
}

export default SideNavLists;