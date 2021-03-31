<template>
  <div>
      <ul>
      <li v-for="(item, index) in renderLinksJob" :key="index">
          <a :href="item.url" target="_blank">{{item.name}}</a>
      </li>
      </ul>
</div>
</template>

<script>
export default {

  computed: {
    renderLinksJob() {

      return this.$store.state.wrapperObjectLinksForJob.objectLinksForJob.jobLinks;
    },
  },
}
</script>

<style>

</style>