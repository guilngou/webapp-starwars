import Vue from 'vue'
import Vuex from 'vuex'
import ResourceService from '@/services/ResourceService.js'
import ParseLinkHeader from '@/services/ParseLinkHeader.js'

Vue.use(Vuex)

export default new Vuex.Store({
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
    fetchResources({ commit }, { filter, page }) {
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
          /*this.resources = response.data
          this.numberOfPage = parseInt(
            ParseLinkHeader.parse_link_header(response.headers.link).last.match(
              /page=([0-9]+)&pageSize/
            )[1]
          )*/
        })
        .catch(error => {
          console.error(error)
        })
    },
    fetchResource({ commit }, { filter, id }) {
      ResourceService.getResource(filter, id)
        .then(response => {
          commit('SET_RESOURCE', response.data)
          //this.resource = response.data
        })
        .catch(error => {
          console.log('Error :' + error)
        })
    }
  },
  getters: {}
})
