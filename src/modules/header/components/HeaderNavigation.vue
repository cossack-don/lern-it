<template>
  <!-- HEADER NAVIGATION COMPONENT -->
  <header class="header-navigation sticky-top">
    <b-navbar toggleable="lg" type="dark">
      <router-link to="/"
        ><img class="main-logo" src="@/assets/img/main-logo.png" alt=""
      /></router-link>

    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        class="header-navigation__items header-navigation-burger"
      >
        <!-- Left navigation -->
        <b-navbar-nav>
          <router-link
            target="_self"
            class="nav-link header-navigation__link"
            :to="{ path: item.url }"
            v-for="item in listItems"
            :key="item.url"
            >{{ item.nameUrl }}</router-link
          >
        </b-navbar-nav>
        <!-- навигация иконки ссылки -->
        <NavigationSocialNetworks class="navbar-nav ml-auto" />
        <NavigationContactsIcons class="navbar-nav" />
        <!-- #навигация иконки ссылки -->

        <!-- Right navigation -->
        <b-navbar-nav class="ml-auto header-navigation-right">
          <router-link
            target="_self"
            class="nav-link header-navigation__link"
            :to="{ path: item.url }"
            v-for="item in listItemsSings"
            :key="item.url"
            >{{ item.nameUrl }}</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import NavigationSocialNetworks from "@/modules/header/components/NavigationSocialNetworks.vue";
import NavigationContactsIcons from "@/modules/header/components/NavigationContactsIcons.vue";
export default {
  components: {
    NavigationSocialNetworks,
    NavigationContactsIcons,
  },
  // Главная Поиск репозитория на GitHub
  data() {
    return {
      listItems: [
        {
          nameUrl: "Главная",
          url: "/",
        },
        {
          nameUrl: "Поиск репозитория на GitHub",
          url: "search-repository-github",
        },
        {
          nameUrl: "Форма обратной связи",
          url: "/feedback-form",
        },
        {
          nameUrl: "Работа",
          url: "/job",
        },
      ],

      listItemsSings: [
        {
          nameUrl: "Regist",
          url: "/registration",
        },
        {
          nameUrl: "Sing in",
          url: "/2",
        },
      ],
    };
  },
};
</script>

<style>
.navbar-toggler-icon{
  background:red;
}
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

  .wrapper-main-list-icons-contacts,
  .wrapper-main-list-icons-social-networks {
    margin: 0 auto;
  }
  /* .header-navigation-burger {
    display: flex;
    flex-direction: column;
  } */
}

@media screen and (max-width: 1230px) {
  .divider-icons-header {
    display: none;
  }
}
</style>