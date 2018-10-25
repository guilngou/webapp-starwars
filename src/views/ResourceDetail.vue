<template>
    <div>
        <h1>Resource detail</h1>
        <p>This is {{ resource.name}}, character #{{id}}</p>
    </div>

</template>

<script>
import ResourceService from '@/services/ResourceService.js'

export default {
  props: {
    resourcename: {
      type: String
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      resource: {}
    }
  },
  created() {
    ResourceService.getCharacter(this.id)
      .then(response => {
        console.log(response.data)
        this.resource = response.data
      })
      .catch(error => {
        console.log('Error :' + error)
      })
  }
}
</script>

<style scoped>
</style>
