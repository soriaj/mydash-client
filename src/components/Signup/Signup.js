import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaKey, FaEnvelope } from 'react-icons/fa';
import Loading from '../Loading/Loading'

export default class Signup extends Component {
    state = {
        error: null, 
        loading: false
    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({ loading: true })
        const { 
            username, 
            password, 
            repeat_password, 
            email
        } = ev.target
        username.value = ''
        password.value = ''
        repeat_password.value = ''
        email.value = ''
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)

    }
    render() {
        const { error, loading } = this.state
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field' onSubmit={this.handleSubmit}>
                            <div>
                                <h1>Sign Up</h1>
                            </div>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='input-wrapper'>
                                <FaUser className="fa fa-user icon"></FaUser>
                                <input 
                                    type="text"
                                    name="username" 
                                    id="username" 
                                    placeholder='Username' 
                                    className='input-field'
                                    required 
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
                                    required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
                            <div className='input-wrapper'>
                                <FaKey className="fa fa-key icon"></FaKey> 
                                <input 
                                    type="password" 
                                    name="repeat_password" 
                                    id="repeat_password" 
                                    placeholder="Re-enter Password" 
                                    className='input-field' 
                                    required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
                            
                            <div className='input-wrapper'>
                                <FaEnvelope className="fa fa-envelope icon"></FaEnvelope> 
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="your.email@mail.com" 
                                    className='input-field' 
                                    required
                                    />
                                <span className="focus-input-field"></span>
                            </div>                    
        
                            <div className="login-btn-container">
                                {loading && (<Loading />)}
                                {!loading && 
                                    <button className="login-btn">Submit</button>
                                }
                            </div>
                            <div className='login-signup'>
                                <p>Already have an account?<span><Link to='/login'>Login</Link></span></p>
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}
