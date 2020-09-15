import React, { Component } from 'react'
// import config from '../../config'

export default class EditListItemDetails extends Component {
   state = {
      items: []
   }
   render() {
      console.log(this.state.items)
      return (
         <div>
            <h1>Hello Edit List Item Details</h1>
         </div>
      )
   }
}
