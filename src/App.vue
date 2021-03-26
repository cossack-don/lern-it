<template>
  <div id="app">
    <!-- Wrapper for layouts -->
    <vue-extend-layouts />
  </div>
</template>

<script>
//
// ССЫЛКИ НА LAYOUTS ДОКУ, КАК ИХ ДЕЛАТЬ
// https://si-dev.com/ru/blog/vue-multiple-layouts
// https://github.com/ktquez/vue-extend-layout
//
//

// Подключаем пакет установленный (для layouts)
import VueExtendLayouts from "vue-extend-layout";
export default {
  // name название главного layout приложения
  name: "default-layout-app",
  components: {
    VueExtendLayouts,
  },
};
</script>

