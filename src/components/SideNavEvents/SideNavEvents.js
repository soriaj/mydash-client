import React, { Component } from 'react';
import { FaCalendarDay } from 'react-icons/fa'

class SideNavEvents extends Component {
    render() {
        return (
            <>
            <div className='list-item'>
                <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                <span className='list-item-title'>{'Event 01'}</span>
            </div>
            <div className='list-item'>
                <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                <span className='list-item-title'>{'Event 02'}</span>
            </div>
            <div className='list-item'>
                <span><FaCalendarDay className='fas fa-calendar-day'></FaCalendarDay></span>
                <span className='list-item-title'>{'Event 03'}</span>
            </div>
            </>
        );
    }
}

export default SideNavEvents;