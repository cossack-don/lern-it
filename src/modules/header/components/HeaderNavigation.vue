<template>
  <!-- HEADER NAVIGATION COMPONENT -->
  <header class="header-navigation sticky-top">
    <b-navbar toggleable="lg" type="dark">
      <!-- <b-navbar-brand href="#">Logo - home url</b-navbar-brand> -->
      <router-link to="/"
        ><img class="main-logo" src="@/assets/img/main-logo.png" alt=""
      /></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        class="header-navigation__items header-navigation-burger"
      >
        <b-navbar-nav>
          <!-- пример ссылки -->
          <router-link
            target="_self"
            class="nav-link header-navigation__link"
            to="/search-repository-github"
            >Поиск репозитория на GitHub</router-link
          >
          <b-nav-item href="#" class="header-navigation__link"
            >Link2</b-nav-item
          >
          <b-nav-item href="#" class="header-navigation__link"
            >Link 3</b-nav-item
          >
          <!-- <b-nav-item href="#" disabled class="header-navigation__link"
            >Disabled</b-nav-item
          > -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto header-navigation-right">
          <b-nav-item href="#" class="header-navigation__link"
            >Regist</b-nav-item
          >
          <b-nav-item href="#" class="header-navigation__link"
            >Sing in</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      listItems: [],
    };
  },
};
</script>

<style>
.main-logo {
  width: 60px;
  height: auto;
  border-radius: 50%;
}
.main-logo:hover {
  border-radius: 50%;
  transition: 0.5s;
  box-shadow: 3px 4px 15px 8px rgba(34, 60, 80, 0.69);
}
.header-navigation {
  background: #6ae0ab;
  background: linear-gradient(to bottom right, #6ae0ab, #0b224e);
}

.navbar-nav {
  justify-content: center;
  flex-direction: row !important;
}

.header-navigation__link {
  margin-right: 15px;
}
.header-navigation-burger {
  /* background-image: url(bg.png); */
  /* background: url(); */
  /* height: 200px;
  width: 200px; */
}
/* .navbar-nav {
  padding-left: 0 !important;
} */
/* .header-navigation__link {
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
} */
.navbar-dark .navbar-toggler:hover {
  transition: 0.5s;
  box-shadow: 3px 4px 15px 8px rgba(76, 138, 185, 0.69);
}
@media screen and (max-width: 992px) {
  .header-navigation-right {
    margin-top: 20px;
  }
  /* .header-navigation-burger {
    display: flex;
    flex-direction: column;
  } */
}
</style>