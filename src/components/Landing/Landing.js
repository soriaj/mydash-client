import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class Landing extends Component {
    goToSignUpPage = () => {
        this.props.history.push('/signup')
    }
    render() {
        return (
        <>
        <section className='sections-container'>
            <div className='section-one font-landing'>
                <div className='inner'>
                    <header>
                        <h2>MyDash</h2>
                    </header>
                    <p>An application to keep you productive and on track.  Allowing you to focus on three key areas.</p>
                    <div>
                        <h3>Todos</h3>
                        <p>Create Todo lists, so you don't miss what needs to get completed.</p>
                    </div>
                    <div>
                        <h3>Events</h3>
                        <p>Keep track of important events with ease.</p>
                    </div>
                    <div className='last-landing-title'>
                        <h3>Finanace</h3>
                        <p>Keep an eye on where your money is going by tracking income and purchases.</p>
                    </div>
                    <div className="login-btn-container login-btn-landing">
                        <button className="login-btn" onClick={this.goToSignUpPage}>Sign Up</button>
                    </div>
                    <div className='login-signup'>
                        <p>Already have an account?<span><Link to='/login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
    }
}
