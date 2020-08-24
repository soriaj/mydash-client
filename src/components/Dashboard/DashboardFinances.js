import React, { Component } from 'react';
import { FaChevronCircleDown, FaChevronCircleUp, FaPlus } from 'react-icons/fa'
import TravelerContext from '../../context/TravlerContext'
import FinanceItems from '../FinanaceItems/FinanceItems'

class DashboardFinances extends Component {
   state = {
      showFinance: true,
   }
   static contextType = TravelerContext

   componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);    
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
   }
  
   updatePredicate = () => {
      this.setState({ isDesktop: window.innerWidth > 1024 });
   }
   enableChevronClick = () => {
      return (
         <>
          <h3 
              className='content-header-title' 
              onClick={this.showFinanceItems}>
              {this.state.showFinance ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
              Finanace 
          </h3>
          <h4 className='sub-content-header'>(last 10 transactions)</h4>
          </>
      )
   }
   disableChevronClick = () => {
      return (
         <>
          <h3 className='content-header-title'>Finance</h3>
          <h4  className='sub-content-header'>(last 10 transactions)</h4>
          </>
      )
   }
   // Directs user to AddFinanceTransaction component
   addItem = () => {
      this.props.history.push(`/add-transaction`)
   }
   
   showFinanceItems = () => {
      this.setState({
          showFinance: !this.state.showFinance
      })
   }
   render() {
      const { finances, balances } = this.context
      const displayFinancesSorted = finances.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,10)
      const { showFinance } = this.state
      return (
            <section className={`content finances-section ${showFinance ? 'content-visible' : ''}`}>
               <div className='content-header'>
                  <div className='content-titles'>
                     {this.state.isDesktop
                        ? this.disableChevronClick()
                        : this.enableChevronClick()
                     }
                  </div>
                  <div className={`add-icon ${showFinance ? 'list-add' : ''}`} onClick={this.addItem}>
                        <FaPlus className='fas fa-plus'></FaPlus>
                  </div>
               </div>
               <div className={`content-finance-cards ${showFinance ? 'finance-cards-visible' : 'finance-cards-hidden'}`}>
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
                  <div className='add-icon-container list-add'>
                     <div className='add-icon-cir list-add'>
                        <FaPlus className='fas fa-plus-alt' onClick={this.addItem}></FaPlus>
                     </div>
                  </div>
               </div>                    
            </section>
      );
   }
}

export default DashboardFinances;