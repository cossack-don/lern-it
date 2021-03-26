<template>
  <div class="wrapper-main-content">
    <!-- main content
    <h2>Example heading <b-badge>New</b-badge></h2> -->
    <!-- <div style="height: 1000px; width: 100%; background: red">3</div> -->

    <!-- MOCK ITEMS -->
    <h2 class="text-center wrapper-main-content__title">
      JavaScript справочник
    </h2>
    <SectionLinksJs />
    <hr class="wrapper-main-content__line" />
    <h2 class="text-center wrapper-main-content__title">Vue.js справочник</h2>
    <SectionLinksVue />
    <hr class="wrapper-main-content__line" />
    <h2 class="text-center wrapper-main-content__title">Полезные ссылки</h2>
    <OtherLinks />
  </div>
</template>

<script>
import SectionLinksJs from "@/modules/main/components/js-lessons/Section-JS.vue";
import SectionLinksVue from "@/modules/main/components/vue-lessons/Section-VUE.vue";
import OtherLinks from "@/modules/main/components/other/Other.vue";
export default {
  components: {
    SectionLinksJs,
    SectionLinksVue,
    OtherLinks,
  },
};
</script>

<style>
.wrapper-main-content__title {
  margin-top: 25px;
}

.wrapper-main-content__line {
  background: #bbddce;
}
</style>