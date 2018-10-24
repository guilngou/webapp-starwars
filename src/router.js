import Vue from 'vue'
import Router from 'vue-router'
import ResourceDetail from './views/ResourceDetail.vue'
import ResourcesList from './views/ResourcesList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'resources-list',
      component: ResourcesList
    },
    {
      path: '/resourcedetail/:resourcename/:id',
      name: 'resource-detail',
      component: ResourceDetail,
      props: true
    }
  ]
})
