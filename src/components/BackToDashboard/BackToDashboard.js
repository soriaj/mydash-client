import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './BackToDashboard.css'

export default function BackToDashboard(props) {
   return (
      <>
      <button className='cancel-btn' onClick={props.backToDashboard}><FaArrowLeft /><span>Dashboard</span></button>
      </>
   )
}