<template>
  <div class="search-repository-github">
    <!-- <Header /> -->

    <div class="wrapper-search-repository-github">
      <transition name="fade">
        <!--   error   -->
        <div v-if="error" class="main-error">{{ error }}</div>
      </transition>
      <transition name="fade">
        <div v-show="errorSearch" class="error-search">{{ errorSearch }}</div>
      </transition>
      <!--   wrapper- для кнопок и поиска   -->
      <div class="wrapper-search-repository-github__content mt-15">
        <div v-if="nickGithub">
          Вы ввели ник
          <span style="color: #ffffff; margin-left: 5px; margin-right: 5px">{{
            nickGithub
          }}</span>
          пользователя гитхаба
        </div>
        <span v-else class="main-title">Поиск по GitHub</span>

        <!--    Кнопки и поиск    -->
        <input
          v-model.trim="valueSearch"
          @keyup.enter="searchRepos"
          placeholder="Введите ник GitHub"
          class="main-input mt-15"
        />
        <button @click="searchRepos" class="mt-15">Поиск</button>
        <button
          @click="cleanSerchAndListRepos"
          class="mt-15 btn-clean-all"
          :disabled="(disabled = !repos)"
        >
          Очистить все
        </button>
      </div>
      <div class="template-url-github">
        <span style="color: #ffffff">Шаблон</span> url для GitHub SPA <br />
        https://cossack-don.github.io/<span style="color: #ffffff">ТУТ-URL</span
        >/#/
      </div>
      <!--  Оповищение сколько репозиториев шт    -->
      <div v-if="repos && repos.length !== 0" class="count-repos">
        У пользователя <span style="color: #2c3e50">{{ nickGithub }}</span> -
        <span class="count-repos-number">{{ repos.length }}</span> репозиториев.
      </div>

      <!--  wrapper по отрисовки item-в репозиториев    -->
      <div v-if="repos" class="wrapper-repos">
        <!--    цикл по отрисовки итемов    -->
        <div v-for="item in repos" :key="item.id" class="main-item-repos">
          <!--    кол-во звезд у данного репозитория  item.stargazers_count      -->
          <!--           <span>{{item.stargazers_count}}</span> -->

          <!--       svg картинка - звезда     -->
          <div class="star">
            <svg
              id="Capa_1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512.002 512.002"
              style="enable-background: new 0 0 512.002 512.002"
              xml:space="preserve"
            >
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="236.9382"
                y1="458.4284"
                x2="236.9382"
                y2="-71.1816"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffcf95" />
                <stop offset="0.427" style="stop-color: #ffc954" />
                <stop offset="1" style="stop-color: #ffc200" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_1_)"
                d="M274.84,23.212l67.722,137.218l151.429,22.004c17.232,2.503,24.112,23.68,11.644,35.835
                L396.058,325.077l25.867,150.817c2.944,17.162-15.07,30.25-30.482,22.147L256,426.835l-135.442,71.206
                c-15.412,8.102-33.426-4.985-30.482-22.147l25.867-150.817L6.367,218.268c-12.469-12.155-5.588-33.33,11.644-35.835l151.429-22.004
                l67.721-137.217C244.868,7.597,267.133,7.597,274.84,23.212z"
              />
              <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="361.338"
                y1="390.1314"
                x2="201.238"
                y2="390.1314"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffc200; stop-opacity: 0" />
                <stop
                  offset="0.203"
                  style="stop-color: #ffbb00; stop-opacity: 0.203"
                />
                <stop
                  offset="0.499"
                  style="stop-color: #ffa700; stop-opacity: 0.499"
                />
                <stop
                  offset="0.852"
                  style="stop-color: #ff8800; stop-opacity: 0.852"
                />
                <stop offset="1" style="stop-color: #ff7800" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_2_)"
                d="M342.56,160.43L274.84,23.212c-3.853-7.807-11.346-11.711-18.839-11.711v259.789
                L342.56,160.43z"
              />
              <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="388.6874"
                y1="144.8383"
                x2="346.2874"
                y2="353.6383"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffc200; stop-opacity: 0" />
                <stop
                  offset="0.203"
                  style="stop-color: #ffbb00; stop-opacity: 0.203"
                />
                <stop
                  offset="0.499"
                  style="stop-color: #ffa700; stop-opacity: 0.499"
                />
                <stop
                  offset="0.852"
                  style="stop-color: #ff8800; stop-opacity: 0.852"
                />
                <stop offset="1" style="stop-color: #ff7800" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_3_)"
                d="M396.058,325.077l109.575-106.81c6.151-5.996,7.586-14.185,5.399-21.247L256,271.289
                L396.058,325.077z"
              />
              <linearGradient
                id="SVGID_4_"
                gradientUnits="userSpaceOnUse"
                x1="183.0977"
                y1="35.1087"
                x2="349.1577"
                y2="201.1687"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffc200; stop-opacity: 0" />
                <stop
                  offset="0.203"
                  style="stop-color: #ffbb00; stop-opacity: 0.203"
                />
                <stop
                  offset="0.499"
                  style="stop-color: #ffa700; stop-opacity: 0.499"
                />
                <stop
                  offset="0.852"
                  style="stop-color: #ff8800; stop-opacity: 0.852"
                />
                <stop offset="1" style="stop-color: #ff7800" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_4_)"
                d="M413.63,496.393L256,271.289v155.546l135.442,71.206
                C399.176,502.107,407.563,500.835,413.63,496.393z"
              />
              <linearGradient
                id="SVGID_5_"
                gradientUnits="userSpaceOnUse"
                x1="64.6777"
                y1="245.108"
                x2="187.0777"
                y2="142.708"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffc200; stop-opacity: 0" />
                <stop
                  offset="0.203"
                  style="stop-color: #ffbb00; stop-opacity: 0.203"
                />
                <stop
                  offset="0.499"
                  style="stop-color: #ffa700; stop-opacity: 0.499"
                />
                <stop
                  offset="0.852"
                  style="stop-color: #ff8800; stop-opacity: 0.852"
                />
                <stop offset="1" style="stop-color: #ff7800" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_5_)"
                d="M256,271.289l-140.058,53.788L90.076,475.894c-1.467,8.55,2.271,16.087,8.294,20.499
                L256,271.289z"
              />
              <linearGradient
                id="SVGID_6_"
                gradientUnits="userSpaceOnUse"
                x1="156.4334"
                y1="414.02"
                x2="106.8334"
                y2="273.22"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffc200; stop-opacity: 0" />
                <stop
                  offset="0.203"
                  style="stop-color: #ffbb00; stop-opacity: 0.203"
                />
                <stop
                  offset="0.499"
                  style="stop-color: #ffa700; stop-opacity: 0.499"
                />
                <stop
                  offset="0.852"
                  style="stop-color: #ff8800; stop-opacity: 0.852"
                />
                <stop offset="1" style="stop-color: #ff7800" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_6_)"
                d="M0.968,197.021L256,271.289l-86.56-110.86L18.011,182.434
                C9.28,183.702,3.214,189.767,0.968,197.021L0.968,197.021z"
              />
              <linearGradient
                id="SVGID_7_"
                gradientUnits="userSpaceOnUse"
                x1="343.1399"
                y1="399.3164"
                x2="-21.2601"
                y2="244.1164"
                gradientTransform="matrix(1.0667 0 0 -1.0667 3.2666 557.5352)"
              >
                <stop offset="0" style="stop-color: #ffc200; stop-opacity: 0" />
                <stop
                  offset="0.203"
                  style="stop-color: #ffbb00; stop-opacity: 0.203"
                />
                <stop
                  offset="0.499"
                  style="stop-color: #ffa700; stop-opacity: 0.499"
                />
                <stop
                  offset="0.852"
                  style="stop-color: #ff8800; stop-opacity: 0.852"
                />
                <stop offset="1" style="stop-color: #ff7800" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_7_)"
                d="M115.943,325.077L6.367,218.268c-6.151-5.996-7.586-14.185-5.399-21.247L256,271.289
                L115.943,325.077z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <!--    ссылка на репозиторий        -->
          <a target="_blank" :href="item.html_url" class="link-repos">{{
            item.name
          }}</a>
          <!--     дата создания репозитория       -->
          <div class="create-repos">
            Создан:
            {{ cleanDataAndReturnNewDataCreateProdject(item.created_at) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // name layout
  name: "search-repository-github", // you can enter any name (optional)
  components: {},
  data() {
    return {
      valueSearch: "",
      errorSearch: "",
      repos: null,
      error: null,
      nickGithub: "",
      disabled: true,
    };
  },

  methods: {
    //     метод для очищения полученной даты, в человеческий вид
    cleanDataAndReturnNewDataCreateProdject(str) {
      //   получаем дату из json
      const mainString = str;
      // обрезаем дату от лишнего мусора
      const cleanDataString = str.substr(0, 10);
      // вырезаем нужные числа и переставляем в 22-11-2020 вместо 2020-03-11
      const newStringData =
        cleanDataString.substr(8, 10) +
        "-" +
        cleanDataString.substr(5, 2) +
        "-" +
        cleanDataString.substr(0, 4);

      return newStringData;
    },
    //     при клике на кнопку очистить все cleanSerchAndListRepos
    cleanSerchAndListRepos() {
      this.disabled = false;

      this.repos = null;
      this.valueSearch = "";
      this.errorSearch = false;
      // if (Object.keys(this.repos).length == 0)
      if (this.repos === null) {
        this.error = false;
      }
    },
    //     поиск репозиториев при клике на кнопку поиск
    searchRepos() {
      //   Не особо рабочий вариант с fetch

      // let response = await fetch(`https://api.github.com/users/${this.valueSearch}/repos`);
      // let user = await response.json();

      //  fetch(`https://api.github.com/users/${this.valueSearch}/repos`)
      //   .then(res => {
      //     return res.json()
      //   })
      //   .then(data => {
      //    // this.error = null
      //    this.repos = data

      //   })
      //   .catch(err => {
      //    console.log(err);
      //    this.repos = null
      //    this.error = "Такого пользователя не найдено!"
      //  })

      //   Активный вариант с axios запросом
      //
      //   Если поиск пустой, выводить ошибку и не искать
      if (this.valueSearch === "") {
        this.errorSearch = "Введите ник GitHub!";
        return;
      } else {
        this.errorSearch = false;
      }

      //   запрос axios
      axios
        .get(`https://api.github.com/users/${this.valueSearch}/repos`)
        .then((res) => {
          this.error = null;
          this.repos = res.data;

          this.nickGithub = this.valueSearch;

          //     Если пользователь найден, но у него нету репозиториев length === 0 , выкидываем ошибку
          if (Object.keys(this.repos).length == 0) {
            this.error = `У пользователя ${this.valueSearch} нет репозиториев!`;
            //     очищаем спустя время warning
            setTimeout(() => {
              this.error = false;
            }, 3500);
          }
          //     reset search
          this.valueSearch = "";
        })
        .catch((err) => {
          if (err) {
            this.nickGithub = this.valueSearch;
            this.valueSearch = "";
          }
          console.log(err);
          this.repos = null;
          this.error = "Такого пользователя не найдено!";
        });
    },
  },

  watch: {
    //     Название watch должно совпадать с названием переменной, которую хотим отслеживать valueSearch
    valueSearch: function (val) {
      this.valueSearch = val;
    },
  },
};
</script>


<style>
.star {
  width: 30px;
  height: 30px;
}

button:hover {
  color: #4fc08d;
  transition: 0.5s;
  background: #ffffff;
}

button {
  background: #4fc08d;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
  cursor: pointer;
  color: #ffffff;
}

.wrapper-search-repository-github__content {
  padding: 35px;
  background: rgba(106, 224, 171, 1);
  background: -webkit-linear-gradient(
    top left,
    rgba(106, 224, 171, 1),
    rgba(11, 34, 78, 1)
  );
  background: -moz-linear-gradient(
    top left,
    rgba(106, 224, 171, 1),
    rgba(11, 34, 78, 1)
  );
  background: linear-gradient(
    to bottom right,
    rgba(106, 224, 171, 1),
    rgba(11, 34, 78, 1)
  );
  margin: 0 auto;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 1em;
}

.main-input {
  border: none;
  color: rgb(203, 32, 39);
  font: inherit;
  padding: 0.75em 2em;
  border-radius: 2em;
}

.main-item-repos {
  background: rgba(150, 232, 195, 1);
  background: -webkit-linear-gradient(
    top left,
    rgba(150, 232, 195, 1),
    rgba(166, 191, 242, 1)
  );
  background: -moz-linear-gradient(
    top left,
    rgba(150, 232, 195, 1),
    rgba(166, 191, 242, 1)
  );
  background: linear-gradient(
    to bottom right,
    rgba(150, 232, 195, 1),
    rgba(166, 191, 242, 1)
  );
  margin: 10px;
  padding: 15px;
  border-radius: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mt-15 {
  margin-top: 15px;
}

.main-title {
  text-align: center;
  color: #ffffff;
  letter-spacing: 4px;
}

.main-error {
  color: #ffffff;
  background: rgb(203, 32, 39);
  padding: 10px;
  max-width: 300px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  text-align: center;
}

.error-search {
  margin: 0 auto;
  margin-top: 15px;
  max-width: 300px;
  padding: 10px;
  color: #ffffff;
  background: rgb(203, 32, 39);
  border-radius: 1em;
  text-align: center;
}

.btn-clean-all:disabled {
  background: rgb(203, 32, 39);
  opacity: 0.6;
  border: solid 1px rgb(203, 32, 39);
}

.btn-clean-all:disabled:hover {
  cursor: default;
  border: solid 1px rgb(203, 32, 39);
  color: #ffffff;
}

.count-repos {
  padding: 20px;
  max-width: 350px;
  border-radius: 1em;
  margin: 0 auto;
  margin-top: 20px;
  color: #ffffff;
  font-weight: bold;
  background: rgba(150, 232, 195, 1);
  background: -webkit-linear-gradient(
    top left,
    rgba(150, 232, 195, 1),
    rgba(166, 191, 242, 1)
  );
  background: -moz-linear-gradient(
    top left,
    rgba(150, 232, 195, 1),
    rgba(166, 191, 242, 1)
  );
  background: linear-gradient(
    to bottom right,
    rgba(150, 232, 195, 1),
    rgba(166, 191, 242, 1)
  );
  border: #4fc08d solid 2px;
}

.count-repos-number {
  background: #ffffff;
  border-radius: 50%;
  color: #7952b3;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  width: 45px;
  height: 45px;
}

.link-repos {
  color: #7952b3;
  font-weight: bold;
}

.link-repos:hover {
  transition: 0.5s;
  color: #ffffff;
}

.create-repos {
  color: #2c3e50;
}
.template-url-github {
  background: #4fc08d;
  padding: 15px;
  margin: 10px auto;
  max-width: 550px;
  border-radius: 15px;
}

/* 
 */
/* Анимация для ошибок */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 500px) {
  .main-item-repos {
    flex-direction: column;
  }
  .link-repos {
    margin: 10px;
  }
}
</style>