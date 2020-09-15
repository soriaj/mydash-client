import React from 'react'
import { FaSave } from 'react-icons/fa'
import './SaveButton.css'

export default function SaveButton() {
   return (
      <>
      <button className='save-btn'><FaSave /><span>Save</span></button>
      </>
   )
}