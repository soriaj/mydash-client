import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronCircleDown } from 'react-icons/fa'

export default function SideNavEvents() {
    return (
        <>
        {/* Will take user to Events Component */}
        <li className='list-item-heading'>
            <NavLink to={'/events'} >All Events</NavLink><FaChevronCircleDown className='fas fa-calendar'></FaChevronCircleDown>
        </li>
        </>
    )
}