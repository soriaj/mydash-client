import React, { Component } from 'react';
import TravelerContext from '../../context/TravlerContext'
import { FaCalendarPlus, FaClock, FaLocationArrow, FaEdit } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'
import Loading from '../Loading/Loading'
// import config from '../../config'
// import moment from 'moment';

class EditEventItem extends Component {
   static defaultProps = {
      editEventItem: () => {}
   }
   static contextType = TravelerContext

   state = {
      loading: false,
      error: null,
      startDate: new Date()
   }

   componentDidMount() {
      const { event_id } = this.props.match.params
      this.setState({ loading: true })
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/events/${event_id}`, {
         medhtod: 'GET',
         headers: {
            'content-type': 'application/json',
         }
      })
      .then(res =>
         (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      )
      .then(event => {
         this.setState({
            id: event.id,
            event_name: event.event_name,
            event_loc: event.event_loc,
            description: event.description,
            loading: false
         })
      })
      .catch(error => this.setState({ error: error }))
   }
   handleEventNameChange = e => {
      this.setState({ event_name: e.target.value })
   }
   handleDateChange = date => {
      this.setState({ startDate: date })
   }
   handleEventLocationChange = e => {
      this.setState({ event_loc: e.target.value })
   }
   handleDescriptionChange = e => {
      this.setState({ description: e.target.value })
   }

   backToDashboard = () => {
      this.props.history.push('/dashboard')
   }
   formatNewDate = date => {
      let year = date.getFullYear()
      let month = (1 + date.getMonth()).toString()
      month = month.length > 1 ? month : `0${month}`
      let day = date.getDate().toString()
      day = day.length > 1 ? day : `0${day}`
      return `${month}/${day}/${year}`
   }

   handleEditEvent = e => {
      e.preventDefault()
      const { event_id } = this.props.match.params
      const { event_name, startDate, event_loc, description } = this.state
      const formattedDate = this.formatNewDate(startDate)
      const updatedEvent = {
         event_name,
         date: formattedDate,
         event_loc,
         description,
      }

      fetch(`${process.env.REACT_APP_API_ENDPOINT}/events/${event_id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedEvent),
         headers: {
            'content-type': 'application/json',
         }
      })
      .then(res => {
         if (!res.ok) {
            return Promise.reject(res.error)
         }
      })
      .then(() => {
         this.setState({
            event_name: '',
            event_loc: '',
            description: ''
         })
         this.context.editEventItem(updatedEvent)
         this.props.history.push(`/dashboard`)
      })
      .catch(error => this.setState({ error: error }))
     
   }

   render() {
      const { loading, error, event_name, event_loc, description } = this.state
      return (
         <article className='main-content'>
            <section className='form-container'>
               <div className='login-form'>
                  <form className='form-field' onSubmit={this.handleEditEvent}>
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
                              value={event_name} 
                              onChange={this.handleEventNameChange}
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
                                 name='date'
                                 dateFormat='MM/dd/yyyy'
                                 placeholderText='Enter an event date'
                                 required 
                              />
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
                              value={event_loc}
                              onChange={this.handleEventLocationChange}
                              className='input-field'
                              // required
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
                              value={description} 
                              onChange={this.handleDescriptionChange}
                              className='input-field'
                              // required
                              />
                           <span className='focus-input-field'></span>
                        </div>
   
   
                        <div className='btn-container'>
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
      );
   }
}

export default EditEventItem;