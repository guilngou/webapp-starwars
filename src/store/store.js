import Vue from 'vue'
import Vuex from 'vuex'
import ResourceService from '@/services/ResourceService.js'
import ParseLinkHeader from '@/services/ParseLinkHeader.js'
import * as user from '@/store/modules/user.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    notification
  },
  state: {
    resources: [],
    numberOfPage: 1,
    resource: {}
  },
  mutations: {
    SET_RESOURCES(state, resources) {
      state.resources = resources
    },
    SET_NUMBER_OF_PAGE(state, numberOfPage) {
      state.numberOfPage = numberOfPage
    },
    SET_RESOURCE(state, resource) {
      state.resource = resource
    }
  },
  actions: {
    fetchResources({ commit, dispatch }, { filter, page }) {
      ResourceService.getResources(filter, page)
        .then(response => {
          commit('SET_RESOURCES', response.data)
          commit(
            'SET_NUMBER_OF_PAGE',
            parseInt(
              ParseLinkHeader.parse_link_header(
                response.headers.link
              ).last.match(/page=([0-9]+)&pageSize/)[1]
            )
          )
          const notification = {
            type: 'success',
            message: 'Resources have been successfully fetched!'
          }
          dispatch('notification/add', notification, { root: true })
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching resources: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    },
    fetchResource({ commit, dispatch }, { filter, id }) {
      ResourceService.getResource(filter, id)
        .then(response => {
          commit('SET_RESOURCE', response.data)
          const notification = {
            type: 'success',
            message: 'Your resource has been fetched!'
          }
          dispatch('notification/add', notification, { root: true })
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message:
              'There was a problem fetching resource id ' +
              id +
              ' : ' +
              error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  },
  getters: {}
})
