import React, { Component } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import BackToDashboard from '../BackToDashboard/BackToDashboard'
import TravlerContext from '../../context/TravlerContext'
import { FaPlus } from 'react-icons/fa'
import SearchBox from '../SearchBox/SearchBox'
import './Transactions.css'
import FinanceItems from '../FinanaceItems/FinanceItems'

export default class Transactions extends Component {
   state = {
      loading: false,
      startDate: new Date(),
      searchTerm: '',
      finances: [],
      balances: []
   }
   static contextType = TravlerContext

   async componentDidMount(){
      this.setState({ loading: true })
      try {
         const financesAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/finances`)
         if(!financesAPI.ok) {
               throw Error(financesAPI.statusText)
         }
         const balancesAPI = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/balances`)
         if(!balancesAPI.ok) {
               throw Error(balancesAPI.statusText)
         }
         const financesRes = await financesAPI.json()
         const balancesRes = await balancesAPI.json()
         this.setState({ finances: [...financesRes], balances: [...balancesRes], loading: false })
      }
      catch (error) {
         console.log(error)
      }
   }

   // Handles search filter selection
   handleSearchTerm = ev => {
      this.setState({ searchTerm: ev.target.value })
   }
   backToDashboard = () => {
      this.props.history.push('/dashboard')
   }
   addNewTransaction = () => {
      this.props.history.push('/add-transaction')
   }
   // Handles selected date filter selection
   handleDateChange = (date) => {
      this.setState({ startDate: date })
  }
   render() {
      const { loading } = this.state
      const { finances, balances } = this.state
      const filteredBalance = balances.filter(data => data.user_id === 1 ? data : '')
      const displayFinancesSorted = finances.sort((a,b) => new Date(b.date) - new Date(a.date))
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
                              <button className='save-btn events' onClick={this.addNewTransaction}><FaPlus /><span>Add Transaction</span></button>
                           </div>
                        </form>
                     
                        <h4>Filter By Date:</h4>
                        <SearchBox handleDateFilter={selected => this.handleDateChange(selected)} />
                     </div>
                     <div className='list-details-title'>
                        {filteredBalance.map((item, idx) => (
                           <p key={idx} className='current-balance'>Current Balance: {`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.balance)}`}</p>
                        ))}
                     </div>
                     <ul className='finanaces-wrapper'>
                        <li className='finance-item-header'>
                           <div className='date-header'>Date</div>
                           <div className='type-header'>Transaction</div>
                           <div className='amount-header'>Amount</div>
                        </li>
                        {displayFinancesSorted.map((transaction, idx) => 
                           <FinanceItems
                              key={idx}
                              id={transaction.id}
                              date={transaction.date}
                              type={transaction.type}
                              description={transaction.description}
                              amount={transaction.amount}
                           />
                        )}
                     </ul>
                  </div>
               </div>
            )}
         </>
      )}
}
