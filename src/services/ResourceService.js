import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getResources(filter, currentPage) {
    return apiClient.get(`/${filter}?page=${currentPage}`)
  },
  getResource(filter, id) {
    return apiClient.get(`/${filter}/${id}`)
  }
}
