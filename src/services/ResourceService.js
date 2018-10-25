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
  getResources(filter, currentPage) {
    return apiClient.get(`/${filter}?page=${currentPage}`)
  },
  getResource(filter, id) {
    return apiClient.get(`/${filter}/${id}`)
  }
}
