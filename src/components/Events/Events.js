import React, { Component } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import TravlerContext from '../../context/TravlerContext'
import EventsTimeline from '../EventsTimeline/EventsTimeLine'
import { FaCalendarPlus } from 'react-icons/fa'

export default class Events extends Component {
   state = {
      loading: false,
      searchTerm: '',
   }
   static contextType = TravlerContext
   // Handles search filter selection
   handleSearchTerm = ev => {
      this.setState({ searchTerm: ev.target.value })
   }
   backToDashboard = () => {
      this.props.history.push('/dashboard')
   }
   render() {
      const { loading, searchTerm } = this.state
      console.log(this.state.searchTerm2)
      const { events } = this.context
      const displayEventSorted = events.sort((a,b) => new Date(b.date) - new Date(a.date))
      return (
         <>
            {loading 
               ? <LoadingSpinner /> 
               : (
                  <>
                  <article>
                  <div className='list-details-title'>
                     <h3>All Events</h3>
                  </div>
                  <div className='list-detail-controls add-list-item'>
                     <div className='back-to-dashboard'>
                        <BackToDashboard backToDashboard={this.backToDashboard}/>       
                     </div>
                  </div>
                  <div className=' list-container'>
                  <div className='events-timeline'>
                     <h4>Filter By Event Name:</h4>
                     {/* Filter selector based on event name */}
                     <div className='login-form'>
                        <form className='form-field'>
                           <div className='input-wrapper'>
                           <FaCalendarPlus className='fa-user icon'></FaCalendarPlus>
                              <label htmlFor='date' className='no-view'>Search Name</label>
                              <input 
                                 type='text' 
                                 name='event_name' 
                                 id='event_name'
                                 value={this.state.searchTerm}
                                 onChange={this.handleSearchTerm}
                                 placeholder='Event Name' 
                                 className='input-field'
                                 />
                              <span className='focus-input-field'></span>
                           </div>
                        </form>
                     </div>
                     <ul className='timeline-list'>
                        {/* filter sorted events array and only show events that match selected name */}
                        {displayEventSorted.filter(item => item.event_name.toLowerCase().includes(searchTerm.toLowerCase()))
                           .map((event,idx) =>
                              <EventsTimeline 
                                 key={idx}
                                 id={event.id}
                                 name={event.event_name}
                                 date={event.date}
                                 event_loc={event.event_loc}
                                 description={event.description}
                                 history={this.props.history}
                           />
                        )}
                    </ul>
                  </div>
                  </div>
                  </article>
                  </> 
            )}
         </>
      )
   }
}