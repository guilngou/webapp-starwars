<template>
  <div>
    <h1>Resources Listing</h1>
    <el-radio-group v-model="filter" size="medium">
      <el-radio-button label="Characters"></el-radio-button>
      <el-radio-button label="Books"></el-radio-button>
      <el-radio-button label="Houses"></el-radio-button>
    </el-radio-group>
    <ResourceCard v-for="resource in resources" :key="resource.url.split('/').pop()" :filter="filter" :resource="resource" />
  </div>
</template>

<script>
import ResourceCard from '@/components/ResourceCard.vue'
import ResourceService from '@/services/ResourceService.js'

export default {
  components: {
    ResourceCard
  },
  data() {
    return {
      filter: 'Books',
      resources: []
    }
  },
  created() {
    ResourceService.getResources(this.filter)
      .then(response => {
        this.resources = response.data
        console.log('id : ' + response.data[0].url.split('/').pop())
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  watch: {
    filter() {
      ResourceService.getResources(this.filter)
        .then(response => {
          this.resources = response.data
          console.log('id : ' + response.data[0].url.split('/').pop())
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
