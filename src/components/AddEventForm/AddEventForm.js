import React, { Component } from 'react'
import { FaCalendarPlus } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'
const uuidv4 = require('uuid/v4')

export default class NewListForm extends Component {
    state = {
        error: null,
        loading: false
    }
    static contextType = TravelerContext

    onSubmit = ev => {
        ev.preventDefault()
        const { event_name, event_loc, description } = ev.target
        const { addEventItem } = this.context
        const day = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(new Date())
        const newEvent = {
            id: uuidv4(),
            date: day,
            event_name: event_name.value,
            event_loc: 'Sacramento',
            description: 'Lorum Ipsum'
        }
        addEventItem(newEvent)
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
                                <label htmlFor="event_name" className='no-view'>Event Name</label>
                                <input 
                                    type="text" 
                                    name="event_name" 
                                    id="event_name" 
                                    placeholder='Enter Event Name' 
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
