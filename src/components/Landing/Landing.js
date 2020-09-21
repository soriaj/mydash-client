import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import LandingSections from '../LandingSections/LandingSections'
import { FaList, FaCalendarDay, FaMoneyBill } from 'react-icons/fa'

export default class Landing extends Component {
    goToSignUpPage = () => {
        this.props.history.push('/signup')
    }
    render() {
        const details = [
            {icon: <FaList className='landing-icons'/>, name: `Lists`, description: `Create To do lists, so you don't miss what needs to get completed.`}, 
            {icon: <FaCalendarDay className='landing-icons'/>, name: `Events`, description: `Keep track of important events with ease by adding, searching and editing dates.`}, 
            {icon: <FaMoneyBill className='landing-icons'/>, name: `Finance`, description: `Keep an eye on where your money is going by tracking income and purchases.`}]

        return (
        <>
        <section className='landing-content'>
            <div className='inner'>
                    <h2>MyDash</h2>
                    <p className='inner-description'>An application to keep you productive and on track.  Allowing you to focus on three key areas.</p>
                </div>
            <div className='landing-content-container'>
                {details.map((items, idx) => (
                    <LandingSections
                        key={idx}
                        icon={items.icon}
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
