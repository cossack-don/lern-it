<template>
  <div class="wrapper-job-page">

    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>
      
      <div class="wrapper-job-page__links">
                <a v-for="(item, index) in renderLinksJob" :key="index"
         :href="item.url" target="_blank" class="wrapper-job-page__link">{{item.name}}</a>
      </div>

     
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

<style lang="scss">
.wrapper-job-page {
// display: flex;

margin: 0 auto;

&__links {
  display: flex;
  flex-wrap: wrap;
justify-content: center;
}
  &__link {
    width: 150px;
    background: #6ae0ab;
    background: linear-gradient(to bottom right, #6ae0ab, #0b224e);
    height: 150px;
    display: block;
    margin: 10px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    text-align: center;
    padding: 5px;
  }

  &__link:hover {
      box-shadow:
    1px 1px #bbddce,
    2px 2px #bbddce,
    3px 3px #bbddce,
    4px 4px #bbddce,
    5px 5px #bbddce,
    6px 6px #bbddce,
    7px 7px #bbddce;
  -webkit-transform: translateX(-7px);
  transform: translateX(-7px);
  transition: 0.5s;
  font-size: 20px;
  color: #fd7e14;
  text-decoration: none;
  }
}
</style>