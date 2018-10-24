<template>
    <div>
        <h1>Resources Listing</h1>
        <router-link :to="{ name: 'resource-detail', params: { resourcename: 'book', id: 1}}">Book #1</router-link>
    </div>
    
</template>

<script>
export default {}
</script>

<style scoped>
</style>
