<template>
  <div>
    <h1>Resources Listing for {{user.user.name}}</h1>

    <router-link :to="{ name: 'resource-list', query: { filter: 'characters' } }">
      Characters</router-link>
    <template> | </template>
    <router-link :to="{ name: 'resource-list', query: { filter: 'books' } }">
      Books</router-link>
    <template> | </template>
    <router-link :to="{ name: 'resource-list', query: { filter: 'houses' }}">
      Houses</router-link>

    <ResourceCard v-for="resource in resources" :key="resource.url.split('/').pop()" :resource="resource" :id="resource.url.split('/').pop()" />

    <router-link :class="{ disabled: page===1 }" :to="{ name: 'resource-list', query: { filter: filter, page: 1 } }" rel="first">
      First page</router-link>
    <template> | </template>
    <router-link :class="{ disabled: page===1 }" :to="{ name: 'resource-list', query: { filter: filter, page: page - 1 } }" rel="prev">
      Prev page</router-link>
    <template> | </template>
    <template>Page {{ page }}/{{ numberOfPage }}</template>
    <template> | </template>
    <router-link :class="{ disabled: page===numberOfPage }" :to="{ name: 'resource-list', query: { filter: filter, page: page + 1 } }" rel="next">
      Next page</router-link>
    <template> | </template>
    <router-link :class="{ disabled: page===numberOfPage }" :to="{ name: 'resource-list', query: { filter: filter, page: numberOfPage} }" rel="last">
      Last page</router-link>
  </div>
</template>

<script>
import ResourceCard from '@/components/ResourceCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ResourceCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    filter() {
      return this.$route.query.filter || 'characters'
    },
    ...mapState(['numberOfPage', 'resources', 'user'])
  },
  created() {
    this.$store.dispatch('fetchResources', {
      filter: this.filter,
      page: this.page
    })
  }
}
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>
