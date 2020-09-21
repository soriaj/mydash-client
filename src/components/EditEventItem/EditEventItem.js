import React, { Component } from 'react';
import TravelerContext from '../../context/TravlerContext'
import { FaCalendarPlus, FaClock, FaLocationArrow, FaEdit } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'
import Loading from '../Loading/Loading'
import moment from 'moment';
import ApiEventsService from '../../services/api-events-service'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


class EditEventItem extends Component {
   state = {
      loading: false,
      error: null,
      startDate: new Date(),
      event_name: '', 
      event_loc: '', 
      description: ''
   }

   static defaultProps = {
      editEventItem: () => {}
   }
   static contextType = TravelerContext

   loadEventData = event_id => {
      this.setState({ loading: true })
      ApiEventsService.getEventByID(event_id)
         .then(data => {
            this.setState({
               event_name: data.event_name,
               event_loc: data.event_loc,
               description: data.description,
               loading: false
            })
         })
         .catch(error => this.setState({ error: error }))
   }
   componentDidMount() {
      const { event_id } = this.props.match.params
      this.loadEventData(event_id)
   }
   // Ensure content is updated correctly based on selected event
   componentDidUpdate(prevProps) {
      const { event_id } = this.props.match.params
      if(prevProps.match.params.event_id !== event_id) {
         this.loadEventData(event_id)
      }
   }

   handleEventNameChange = e => {
      this.setState({ event_name: e.target.value })
   }
   handleDateChange = (date, e) => {
      this.setState({ startDate: date, date: e.target.value })
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

   handleEditEvent = ev => {
      ev.preventDefault()
      const { event_id } = this.props.match.params
      const { event_name, startDate, event_loc, description } = this.state
      const updatedEvent = {
         event_name: event_name,
         date: moment(startDate).utc().local().format(),
         event_loc: event_loc,
         description: description,
      }
      // API call to patch selected event
      ApiEventsService.editEvent(event_id, updatedEvent)
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
         <>
         {loading 
            ? <LoadingSpinner />
            : (
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
         )}
         </>
      );
   }
}

export default EditEventItem;