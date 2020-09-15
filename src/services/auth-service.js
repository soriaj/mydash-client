import config from '../config'

const AuthService = {
   Login(creds) {
      return fetch(`${config.API_ENDPOINT}/auth/login`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(creds)
      })
      .then(res => !res.ok ? res.json().then(err => Promise.reject(err)) : res.json())
   },
   newUser(user) {
      return fetch(`${config.API_ENDPOINT}/users`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(user),
      })
      .then(res => !res.ok ? res.json().then(err => Promise.reject(err)) : res.json()) 
   }
}

export default AuthService