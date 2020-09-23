import config from '../config'
import TokenService from './token-service'

const ApiEventsService = {
   async getEvents() {
      return await fetch(`${config.API_ENDPOINT}/events`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   getEventByID(event_id) {
      return fetch(`${config.API_ENDPOINT}/events/${event_id}`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   addEvent(newEvent) {
      return fetch(`${config.API_ENDPOINT}/events`, {
         method: 'POST',
         body: JSON.stringify(newEvent),
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
   },
   deleteEvent(event_id) {
      return fetch(`${config.API_ENDPOINT}/events/${event_id}`, {
         method: 'DELETE',
         headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
         }
      })
      .then(res => {
         if(!res.ok) {
            return Promise.reject(res.error)
         }
      })
   },
   editEvent(event_id, updatedEvent) {
      return fetch(`${config.API_ENDPOINT}/events/${event_id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedEvent),
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

export default ApiEventsService