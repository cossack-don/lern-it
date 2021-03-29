      
      <template>
  <!-- ЕСЛИ БУДЕТ РАСШИРЯТЬСЯ JS ИЛИ РАЗДЕЛЯТЬ ПО КАТЕГОРИЯМ -->
  <!-- ТО ТУТ СОЗДАТЬ КОМПОНЕНТЫ ПО ТЕМАМ И ПОДКЛЮЧАТЬ ИХ -->
  <ul class="wrapper-links-lessons-vue">
    <li
      class="wrapper-links-lessons-vue__item"
      v-for="item in d"
      :key="item.id"
    >
      <router-link class="wrapper-links-lessons-vue__link" :to="item.url">{{
        item.title
      }}</router-link>
    </li>
  </ul>
</template>





<script>
export default {
  data() {
    return {};
  },
  computed: {
    d() {
      // console.log(
      //   this.$store.state.wrapperAllLesonsIt.allLesonsIt.objectWithLessonsJs
      // );
      return this.$store.state.wrapperAllLesonsIt.allLesonsIt
        .objectWithLessonsVue;
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
.wrapper-links-lessons-vue {
  max-width: 1200px;
  /* ЕСЛИ ЧТО ОТРЕГУЛИРОВАТЬ МАКС ХАЙТ ЧТОБЫ ВМЕЩАЛИСЬ ЛЕКЦИИ В СТОЛБИК */
  max-height: 350px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  /* background: #4b6577; */
  margin: 0 auto;
  padding: 15px;
}

.wrapper-links-lessons-vue__item {
  min-width: 100px;
  /* padding: 10px; */
  /* margin: 10px; */
  /* background: #4b6577;
  border: solid 1px #4b6577; */
  border-radius: 5px;
  margin-right: 10px;
}

/* .wrapper-links-lessons-js__item {
  min-width: 100px; */

/* padding: 10px; */
/* margin: 10px; */
/* background: #4b6577;
  border: solid 1px #4b6577; */

/* border-radius: 5px;
  margin-right: 10px;
} */

.wrapper-links-lessons-vue__link {
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
/* Адаптив */
@media screen and (max-width: 800px) {
  .wrapper-links-lessons-vue {
    max-height: 550px;
  }
}

@media screen and (max-width: 576px) {
  .wrapper-links-lessons-vue {
    max-height: 100%;
    align-items: center;
  }
}
</style>





