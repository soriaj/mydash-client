import React, { Component } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import moment from 'moment'
import TravelerContext from '../../context/TravlerContext'

export default class FinanceTransactionItems extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selected: true,
      }
   }
   static contextType = TravelerContext

   // On hover will will update to show delete icon
   onHover = () => {
      this.setState({ selected: false })
   }
   // On mouse exit will hide delete icon
   onExit = () =>  {
      this.setState({ selected: true })
   }
   handleDelete = ev => {
      ev.stopPropagation()
      const transaction_id = this.props.id
      this.props.handleDelete(transaction_id)
   }
   render() {
      const { idx, id, date, description, amount, type } = this.props
      const { selected } = this.state
      return (
         <>
            <li key={idx} id={id} className='finance-item' onMouseEnter={this.onHover} onMouseLeave={this.onExit}>
               {!selected && <FaRegTrashAlt className='finance-item-remove' onClick={this.handleDelete}/>}
               <div className='finance-item-date'>
                  <p className=''>{moment.utc(date).local().format("MM/DD")}</p>
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