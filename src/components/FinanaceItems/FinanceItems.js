import React, { Component } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import moment from 'moment'
import './FinanceItems.css'
import ApiFinancesService from '../../services/api-finance-service'
import TravelerContext from '../../context/TravlerContext'

export default class FinanaceItems extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selected: true,
      }
   }
   static contextType = TravelerContext

   onHover = () => {
      this.setState({ selected: false })
   }
   onExit = () =>  {
      this.setState({ selected: true })
   }
   handleDelete = ev => {
      ev.stopPropagation()
      const transaction_id = this.props.id
      ApiFinancesService.deleteTransaction(transaction_id)
         .then(() => {
            this.context.updateBalance()
            this.context.deleteFinanceItem(transaction_id)
         })
         .catch(error => console.log(error))

   }
   render() {
      const { idx, id, date, description, amount, type } = this.props
      const { selected } = this.state
      return (
         <>
            <li key={idx} id={id} className='finance-item' onMouseEnter={this.onHover} onMouseLeave={this.onExit}>
               {!selected && <FaRegTrashAlt className='finance-item-remove' onClick={this.handleDelete}/>}
               <div className='finance-item-date'>
                  <p className=''>{moment(date).utc().local().format("MM/DD")}</p>
               </div>
               <div className='finance-item-type'>
                  <p>{description}</p>
               </div>
               <div className='finance-item-amount'>
                  <p><span className={`${type === 'credit' ? 'amount-positive' : 'amount-negative'}`}>{`${amount}`}</span></p>
               </div>
            </li>
         </>
      )
   }
}