import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaKey, FaEnvelope } from 'react-icons/fa';

export default class Signup extends Component {
    render() {
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <div>
                            <h1>Sign Up</h1>
                        </div>
                        <div className='input-wrapper'>
                            <FaUser className="fa fa-user icon"></FaUser>
                            <input type="text" name="username" id="username" placeholder='Username' className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>
    
                        <div className='input-wrapper'>
                            <FaKey className="fa fa-key icon"></FaKey> 
                            <input type="password" name="password" id="password" placeholder="Password" className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>
    
                        <div className='input-wrapper'>
                            <FaKey className="fa fa-key icon"></FaKey> 
                            <input type="password" name="repeat-password" id="repeat-password" placeholder="Re-enter Password" className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>
                        
                        <div className='input-wrapper'>
                            <FaEnvelope className="fa fa-envelope icon"></FaEnvelope> 
                            <input type="email" name="email" id="email" placeholder="your.email@mail.com" className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>                    
    
                        <div className="login-btn-container">
                            <button className="login-btn">Submit</button>
                        </div>
                        <div className='login-signup'>
                            <p>Already have an account?<span><Link to='/login'>Login</Link></span></p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
