import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronCircleDown } from 'react-icons/fa'

export default function SideNavFinance() {
   return (
      <>
      <li className='list-item-heading'>
         <NavLink to={'/transactions'} >All Transactions</NavLink><FaChevronCircleDown className='fas fa-money'></FaChevronCircleDown>
      </li>
      </>
   )
}