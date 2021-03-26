<template>
  <div class="search-repository-github">
    <!-- <Header /> -->
    <HeaderNavigation />

    <SearchReposGithub />
    <!-- footer -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import SearchReposGithub from "@/modules/header/pages/SearchReposGithub.vue";
import HeaderNavigation from "@/modules/header/components/HeaderNavigation.vue";
// import Footer from "@/modules/footer/pages/Footer.vue";

export default {
  // name layout
  name: "search-repository-github", // you can enter any name (optional)
  components: {
    HeaderNavigation,
    SearchReposGithub,
    // Footer,
  },
  data() {
    return {};
  },
};
</script>


