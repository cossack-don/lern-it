<template>
  <div>
    <div>
      отдельный компонент сделать Время и дата - иконки социальных сетей cм
      будстрап вью
      <!-- http://old.code.mu/books/javascript/dom/rabota-s-datami-v-javascript.html -->
    </div>

    <div class="container-search">
      <!-- Поиск -->

      <b-form-input
        class="input-search"
        placeholder="Поиск по теме"
        v-model="mainSearch"
        @keyup.esc="handlerClearInputBtnEsc"
        @keyup.enter="handlerSearchBtnEnter"
      ></b-form-input>

      <!-- Кнопка поиска -->
      <b-button
        variant="primary"
        class="btn-search"
        @click="serchItem"
        :disabled="flagBtnSearchDisabled"
        >Поиск</b-button
      >
      <!-- кнопка очистить поле -->
      <b-button
        variant="danger"
        class="btn-search"
        @click="cleanSearch"
        :disabled="flagBtnCleanDisabled"
        >Очистить</b-button
      >
    </div>
    <div>
      <!-- Отрисовка данных, что нашло и нет -->
      <AreaGetLessons
        v-if="flagItem"
        :getLessons="wrapperGetNewArrayAllLessons"
      />
      <!-- :getUrlLessons="w" -->
      <AreaNoLessons v-if="flagNoElement" />

      <!-- <div>Нашло по урокам {{ wrapperGetNewArrayAllLessons }}</div> -->
      <!-- <div v-if="flagNoElement">такого элемента нет</div> -->
    </div>
  </div>
</template>

<script>
// вывод найденых уроков
import AreaGetLessons from "@/modules/header/components/AreaGetLessons.vue";
// вывод то что ничего не нашло
import AreaNoLessons from "@/modules/header/components/AreaNoLessons.vue";
export default {
  components: {
    AreaGetLessons,
    AreaNoLessons,
  },
  data() {
    return {
      // главный поиск
      mainSearch: "",

      wrapperGetNewArrayAllLessons: [],
      allLessonsInArray: [],

      // флаги для кнопок
      flagBtnSearchDisabled: true,
      flagBtnCleanDisabled: true,
      // флаги для "нашло урок или нет"
      flagItem: false,
      flagNoElement: false,
    };
  },
  computed: {},
  //
  //
  //
  methods: {
    // очищаю поиск по кнопке ESC
    handlerClearInputBtnEsc() {
      if (this.mainSearch.trim() !== "") {
        this.mainSearch = "";
        this.flagBtnCleanDisabled = true;
      }
    },
    // поиск элемента по кнопке enter
    handlerSearchBtnEnter() {
      this.serchItem();
    },
    // Получаю из стора обьект и создаю из него один массив для поиска по названию урока
    getAllLessonsInArray() {
      // получаем из стора 2 массива и соеденяем в один
      return (this.allLessonsInArray = this.$store.state.wrapperAllLesonsIt.allLesonsIt.objectWithLessonsJs.concat(
        this.$store.state.wrapperAllLesonsIt.allLesonsIt.objectWithLessonsVue
      ));
    },
    // Получаем нужный массив, фильтруем его, делаем нижний регистр, убираем пробелы, ищет по нахождению буквы в слове
    // и записываем что нашло в новый массив или возвращает пустой массив, если ничего не нашло
    serchItem() {
      // получаем массив с уроками и всеми данными, и возвращаем новый массив с title урока + сортируем по алфавиту
      const getNewArrayAllLessons = this.getAllLessonsInArray()
        .map((element) => {
          return element.title.toLowerCase();
        })
        .sort();
      // фильтруем полученный массив из уроков и кладем данные в глобал переменную, для использования в других методах
      this.wrapperGetNewArrayAllLessons = getNewArrayAllLessons.filter((name) =>
        name.toLowerCase().includes(this.mainSearch.trim().toLowerCase())
      );

      // если пустая строка, то очищаем главный массив
      if (this.mainSearch.trim() === "") {
        this.wrapperGetNewArrayAllLessons = [];
        return false;
      }

      // если в массиве 0 элементов, убираем оповещение "нашло урок" и добавляем "не нашло урок"
      // делаем кнопку очистить активной
      if (this.wrapperGetNewArrayAllLessons.length === 0) {
        this.flagItem = false;
        this.flagNoElement = true;
        this.flagBtnCleanDisabled = false;
      } else {
        // Иначе если в массиве нашлось что-то, делаем оповещение и выводим уроки, скрываем оповещение что ничего не нашло
        this.flagNoElement = false;
        this.flagItem = true;
      }

      // ресет поля инпута
      this.mainSearch = "";
    },
    //
    //
    //
    // Кнопка очистить
    cleanSearch() {
      this.flagBtnCleanDisabled = true;
      this.mainSearch = "";
      this.wrapperGetNewArrayAllLessons = [];
      this.flagNoElement = false;
      this.flagItem = false;
    },
    //
    //
    //
  },
  watch: {
    // наблюдаем за инпутом, что ввели
    mainSearch(e) {
      if (e.trim() === "") {
        this.flagBtnSearchDisabled = true;
      } else {
        this.flagBtnSearchDisabled = false;
        this.flagBtnCleanDisabled = false;
      }
      // если массив уроков больше чем 0 , то убираем дизейбл с кнопки очистить
      if (this.wrapperGetNewArrayAllLessons.length > 0) {
        this.flagBtnCleanDisabled = false;
      }
    },
  },
};
</script>

<style >
.container-search {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  background: #4b6577;
  /* margin-top: 15px; */
  padding: 35px;
  border-radius: 5px;
}
.input-search {
  height: 44px !important;
  max-width: 60%;
}
.btn-search {
  margin-left: 15px;
  min-width: 140px;
  height: 44px;
}
@media screen and (max-width: 1250px) {
  .container-search {
    margin-right: 20px;
    margin-left: 20px;
  }
}

@media screen and (max-width: 650px) {
  .container-search {
    flex-direction: column;
    align-items: center;
  }

  .btn-search {
    margin-top: 15px;
    min-width: 200px;
    margin-left: 0;
  }
  .input-search {
    min-width: 250px;
  }
}
</style>