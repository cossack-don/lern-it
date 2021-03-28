<template >
  <div class="before-navigation-header">
    <Search />
  </div>
</template>

<script>
import Search from "@/modules/header/components/Search.vue";
export default {
  components: {
    Search,
  },
};
</script>

<style>
.before-navigation-header {
  padding-top: 30px;
  padding-bottom: 30px;
  background: #bbddce;
}
</style>