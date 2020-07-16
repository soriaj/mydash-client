import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class Landing extends Component {
    render() {
        return (
        <>
        <section className='sections-container'>
            <div className='section-one font-landing'>
                <div className='inner'>
                    <header>
                        <h2>MyDash</h2>
                    </header>
                    <p>Get ready to see the world. For the traveling expert or the on a whim vacationer. Plan your trip with Traveler.</p>
                    <p>Save and view your flight information, local events, great food and more. An amazing adventure awaits.</p>
                    <Link to={'/signup/'} className='btn-one'>Sign Up</Link>
                </div>
            </div>

            <div className='section-two'> 

            </div>
        </section>
        </>
        )
    }
}
