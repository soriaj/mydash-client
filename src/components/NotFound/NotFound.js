import React from 'react'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className='notfound-content'>
            <div className='inner'>
                <h1 className='notfound-title'>404</h1>
                <p className='notfound-msg'>Something went wrong. The page you are looking for does not exist.</p>
            </div>
        </div>
    )
}