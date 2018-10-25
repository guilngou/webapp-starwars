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
  },
  getCharacters() {
    return apiClient.get('/characters')
  },
  getCharacter(id) {
    return apiClient.get('/characters/' + id)
  },
  getBooks() {
    return apiClient.get('/books')
  },
  getBook(id) {
    return apiClient.get('/books/' + id)
  },
  getHouses() {
    return apiClient.get('/houses')
  },
  getHouse(id) {
    return apiClient.get('/house/' + id)
  }
}
