import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getResources(filter) {
    return apiClient.get('/' + filter)
  },
  getResource(filter, id) {
    return apiClient.get(`/${filter}/${id}`)
  }
}
