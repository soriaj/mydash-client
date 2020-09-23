import React, { Component } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import TravlerContext from '../../context/TravlerContext'
import { FaPlus, FaClock } from 'react-icons/fa'
import './Transactions.css'
import ApiBalancesService from '../../services/api-balance-service'
import ApiFinancesService from '../../services/api-finance-service'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import FinanceTransactionItems from '../FinanceTransactionItems/FinanceTransactionItems'

export default class Transactions extends Component {
   state = {
      error: null,
      loading: false,
      startDate: new Date(),
      endDate: new Date(),
      finances: [],
      balances: [],
   }
   static contextType = TravlerContext

   async componentDidMount() {
      this.setState({ loading: true })
      try {
          await ApiBalancesService.getBalances()
            .then(balance => this.setState({ balances: balance }))
          await ApiFinancesService.getFinances()
            .then(finance => this.setState({ finances: finance, loading: false }))
      }
      catch(error) {
         this.setState({ error: error })
      }
   } 

   backToDashboard = () => {
      this.props.history.push('/dashboard')
   }
   addNewTransaction = () => {
      this.props.history.push('/add-transaction')
   }
   // Handles selected date filter selection
   handleStartDateChange = (date) => {
      this.setState({ startDate: date })
   }
   handleEndDateChange = (date) => {
      this.setState({ endDate: date })
   }
   // Removes transaction from finance state
   deleteFinanceItem = transaction_id => {
      const currrentFinances = this.state.finances
      const newFinances = currrentFinances.filter(trx => trx.id !== transaction_id)
      setTimeout(() => {
        this.setState({ finances: newFinances })
      }, 200)
   }
   // Sets balance state
   setBalanceItems = balance => {
      this.setState({ balances: balance })
   }
   // Get updated balance
   updateBalance = () => {
      ApiBalancesService.getBalances()
        .then(balance => this.setBalanceItems(balance))
        .catch(error => console.log(error))
   }
   handleDelete = id => {
      ApiFinancesService.deleteTransaction(id)
         .then(() => {
            this.updateBalance()
            this.deleteFinanceItem(id)
         })
   }

   render() {
      const { loading, finances, startDate, endDate, balances } = this.state
      const sortedFinances = finances.sort((a, b) => new Date(b.date) - new Date(a.date))
      return (
         <>
            {loading
               ? <LoadingSpinner />
               : (
               <div className='content-finance-cards-transactions'>
                  <div className='transaction-container'>
                     <div className='list-details-title'>
                        <h3>Transactions</h3>
                     </div>
                     <div className='add-list-item'>
                        <form className='form-field'>
                           <div className='list-detail-controls'>
                              <div className='back-to-dashboard'>
                                 <BackToDashboard backToDashboard={this.backToDashboard}/>       
                              </div>
                              <button className='save-btn events' onClick={this.addNewTransaction}><FaPlus /><span>Transaction</span></button>
                           </div>
                        </form>
                     
                        <div className='date-range-filter'>
                           <h4>Start Date:</h4>
                           <div className='login-form'>
                              <form className='form-field'>
                                 <div className='input-wrapper'>
                                 <FaClock className='fa-user icon'></FaClock>
                                    <label htmlFor='date' className='no-view'>Date</label>
                                       <DatePicker 
                                          selected={startDate} 
                                          onChange={this.handleStartDateChange}
                                          selectsStart
                                          startDate={startDate}
                                          endDate={endDate}
                                          name='date'>
                                       </DatePicker>
                                    <span className='focus-input-field'></span>
                                 </div>
                              </form>
                           </div>

                           <h4>End Date:</h4>
                           <div className='login-form'>
                              <form className='form-field'>
                                 <div className='input-wrapper'>
                                 <FaClock className='fa-user icon'></FaClock>
                                    <label htmlFor='date' className='no-view'>Date</label>
                                       <DatePicker 
                                          selected={endDate} 
                                          onChange={this.handleEndDateChange}
                                          selectsEnd
                                          startDate={startDate}
                                          endDate={endDate}
                                          minDate={startDate}
                                          name='date'>
                                       </DatePicker>
                                    <span className='focus-input-field'></span>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className='list-details-title'>
                        {balances.map((item, idx) => (
                           <p key={idx} className='current-balance'>Current Balance: {`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.balance)}`}</p>
                        ))}
                     </div>
                     <ul className='finanaces-wrapper'>
                        <li className='finance-item-header'>
                           <div className='date-header'>Date</div>
                           <div className='type-header'>Transaction</div>
                           <div className='amount-header'>Amount</div>
                        </li>
                        {sortedFinances.filter(item => moment(startDate).utc().local().format().slice(0,10) < item.date && item.date < moment(endDate).add(2, 'days').utc().local().format().slice(0,10))
                           .map((trx, idx) => 
                              <FinanceTransactionItems
                                 key={idx}
                                 id={trx.id}
                                 date={trx.date}
                                 type={trx.type}
                                 description={trx.description}
                                 amount={trx.amount}
                                 handleDelete={this.handleDelete}
                              />
                           )}
                     </ul>
                  </div>
               </div>
            )}
         </>
      )}
}