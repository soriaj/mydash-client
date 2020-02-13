import React, { Component } from 'react'
import { FaCalendarPlus, FaLocationArrow, FaEdit, FaSave, FaRegSave } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'
import config from '../../config'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import './AddEventForm.css'
import SaveButton from '../SaveButton/SaveButton'

const uuidv4 = require('uuid/v4')

export default class NewListForm extends Component {
    state = {
        error: null,
        loading: false
    }
    static contextType = TravelerContext

    addEvent(newEvent) {
        return fetch(`${config.API_ENDPOINT}/events`, {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
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
            event_loc: event_loc.value,
            description: description.value
        }
        this.setState({ error: null })
        this.addEvent(newEvent)
        .then(data => {
            addEventItem(data)
        })
        this.props.history.push(`/dashboard`)
        
    }

    backToDashboard = () => {
        this.props.history.push('/dashboard')
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

                            <div className='input-wrapper'>
                                <FaLocationArrow className="fa-user icon"></FaLocationArrow>
                                <label htmlFor="event_loc" className='no-view'>Event Location</label>
                                <input 
                                    type="text" 
                                    name="event_loc" 
                                    id="event_loc" 
                                    placeholder='Enter Location Name' 
                                    className='input-field'
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>

                            <div className='input-wrapper'>
                                <FaEdit className="fa-user icon"></FaEdit>
                                <label htmlFor="description" className='no-view'>Event Description</label>
                                <textarea 
                                    type="text" 
                                    name="description" 
                                    id="description" 
                                    placeholder='Enter Description of Event' 
                                    className='input-field'
                                    // required
                                    />
                                <span className="focus-input-field"></span>
                            </div>
        
        
                            <div className="btn-container">
                                {loading && (<Loading />)}
                                {!loading && <>
                                    <BackToDashboard backToDashboard={this.backToDashboard}/>
                                    <SaveButton />
                                </>}
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}
