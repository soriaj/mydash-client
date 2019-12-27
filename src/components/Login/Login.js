import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field'>
                            <div>
                                <h1>Login</h1>
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
        
                            <div className="login-btn-container">
                                <button className="login-btn">Login</button>
                            </div>
                            <div className='login-signup'>
                                <p>Don't have an account?<span><Link to='/signup'>Sign Up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        );
    }
}

export default Login;