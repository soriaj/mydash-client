import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <div>
                            <h1>Register</h1>
                        </div>
                        <div className='input-wrapper'>
                            <i className="fa fa-user icon"></i>
                            <input type="text" name="username" id="username" placeholder='Username' className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>
    
                        <div className='input-wrapper'>
                            <i className="fa fa-key icon"></i> 
                            <input type="password" name="password" id="password" placeholder="Password" className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>
    
                        <div className='input-wrapper'>
                            <i className="fa fa-key icon"></i> 
                            <input type="password" name="password" id="password" placeholder="Re-enter Password" className='input-field' />
                            <span className="focus-input-field"></span>
                        </div>
                        
                        <div className='input-wrapper'>
                            <i className="fa fa-envelope icon"></i> 
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
