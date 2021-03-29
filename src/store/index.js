






// смотреть структуру модулей, как в бим
// в модуле - например header => store папка, в ней создать папку модули и папки каждого модуля, и в этой папке создать файлы индекс, геттер, сеттер, стейт,мутация





import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Обьекты с уроками по VUE, JS
// import wrapperObjectWithLessonsJs from "@/modules/main/components/js-lessons/store/index.js";
// import wrapperObjectWithLessonsVue from "@/modules/main/components/vue-lessons/store/index.js";

import wrapperAllLesonsIt from "./staticAllLessons.js";
// *
// import blockOther from "./blockOther.js";
// 
export default new Vuex.Store({
  state: {
    wrapperAllLesonsIt,
    // blockOther,
    // массив со всеми темами уроков Общий
    globalArrayWithAllLessons:[]
  },


  mutations: {
    mutationsArrayWithAllLessons(state) {
      
      // state.globalArrayWithAllLessons = [1,2,3]

    },
  },

  actions: {
    actionsArrayWithAllLessons({ commit }) {
      // const items = wrapperAllLesonsIt
      const items = [1,2,3,4,4,4,4];
      // console.log(items)
      commit('mutationsArrayWithAllLessons');
    },
  },


  getters: {
    gettersReturnArrayWithAllLessons(state) {
      return state.globalArrayWithAllLessons = [1,2,3,4]
    },
  },
  modules: {
    
  }
})
