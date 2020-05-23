import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBox(props) {
      return (
         // <div className='form-container'>
            <div className='login-form'>
               <form className='form-field' >
                  <div className='input-wrapper'>
                     <FaSearch className='fa-search icon'></FaSearch>
                     <label htmlFor='search' className='no-view'>Search</label>
                     <input
                        className='input-field'
                        type='text'
                        placeholder='Search Title...'
                        name='search'
                        value={props.term}
                        onChange={e => props.handleUpdate(e.target.value)}
                     />
                     <span className="focus-input-field"></span>
                  </div>
               </form>
            </div>
         // </div>
      )
}
