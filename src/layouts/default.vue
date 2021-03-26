<template>
  <div>
    <!-- header static -->
    <HeaderNavigation />
    <Header />

    <!-- main content dinamic -->
    <router-view />

    <!-- footer static -->
    <Footer />
  </div>
</template>

<script>
import HeaderNavigation from "@/modules/header/components/HeaderNavigation.vue";

import Header from "@/modules/header/pages/Header.vue";
import Footer from "@/modules/footer/pages/Footer.vue";
export default {
  name: "defaultLayout", // you can enter any name (optional)
  components: {
    HeaderNavigation,
    Header,
    Footer,
  },
};
</script>

<style>
/* your style */
</style>