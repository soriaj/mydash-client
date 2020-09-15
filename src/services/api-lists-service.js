import config from '../config'
import TokenService from './token-service'

const ApiListsService = {
   async getLists() {
      return await fetch(`${config.API_ENDPOINT}/lists`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   getListWithId(listId) {
      return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   postList(newList) {
      return fetch(`${config.API_ENDPOINT}/lists`, {
         method: 'POST',
         body: JSON.stringify(newList),
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   async postListWithId(newItem, listId) {
      return await fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
         method: 'POST',
         body: JSON.stringify(newItem),
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   async deleteList(listId) {
      return await fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
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

export default ApiListsService