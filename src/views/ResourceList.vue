<template>
  <div>
    <h1>Resources Listing</h1>
    <el-radio-group v-model="filter" size="medium">
      <el-radio-button label="Characters"></el-radio-button>
      <el-radio-button label="Books"></el-radio-button>
      <el-radio-button label="Houses"></el-radio-button>
    </el-radio-group>
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
      filter: 'Characters'
    }
  },
  created() {
    axios
      .get('https://www.anapioficeandfire.com/api/' + this.filter)
      .then(response => {
        //this.resourceTypes = Object.keys(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>
</style>
