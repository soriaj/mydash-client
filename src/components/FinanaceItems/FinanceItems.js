import React from 'react'
import moment from 'moment'
import './FinanceItems.css'

export default function FinanaceItems(props) {
   return (
      <>
         <li key={props.idx} className='finance-item'>
            <div className='finance-item-date'>
               <p className=''>{moment(props.date).utc().local().format("MM/DD")}</p>
            </div>
            <div className='finance-item-type'>
               <p>{props.description}</p>
            </div>
            <div className='finance-item-amount'>
               {/* <p><span className={`${props.type === 'credit' ? 'amount-positive' : 'amount-negative'}`}>{`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(props.amount)}`}</span></p> */}
               <p><span className={`${props.type === 'credit' ? 'amount-positive' : 'amount-negative'}`}>{`${props.amount}`}</span></p>
            </div>
         </li>
      </>
   )
}