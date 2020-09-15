import React, { Component } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import EventsTimeline from '../EventsTimeline/EventsTimeLine'
import { FaSearch, FaPlus } from 'react-icons/fa'
import ApiEventsService from '../../services/api-events-service'

export default class Events extends Component {
   state = {
      loading: false,
      searchTerm: '',
      events: []
   }
   
   componentDidMount() {
      this.setState({ loading: true })
      try {
         ApiEventsService.getEvents()
            .then(data => this.setState({ events: data, loading: false }))
      }
      catch(error) {
         this.setState({ error: error })
      }
   }

   // Handles search filter selection
   handleSearchTerm = ev => {
      this.setState({ searchTerm: ev.target.value })
   }
   backToDashboard = () => {
      this.props.history.push('/dashboard')
   }
   addNewEvent = () => {
      this.props.history.push(`/add-event`)
   }
   render() {
      const { loading, searchTerm, events } = this.state
      const displayEventSorted = events.sort((a,b) => new Date(b.date) - new Date(a.date))
      return (
         <>
            {loading 
               ? <LoadingSpinner /> 
               : (
               <>
               <div className='list-details-title'>
                  <h3>Events</h3>
               </div>

               <div className='add-list-item'>
                  <form className='form-field'>
                        <div className='list-detail-controls'>
                           <div className='back-to-dashboard'>
                              <BackToDashboard backToDashboard={this.backToDashboard}/>       
                           </div>
                           <button className='save-btn events' onClick={this.addNewEvent}><FaPlus /><span>Add Event</span></button>
                        </div>
                        <div className='input-wrapper'>
                           <FaSearch className="fa-plus icon"></FaSearch>
                           <label htmlFor="search_event" className='no-view'>Search Event Name</label>
                           <input 
                              type='text' 
                              name='search_event' 
                              id='search_event'
                              value={this.state.searchTerm}
                              onChange={this.handleSearchTerm}
                              placeholder='Search Event Name' 
                              className='input-field'
                           />
                           <span className="focus-input-field"></span>
                        </div>
                  </form>
               </div>
               <div className='list-container'>
                  <div className='events-timeline'>
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
               </> 
            )}
         </>
      )
   }
}