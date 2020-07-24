import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaKey, FaEnvelope } from 'react-icons/fa';
import Loading from '../Loading/Loading'
import AuthService from '../../services/auth-service'

export default class Signup extends Component {
    state = {
        error: null, 
        loading: false
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({ loading: true })
        const { full_name, email, user_name, password } = ev.target

        AuthService.newUser({ 
            full_name: full_name.value,
            email: email.value,
            user_name: user_name.value,
            password: password.value
        })
        .then(user => {
            full_name.value = ''
            email.value = ''
            user_name.value = ''
            password.value = ''
            this.setState({ loading: false })
            this.props.history.push('/login')
        })
        .catch(res => this.setState({ error: res.error, loading: false }))
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
                                    name="full_name" 
                                    id="full_name" 
                                    placeholder='Enter Full Name' 
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
                            <div className='input-wrapper'>
                                <FaUser className="fa fa-user icon"></FaUser>
                                <input 
                                    type="text"
                                    name="user_name" 
                                    id="user_name" 
                                    placeholder='Enter Username' 
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
                                    placeholder="Enter Password" 
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
