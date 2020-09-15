import React from 'react'
import './LoadingSpinner.css'

export default function LoadingSpinner() {
    return (
        <div className='loading-spinner'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}