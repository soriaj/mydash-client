import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaKey } from 'react-icons/fa';
import './Login.css'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'
import TokenService from '../../services/token-service'
import AuthService from '../../services/auth-service'

class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
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
        AuthService.Login({user_name: username.value, password: password.value})
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                handleTokenChange()
                this.props.onLoginSuccess()
                this.setState({ loading: false })
            })
            .catch(res => {
                username.value = ''
                password.value = ''
                this.setState({ error: res.error, loading: false })
            })
    }
    componentWillUnmount() {
        this.setState({ loading: false })
    }
    render() {
        const { error, loading } = this.state
        return (
            <>
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
            </>
        );
    }
}

export default Login;