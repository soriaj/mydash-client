import config from '../config'
import TokenService from './token-service'

const ApiFinancesService = {
   async getFinances() {
      return await fetch(`${config.API_ENDPOINT}/finances`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   getFinancestByID(finance_id) {
      return fetch(`${config.API_ENDPOINT}/finances/${finance_id}`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   addTransaction(newTransaction) {
      return fetch(`${config.API_ENDPOINT}/finances`, {
         method: 'POST',
         body: JSON.stringify(newTransaction),
         headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   }
}

export default ApiFinancesService