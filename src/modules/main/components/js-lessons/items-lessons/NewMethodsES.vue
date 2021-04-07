<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Новые фишки ES 16,17,18</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre style="color: #d1d1d1; background: #000000">es7 =  2016

метод includce<span style="color:#d2cd86; ">,</span>

2 *<span style="color:#d2cd86; ">*</span> 2      *<span style="color:#d2cd86; ">*</span> возведение в степень
____________________________________
es8 - 2017

метода строк - padstart<span style="color:#d2cd86; ">,</span> padend

методы обьектов <span style="color:#e66170; font-weight:bold; ">object</span> <span style="color:#d2cd86; ">.</span>value<span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">.</span>entries
метод getOwnPropertyDescriptors()

изменение синтаксиа (1<span style="color:#d2cd86; ">,</span>2<span style="color:#d2cd86; ">,</span> - запятую в конце двойки)

асинхронные функции async - await

____________________________________
es9 - 2018

spread - rest их добавляли в es6 <span style="color:#d2cd86; ">,</span> но тут работают для и для обьектов

асинхронные операторы for await of (for of) - добавили асинхронность (не забыть про async)

добавили метод для промисов - finally (после try catch используют)

регулярные вырожения ?&lt;= и ?&lt;!

&lt;year<span style="color:#d2cd86; ">&gt;</span> &lt;month<span style="color:#d2cd86; ">&gt;</span> &lt;day<span style="color:#d2cd86; ">&gt;</span> <span style="color:#d2cd86; ">,</span> флаг <span style="color:#e66170; font-weight:bold; ">s</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>