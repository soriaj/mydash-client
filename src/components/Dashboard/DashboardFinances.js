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
          <h3 
              className='content-header-title' 
              onClick={this.showFinanceItems}>
              {this.state.showFinance ? <FaChevronCircleUp className='title-chevron'/> : <FaChevronCircleDown className='title-chevron'/>}
              Finanace 
          </h3>
      )
   }
   disableChevronClick = () => {
      return (
          <h3 className='content-header-title'>Lists</h3>            
      )
   }
   addItem = () => {
      this.props.history.push(`/add-finance`)
   }
   showFinanceItems = () => {
      this.setState({
          showFinance: !this.state.showFinance
      })
   }
   render() {
      const { finances } = this.context
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
                        {finances.map((item,idx) => (
                           <p key={idx} className='finance-current-balance'>Current Balance: ${`${item.balance.toFixed(2)}`}</p>)
                        )}
                  </div>
                  <ul className='finanaces-wrapper'>
                     {finances.map((items, idx) => (
                        <FinanceItems
                           key={idx}
                           transactions={items.transactions}
                        />
                     ))}
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