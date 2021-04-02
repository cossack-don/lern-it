<template>
  <div class="youtobe-list-lessons">
    <ul class="youtobe-list-lessons__wrapper-list">
      <li
        class="youtobe-list-lessons__item"
        v-for="item in renderYoutobeLinks"
        :key="item.url"
      >
        <a
          :href="item.url"
          target="_blank"
          class="youtobe-list-lessons__link"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    renderYoutobeLinks() {
      return this.$store.state.wrapperlistYoutobeLessonsLinks
        .listYoutobeLessonsLinks.arrayLinks;
      console.log();
    },
  },
};
</script>

<style lang="scss">
.youtobe-list-lessons {
  display: flex;
  justify-content: center;
  margin-top: 35px;
  /* height: 100vh; */

  &__item {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>