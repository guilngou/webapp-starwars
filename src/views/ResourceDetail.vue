<template>
    <div>
        <h1>Resource detail</h1>
        <p>This is {{ resource.name }} {{ !!resource.aliases ? (!!resource.aliases[0] ? resource.aliases[0] : "(No alias)") : "(No alias)" }}, Resource ID:#{{id}}</p>
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('fetchResource', {
      filter: this.filter,
      id: this.id
    })
  },
  computed: {
    filter() {
      return this.$route.query.filter || 'Characters'
    },
    id() {
      return this.$route.query.id || 1
    },
    ...mapState(['resource'])
  }
}
</script>

<style scoped>
</style>
