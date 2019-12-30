import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaKey } from 'react-icons/fa';
import './Login.css'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'

class Login extends Component {
    state = {
        error: null,
        loading: false
    }
    static contextType = TravelerContext

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({ error: null, loading: true })
        const { handleTokenChange } = this.context
        const { username, password } = ev.target
        username.value = ''
        password.value = ''
        // Mock API Login call
        setTimeout(() => {
            handleTokenChange()
            this.setState({ loading: false })
            const { location, history } = this.props
            const destination = (location.state || {}).from || '/dashboard'
            history.push(destination)
        }, 3000)
    }
    render() {
        const { error, loading } = this.state
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
                                <label htmlFor="username" className='no-view'>Username</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    placeholder='Username' 
                                    className='input-field'
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
                            <div className='input-wrapper'>
                                <FaKey className="fa fa-key icon"></FaKey> 
                                <label htmlFor="password" className='no-view'>Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    className='input-field'
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
                            <div className="login-btn-container">
                                {loading && (<Loading />)}
                                {!loading &&
                                    <button className="login-btn">Login</button>
                                }
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