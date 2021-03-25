<template>
  <!-- ЕСЛИ БУДЕТ РАСШИРЯТЬСЯ JS ИЛИ РАЗДЕЛЯТЬ ПО КАТЕГОРИЯМ -->
  <!-- ТО ТУТ СОЗДАТЬ КОМПОНЕНТЫ ПО ТЕМАМ И ПОДКЛЮЧАТЬ ИХ -->
  <ul class="wrapper-links-lessons-js">
    <li class="wrapper-links-lessons-js__item" v-for="item in d" :key="item.id">
      <router-link class="wrapper-links-lessons-js__link" :to="item.url">{{
        item.title
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // links: [
      //   {
      //     name: "goga1",
      //     id: 1,
      //   },
      //   {
      //     name: "goga2",
      //     id: 2,
      //   },
      //   {
      //     name: "goga3",
      //     id: 3,
      //   },
      //   {
      //     name: "goga3",
      //     id: 4,
      //   },
      //   {
      //     name: "goga3",
      //     id: 5,
      //   },
      //   {
      //     name: "goga3",
      //     id: 36,
      //   },
      //   {
      //     name: "goga3",
      //     id: 23,
      //   },
      //   {
      //     name: "goga3",
      //     id: 2993,
      //   },
      //   {
      //     name: "goga3",
      //     id: 113,
      //   },
      //   {
      //     name: "goga3",
      //     id: 233,
      //   },
      //   {
      //     name: "goga3",
      //     id: 533,
      //   },
      //   {
      //     name: "goga3",
      //     id: 463,
      //   },
      //   {
      //     name: "goga3",
      //     id: 42131,
      //   },
      //   {
      //     name: "goga3",
      //     id: 42133,
      //   },
      //   {
      //     name: "goga3",
      //     id: 42132,
      //   },
      //   {
      //     name: "goga3",
      //     id: 4213333,
      //   },
      //   {
      //     name: "goga3",
      //     id: 421333133,
      //   },
      //   {
      //     name: "goga3",
      //     id: 422113,
      //   },
      //   {
      //     name: "goga3",
      //     id: 4221111113,
      //   },
      //   {
      //     name: "goga3",
      //     id: 42213313,
      //   },
      //   {
      //     name: "goga3",
      //     id: 42211211113,
      //   },
      // ],
    };
  },
  computed: {
    d() {
      // console.log(
      //   this.$store.state.wrapperAllLesonsIt.allLesonsIt.objectWithLessonsJs
      // );
      return this.$store.state.wrapperAllLesonsIt.allLesonsIt
        .objectWithLessonsJs;
    },
  },
  created() {},
};
</script>

<style>
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.wrapper-links-lessons-js {
  max-width: 1200px;
  /* ЕСЛИ ЧТО ОТРЕГУЛИРОВАТЬ МАКС ХАЙТ ЧТОБЫ ВМЕЩАЛИСЬ ЛЕКЦИИ В СТОЛБИК */
  max-height: 200px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  /* background: #4b6577; */
  margin: 0 auto;
  padding: 15px;
}

.wrapper-links-lessons-js__item {
  min-width: 100px;
  /* padding: 10px; */
  /* margin: 10px; */
  /* background: #4b6577;
  border: solid 1px #4b6577; */
  border-radius: 5px;
}

.wrapper-links-lessons-js__link {
  display: flex;
  /* justify-content: center;
  align-items: center; */
  /* color: red; */
  /* font-weight: bold; */
  font-size: 18px;
}

/* .wrapper-links-lessons-js__item:hover {
  background: #205072;
  border: solid 1px #4b6577;
  transition: 0.5s;
}

.wrapper-links-lessons-js__link:hover {
  transition: 0.5s;
  color: #6ae0ab;
} */
</style>