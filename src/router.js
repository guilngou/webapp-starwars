import Vue from 'vue'
import Router from 'vue-router'
import ResourceDetail from './views/ResourceDetail.vue'
import ResourceList from './views/ResourceList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'resource-list',
      component: ResourceList
    },
    {
      path: '/resourcedetail/:resourcename/:id',
      name: 'resource-detail',
      component: ResourceDetail,
      props: true
    }
  ]
})
