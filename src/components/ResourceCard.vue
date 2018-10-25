<template>
  <router-link class="resource-link" :to="{ name: 'resource-detail', params: { filter: filter.toLowerCase(), id: resource.url.split('/').pop()}}">
    <div class="resource-card -shadow">
      <h4 class="title">{{ !!resource.name ? resource.name : "No name"}}</h4>
      <span>{{ !!resource.name ? resource.name : "No name"}}</span>
    </div>
  </router-link>
</template>
 
<script>
export default {
  props: {
    resource: {
      type: Object
    },
    filter: {
      type: String
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
