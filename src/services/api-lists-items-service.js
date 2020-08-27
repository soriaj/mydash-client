import config from '../config'
import TokenService from './token-service'

const ApiListsItemsService = {
   postListsItems(newItem) {
      return fetch(`${config.API_ENDPOINT}/lists_items`, {
         method: 'POST',
         body: JSON.stringify(newItem),
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   patchListsItem(udpatedItem, itemId) {
      return fetch(`${config.API_ENDPOINT}/lists_items/${itemId}`, {
         method: 'PATCH',
         body: JSON.stringify(udpatedItem),
         headers: {
             'content-type': 'application/json',
             'authorization': `basic ${TokenService.getAuthToken()}`
         }
     })
   },
   deleteListsItem(itemId) {
      return fetch(`${config.API_ENDPOINT}/lists_items/${itemId}`, {
         method: 'DELETE',
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => {
         if(!res.ok) {
            return Promise.reject(res.error)
         }
      })
   }
}

export default ApiListsItemsService