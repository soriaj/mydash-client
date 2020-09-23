import config from '../config'
import TokenService from './token-service'

const ApiUsersService = {
   getFullName() {
      return fetch(`${config.API_ENDPOINT}/users`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   }
}

export default ApiUsersService