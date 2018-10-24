<template>
    <div>
        <h1>Resource detail</h1>
        <p>This is {{ resourcename}} #{{id}}</p>
    </div>
    
</template>

<script>
export default {
  props: {
    resourcename: {
      type: String
    },
    id: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
