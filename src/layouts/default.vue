<template>
  <div class="layout-default">
    <!-- header static -->
    <HeaderNavigation />
    <Header />

    <!-- main content dinamic -->
    <router-view  />

    <!-- footer static -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import HeaderNavigation from "@/modules/header/components/HeaderNavigation.vue";

import Header from "@/modules/header/pages/Header.vue";
// import Footer from "@/modules/footer/pages/Footer.vue";

export default {
  name: "defaultLayout", // you can enter any name (optional)
  components: {
    HeaderNavigation,
    Header,
    // Footer,
  },
};
</script>

<style>
/* .layout-default { */
/* высота 76 пк хедера */
/* height: calc(100vh - 76px); */
/* } */
/* your style */
.c svg {
  fill: #bbddce;
  width: 70px;
  height: auto;
}
.c svg:hover {
  transition: 0.5s;
  fill: red;
}
</style>