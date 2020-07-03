import axios from 'axios'
import nProgress from 'nprogress'

// Single Axios Instance for App
const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Axios Interceptor
// When request is about to go out, start the progress bar
apiClient.interceptors.request.use(config => {
  nProgress.start()
  return config
})

//Axios Interceptor
//When response returns, finish the progress bar
apiClient.interceptors.response.use(response => {
  nProgress.done()
  return response
})

// Each API Call
export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
