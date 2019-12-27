import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaKey } from 'react-icons/fa';
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleUserChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }
    handlePasswordChange = ev => {
        this.setState({
            password: ev.target.value
        })
    }
    handleSubmit = ev => {
        ev.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(credentials)
        

    }
    render() {
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field' onSubmit={this.handleSubmit}>
                            <div>
                                <h1>Login</h1>
                            </div>
                            <div className='input-wrapper'>
                                <FaUser className="fa-user icon"></FaUser>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    placeholder='Username' 
                                    className='input-field'
                                    value={this.state.username}
                                    onChange={this.handleUserChange} />
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
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange} />
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