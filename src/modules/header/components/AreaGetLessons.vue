<template>
  <div class="area-get-lessons">
    <!-- TITLE -->
    <h3 class="text-center area-get-lessons__title">Результат поиска</h3>

    <!-- LIST LINKS Которые нашел в поиске -->
    <ul class="area-get-lessons__wrapper-links">
      <li
        v-for="(lesson, index) in getLessons"
        :key="index"
        class="area-get-lessons__item"
      >
        <!-- Ссылки на уроки -->
        <router-link :to="{ path: getRussinWordAndtranslit(lesson) }">
          {{ changeFirstLetterToUpperCase(lesson) }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
// *
export default {
  // принимаю парамсы из компонента, получаю массив значений, что нашло в поиске
  props: {
    getLessons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},

  methods: {
    // Делаю первую букву слова, заглавной
    changeFirstLetterToUpperCase(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    // метод по переведению русского слова в транслит, использую для URL
    getRussinWordAndtranslit(word) {
      const converter = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "h",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ь: "",
        ы: "y",
        ъ: "",
        э: "e",
        ю: "yu",
        я: "ya",
      };

      word = word.toLowerCase();

      let answer = "";
      for (let i = 0; i < word.length; ++i) {
        if (converter[word[i]] == undefined) {
          answer += word[i];
        } else {
          answer += converter[word[i]];
        }
      }
      // регулярные вырожения
      answer = answer.replace(/[^-0-9a-z]/g, "-");
      answer = answer.replace(/[-]+/g, "-");
      answer = answer.replace(/^\-|-$/g, "");
      return answer;
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}

.area-get-lessons {
  max-width: 1200px;
  margin: 0 auto;
}

.area-get-lessons__title {
  margin-top: 15px;
  margin-bottom: 15px;
}

.area-get-lessons__wrapper-links {
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 5px;
}

.area-get-lessons__item {
  padding: 5px;
}
</style>
   