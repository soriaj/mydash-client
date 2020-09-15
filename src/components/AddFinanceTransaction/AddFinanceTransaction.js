import React, { Component } from 'react'
import TravelerContext from '../../context/TravlerContext'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import SaveButton from '../SaveButton/SaveButton'
import { FaMoneyBillAlt, FaFileInvoice, FaClock, FaCaretSquareDown} from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import './AddFinanceTransaction.css'
import ApiFinancesService from '../../services/api-finance-service'
import ApiBalancesService from '../../services/api-balance-service'

export default class AddFinanceTransaction extends Component {

   state = {
      error: null,
      startDate: new Date(),
      option: 'debit',
      balances: []
   }
   static contextType = TravelerContext
   abortController = new AbortController()

   // Loads current balance to state
   componentDidMount() {
      ApiBalancesService.getBalances()
         .then(balance => this.setState({ balances: balance }))
         .catch(error => new Error(error))
   }

   // Adds new transaction to the database
   addTransaction(newTrasaction) {
      const { addFinananceItem } = this.context
      ApiFinancesService.addTransaction(newTrasaction)
         .then(trx => addFinananceItem(trx))
         .catch(error => new Error(error))
   }

   // Updates current balance
   updateCurrentBalance(updatedBalance) {
      const { balances } = this.state
      const { editBalance } = this.context
      const userId = balances[0].id
      ApiBalancesService.updateBalance(userId, updatedBalance)
         .then(() => {
            editBalance(updatedBalance)
         })
         .catch(error => new Error(error))
   }

   handleSubmit = ev => {
      ev.preventDefault()
      const { description, amount } = ev.target
      const { startDate, option, balances } = this.state
      const newTrasaction = {
         date: moment(startDate).utc().local().format(),
         type: option,
         description: description.value,
         amount: Number(amount.value),
      }
      this.setState({ error: null })
      this.addTransaction(newTrasaction)

      if(option === 'debit') {
         let updatedBalance = {
            balance: balances[0].balance - Number(amount.value)
         }
         this.updateCurrentBalance(updatedBalance)
      }
      if(option === 'credit') {
         let updatedBalance = {
            balance: balances[0].balance + Number(amount.value)
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
      const { error } = this.state
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
