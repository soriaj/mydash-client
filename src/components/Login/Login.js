import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaKey } from 'react-icons/fa';
import './Login.css'
import TravelerContext from '../../context/TravlerContext'

class Login extends Component {
    state = {
        error: null,
        username: '',
        password: ''
    }
    static contextType = TravelerContext

    handleSubmit = ev => {
        ev.preventDefault();
        const { handleTokenChange } = this.context
        const { username, password } = ev.target
        const credentials = {
            username: username.value,
            password: password.value
        }
        console.log(credentials)
        username.value = ''
        password.value = ''
        handleTokenChange()
    }
    render() {
        const { error } = this.state
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field' onSubmit={this.handleSubmit}>
                            <div>
                                <h1>Login</h1>
                            </div>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='input-wrapper'>
                                <FaUser className="fa-user icon"></FaUser>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    placeholder='Username' 
                                    className='input-field'
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
                            <div className='input-wrapper'>
                                <FaKey className="fa fa-key icon"></FaKey> 
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    className='input-field'
                                    />
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