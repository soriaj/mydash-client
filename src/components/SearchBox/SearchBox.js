import React, { Component } from 'react'
import { FaClock } from 'react-icons/fa'
import DatePicker from 'react-datepicker'

export default class SearchBox extends Component {
   state = {
      startDate: new Date(),
   }
   handleDateChange = date => {
      this.setState({ startDate: date })
      this.props.handleDateFilter(date)
  }

   render() {
      return (
         <div className='login-form'>
            <form className='form-field'>
               <div className='input-wrapper'>
               <FaClock className='fa-user icon'></FaClock>
                  <label htmlFor='date' className='no-view'>Date</label>
                     <DatePicker 
                        selected={this.state.startDate} 
                        onChange={this.handleDateChange}
                        placeholderText="Enter event date"
                        name='date'>
                     </DatePicker>
                  <span className='focus-input-field'></span>
               </div>
            </form>
         </div>
      )
   }
}