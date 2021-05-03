<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >В первую очередь изучать и конспектировать JS - ТЕМЫ</GC_h2_lessons
    >
    https://tproger.ru/translations/javascript-cheatsheet/ <br /><br />
    https://temofeev.ru/info/articles/100-teoreticheskikh-voprosov-po-javascript/
    <ul class="block-lessons-will">
      <li v-for="item in themLessons" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themLessons: [
        "this - контекст, bind,call,apply",
        "class set,get - ООП",
        "генераторы",
        "spread - reast",
        "Promise, async await",
        "try catch",
        "Паттерны",
        "Компонентый подход",
        "Замыкания",
        "Event loop",
        "Всплытие - делегирование",
        "Геттеры и Сеттеры",
        "Рекурсия",
        "Каллбек",
        "Микрозадачи",
        "for in",
        "Алгоритмы",
        "стрелочные функции",
        "fetch",
        "импорты и експорты",
        "интерполяция",
      ],
    };
  },
};
</script>

<style>
.block-lessons-will {
  border: solid gray 1px;
  padding: 10px;
  margin: 0 auto;
  width: 300px;
}
</style>