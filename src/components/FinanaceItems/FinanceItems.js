import React from 'react'
import moment from 'moment'
import './FinanceItems.css'

export default function FinanaceItems(props) {
   return (
      <>
      <li className='finance-item-header'>
         <div className='date-header'>Date</div>
         <div className='type-header'>Transaction</div>
         <div className='amount-header'>Amount</div>
      </li>
      {props.transactions.map((items, idx) => (
         <li key={idx} className='finance-item'>
            <div className='finance-item-date'>
               <p className=''>{moment(items.date).utc().local().format("MM/DD")}</p>
            </div>
            <div className='finance-item-type'>
               <p>{items.type}</p>
            </div>
            <div className='finance-item-amount'>
               <p>${`${items.amount.toFixed(2)}`}</p>
            </div>
         </li>
      ))}
      </>
   )
}