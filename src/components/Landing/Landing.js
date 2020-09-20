import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import LandingSections from '../LandingSections/LandingSections'

export default class Landing extends Component {
    goToSignUpPage = () => {
        this.props.history.push('/signup')
    }
    render() {
        const details = [
            {name: `ToDo's`, src: `Todo`, alt: 'Todo list', description: `Create ToDo lists, so you don't miss what needs to get completed`}, 
            {name: `Events`, src: `Calendar`, alt: 'Calendar notebook', description: `Keep track of important events with ease by adding, searching and editing dates.`}, 
            {name: `Finance`, src: `Finances`, alt: 'Money symbols', description: `Keep an eye on where your money is going by tracking income and purchases.`}]

        return (
        <>
        <section className='landing-content'>
            <div className='landing-form-container'>
                <div className='inner'>
                    <h2>MyDash</h2>
                    <p className='inner-description'>An application to keep you productive and on track.  Allowing you to focus on three key areas.</p>
                </div>
                {details.map((items, idx) => (
                    <LandingSections
                        key={idx}
                        name={items.name}
                        src={items.src}
                        alt={items.alt}
                        description={items.description}
                    />
                ))}
            </div>
            <div className='landing-signup'>
                <div className="login-btn-container login-btn-landing">
                    <button className="login-btn" onClick={this.goToSignUpPage}>Sign Up</button>
                </div>
                <div className='login-signup'>
                    <p>Already have an account?<span><Link to='/login'>Login</Link></span></p>
                </div>
            </div>
        </section>
        </>
        )
    }
}
