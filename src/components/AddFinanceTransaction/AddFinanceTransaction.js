import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import Loading from '../Loading/Loading'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'
import { FaMoneyBillAlt, FaFileInvoice, FaClock, FaCaretSquareDown} from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import './AddFinanceTransaction.css'

export default class AddFinanceTransaction extends Component {
   state = {
      error: null,
      loading: false,
      startDate: new Date(),
      option: 'debit'
   }
   static contextType = TravelerContext

   addTransaction(newTrasaction) {
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/finances`, {
         method: 'POST',
         body: JSON.stringify(newTrasaction),
         headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(res => 
         (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
      )
   }

   updateCurrentBalance(updatedBalance) {
      const { balances } =  this.context
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/balances/${balances[0].user_id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedBalance),
         headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
         }
      })
      .then(res => 
         (!res.ok)   
         ? res.json().then(e => Promise.reject(e))
         : res.json()
      )
   }

   handleSubmit = ev => {
      ev.preventDefault()
      const { description, amount } = ev.target
      const { startDate, option } = this.state
      const { addFinananceItem, balances } = this.context
      let count = Math.floor(Math.random() * 10000)
      const newTrasaction = {
         id: count,
         date: moment(startDate).utc().local().format(),
         type: option,
         description: description.value,
         amount: Number(amount.value),
         user_id: 1
      }
      this.setState({ error: null })
      this.addTransaction(newTrasaction)
      .then(data => {
         addFinananceItem(data)
      })
      if(option === 'debit') {
         let updatedBalance = {
            balance: Number(balances[0].balance - Number(amount.value))
         }
         this.updateCurrentBalance(updatedBalance)
      }
      if(option === 'credit') {
         let updatedBalance = {
            balance: Number(balances[0].balance + Number(amount.value))
         }
         this.updateCurrentBalance(updatedBalance)
      }
      
      this.props.history.push(`/dashboard`)       
   }
   
   backToDashboard = () => {
      this.props.history.push('/dashboard')
   }

   handleDateChange = date => {
      this.setState({ startDate: date })
   }
   handleOptionChange = ev => {
      this.setState({ option: ev.target.value })
   }
   render() {
      const { error, loading } = this.state
      return (
         <article className='main-content'>
            <section className='form-container'>
               <div className='login-form'>
                  <form className='form-field' onSubmit={this.handleSubmit}>
                     <div>
                        <h1>Add New Transaction</h1>
                     </div>
                     <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                     </div>
                     <div className='input-wrapper'>
                           <FaClock className='fa-user icon'></FaClock>
                           <label htmlFor='date' className='no-view'>Date</label>
                              <DatePicker 
                                 selected={this.state.startDate} 
                                 onChange={this.handleDateChange}
                                 placeholderText="Enter Transaction Date"
                                 name='date'
                                 required 
                              />
                           <span className='focus-input-field'></span>
                     </div>
                     <div className='input-wrapper custom-select'>
                        <FaCaretSquareDown className="fa-caret-square-down icon" ></FaCaretSquareDown>
                        <label htmlFor="type" className='no-view'>Description</label>
                        <select
                           name="type" 
                           id="type" 
                           placeholder='Select Transaction Type' 
                           className='input-field select-options'
                           value={this.state.option}
                           onChange={this.handleOptionChange}
                           required
                        >
                           <option value='debit' className='option-style'>Purchase</option>
                           <option value='credit' className='option-style'>Income</option>
                        </select>
                        <span className="focus-input-field"></span>
                     </div>
                     <div className='input-wrapper'>
                        <FaFileInvoice className="fa-money icon"></FaFileInvoice>
                        <label htmlFor="description" className='no-view'>Description</label>
                        <input 
                           type="text" 
                           name="description" 
                           id="description" 
                           placeholder='Enter Transaction Description' 
                           className='input-field'
                           required
                        />
                        <span className="focus-input-field"></span>
                     </div>
                     <div className='input-wrapper'>
                        <FaMoneyBillAlt className="fa-money icon"></FaMoneyBillAlt>
                        <label htmlFor="amount" className='no-view'>Amount</label>
                        <input 
                           type="number"
                           max="9999999999"
                           step="0.01"
                           pattern="^\d+\.\d{0,3}$"
                           name="amount" 
                           id="amount" 
                           placeholder='Enter Transaction Amount' 
                           className='input-field'
                           required
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
