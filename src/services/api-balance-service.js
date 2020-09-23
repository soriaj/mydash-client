import config from '../config'
import TokenService from './token-service'

const ApiBalancesService = {
   getBalances(){
      return fetch(`${config.API_ENDPOINT}/balances`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   getBalancesById(balance_id) {
      return fetch(`${config.API_ENDPOINT}/balances/${balance_id}`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   updateBalance(balance_id, updatedBalance) {
      return fetch(`${config.API_ENDPOINT}/balances/${balance_id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedBalance),
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => {
         if (!res.ok) {
            return Promise.reject(res.error)
         }
      })
   }
}

export default ApiBalancesService