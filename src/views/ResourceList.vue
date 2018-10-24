<template>
  <div>
    <h1>Resources Listing</h1>
    <ResourceCard />
  </div>
</template>

<script>
import ResourceCard from '@/components/ResourceCard.vue'
import axios from 'axios'

export default {
  components: {
    ResourceCard
  },
  data() {
    return {
      resources: []
    }
  },
  created() {
    axios
      .get('https://www.anapioficeandfire.com/api')
      .then(response => {
        this.resources = response.data
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>
</style>
