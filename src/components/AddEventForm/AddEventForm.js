import React, { Component } from 'react'
import { FaCalendarPlus, FaLocationArrow, FaEdit, FaClock } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import './AddEventForm.css'
import SaveButton from '../SaveButton/SaveButton'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import ApiEventsService from '../../services/api-events-service'

// Form to enter new events into calendar
export default class NewListForm extends Component {
    state = {
        error: null,
        startDate: new Date()
    }
    static contextType = TravelerContext
 
    handleSubmit = ev => {
        ev.preventDefault()
        const { event_name, event_loc, description } = ev.target
        const { startDate } = this.state
        const { addEventItem } = this.context
        const newEvent = {
            date: moment.utc(startDate).local().format(),
            event_name: event_name.value,
            event_loc: event_loc.value,
            description: description.value
        }
        this.setState({ error: null })
        ApiEventsService.addEvent(newEvent)
        .then(data => {
            addEventItem(data)
        })
        this.props.history.push(`/dashboard`)   
    }

    backToDashboard = () => {
        this.props.history.push('/dashboard')
    }

    handleDateChange = date => {
        this.setState({ startDate: date })
    }

    render() {
        const { error } = this.state
        return (
            <article className='main-content'>
                <section className='form-container'>
                    <div className='login-form'>
                        <form className='form-field' onSubmit={this.handleSubmit}>
                            <div>
                                <h1>Add New Event</h1>
                            </div>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='input-wrapper'>
                                <FaCalendarPlus className='fa-user icon'></FaCalendarPlus>
                                <label htmlFor='event_name' className='no-view'>Event Name</label>
                                <input 
                                    type='text' 
                                    name='event_name' 
                                    id='event_name' 
                                    placeholder='Enter Event Name' 
                                    className='input-field'
                                    required
                                    />
                                <span className='focus-input-field'></span>
                            </div>

                            <div className='input-wrapper'>
                                <FaClock className='fa-user icon'></FaClock>
                                <label htmlFor='date' className='no-view'>Date</label>
                                        <DatePicker 
                                            selected={this.state.startDate} 
                                            onChange={this.handleDateChange}
                                            placeholderText="Enter event date"
                                            name='date'
                                            required />
                                <span className='focus-input-field'></span>
                            </div>

                            <div className='input-wrapper'>
                                <FaLocationArrow className='fa-user icon'></FaLocationArrow>
                                <label htmlFor='event_loc' className='no-view'>Event Location</label>
                                <input 
                                    type='text' 
                                    name='event_loc' 
                                    id='event_loc' 
                                    placeholder='Enter Location Name' 
                                    className='input-field'
                                    />
                                <span className='focus-input-field'></span>
                            </div>

                            <div className='input-wrapper'>
                                <FaEdit className='fa-user icon'></FaEdit>
                                <label htmlFor='description' className='no-view'>Event Description</label>
                                <textarea 
                                    type='text' 
                                    name='description' 
                                    id='description' 
                                    placeholder='Enter Description of Event' 
                                    className='input-field'
                                    />
                                <span className='focus-input-field'></span>
                            </div>
        
        
                            <div className='btn-container'>
                                <BackToDashboard backToDashboard={this.backToDashboard}/>
                                <SaveButton />
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        )
    }
}
