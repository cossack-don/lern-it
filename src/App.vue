<template>
  <div id="app">
    <HeaderNavigation />
    <Header />
    <!-- header static -->
    <!-- {{ $store.state.allLesonsIt.allLesonsIt }} -->
    <!-- main content dinamic -->
    <router-view />
    <!-- <img src="@/assets/bg.png" alt="" /> -->
    <!-- footer static -->
    <Footer />
  </div>
</template>

<script>
import HeaderNavigation from "@/modules/header/components/HeaderNavigation.vue";

import Header from "@/modules/header/pages/Header.vue";
import Footer from "@/modules/footer/pages/Footer.vue";

export default {
  components: {
    HeaderNavigation,
    Header,
    Footer,
  },
};
</script>

