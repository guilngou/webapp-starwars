<template>
  <div>
    <h1>Resources Listing</h1>
    <el-radio-group v-model="filter" size="medium">
      <el-radio-button label="Characters"></el-radio-button>
      <el-radio-button label="Books"></el-radio-button>
      <el-radio-button label="Houses"></el-radio-button>
    </el-radio-group>
    <ResourceCard v-for="resource in resources" :key="resource.url.split('/').pop()" :filter="filter" :resource="resource" />
    <el-button-group>
      <el-button type="primary" @click="currentPage=1" :disabled="currentPage===1" icon="el-icon-d-arrow-left"></el-button>
      <el-button type="primary" @click="--currentPage" :disabled="currentPage===1" icon="el-icon-arrow-left"></el-button>
      <el-button type="primary" disabled>Page {{ currentPage }}/{{ numberOfPage }}</el-button>
      <el-button type="primary" @click="++currentPage" :disabled="currentPage===numberOfPage"><i class="el-icon-arrow-right el-icon-right"></i></el-button>
      <el-button type="primary" @click="currentPage=numberOfPage" :disabled="currentPage===numberOfPage"><i class="el-icon-d-arrow-right"></i></el-button>
    </el-button-group>
  </div>
</template>

<script>
import ResourceCard from '@/components/ResourceCard.vue'
import ResourceService from '@/services/ResourceService.js'
import ParseLinkHeader from '@/services/ParseLinkHeader.js'

export default {
  components: {
    ResourceCard
  },
  data() {
    return {
      filter: 'Characters',
      resources: [],
      currentPage: 1,
      numberOfPage: 1
    }
  },
  created() {
    ResourceService.getResources(this.filter, this.currentPage)
      .then(response => {
        this.resources = response.data
        this.numberOfPage = parseInt(
          ParseLinkHeader.parse_link_header(response.headers.link).last.match(
            /page=([0-9]+)&pageSize/
          )[1]
        )
      })
      .catch(error => {
        console.error(error)
      })
  },
  watch: {
    filter() {
      if (this.currentPage > 1) {
        this.currentPage = 1
      } else {
        ResourceService.getResources(this.filter, this.currentPage)
          .then(response => {
            this.resources = response.data
            this.numberOfPage = parseInt(
              ParseLinkHeader.parse_link_header(
                response.headers.link
              ).last.match(/page=([0-9]+)&pageSize/)[1]
            )
          })
          .catch(error => {
            console.error(error)
          })
      }
    },
    currentPage() {
      ResourceService.getResources(this.filter, this.currentPage)
        .then(response => {
          this.resources = response.data
          this.numberOfPage = parseInt(
            ParseLinkHeader.parse_link_header(response.headers.link).last.match(
              /page=([0-9]+)&pageSize/
            )[1]
          )
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
