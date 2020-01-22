import React, { Component } from 'react'
import { FaCalendarPlus } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'

export default class NewListForm extends Component {
    state = {
        error: null,
        loading: false
    }
    static contextType = TravelerContext

    onSubmit = ev => {
        ev.preventDefault()
        console.log('form submitted')
        const { date } = ev.target
        console.log(date)
        date.value = ''
        this.props.history.push(`/dashboard`)
        
    }
    render() {
        const { error, loading } = this.state
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field' onSubmit={this.onSubmit}>
                            <div>
                                <h1>Add New Event</h1>
                            </div>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='input-wrapper'>
                                <FaCalendarPlus className="fa-user icon"></FaCalendarPlus>
                                <label htmlFor="date" className='no-view'>Date</label>
                                <input 
                                    type="text" 
                                    name="date" 
                                    id="date" 
                                    placeholder='Enter Date' 
                                    className='input-field'
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
        
                            <div className="login-btn-container">
                                {loading && (<Loading />)}
                                {!loading &&
                                    <button className="login-btn">Submit</button>
                                }
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}
