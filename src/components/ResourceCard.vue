<template>
  <router-link class="resource-link" :to="{ name: 'resource-detail' , query: { filter: filter, id: id }}">
    <div class="resource-card -shadow">
      <h4 class="title">{{ !!resource.name ? resource.name : "No name"}}</h4>
      <div v-if="filter==='characters'">
        <span>{{ !!resource.aliases ? (!!resource.aliases[0] ? resource.aliases[0] : "No alias") : "No alias" }}</span>
        <br />
      </div>
      <div v-if="filter==='books'">
        <span>{{ !!resource.numberOfPages ? `Number of pages: ${resource.numberOfPages}` : "Number of pages unknown"}}</span>
        <br />
        <span>{{ !!resource.publisher ? `Publisher: ${resource.publisher}` : "Publisher unknown"}}</span>
        <br />
      </div>
      <div v-if="filter==='houses'">
        <span>{{ !!resource.region ? `Region: ${resource.region}` : "Region unknown"}}</span>
        <br />
      </div>
    </div>
  </router-link>
</template>
 
<script>
export default {
  props: {
    resource: {
      type: Object
    },
    id: {
      type: String
    }
  },
  computed: {
    filter() {
      return this.$route.query.filter || 'characters'
    }
  }
}
</script>

<style scoped>
.resource-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.resource-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.resource-card > .title {
  margin: 0;
}

.resource-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
