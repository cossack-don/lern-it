<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Объект Date </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      ><span style="color:#e66170; font-weight:bold; ">let</span> date <span style="color:#d2cd86; ">=</span> <span style="color:#e66170; font-weight:bold; ">new</span> Date<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> текущее время и дата
Number<span style="color:#d2cd86; ">(</span>date<span style="color:#d2cd86; ">)</span> вернет тайм стемп с <span style="color:#008c00; ">1970</span> до сегодня в милисекундах
</pre>
    </GC_area_code_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >Тайм стемп <span style="color:#d2cd86; ">-</span> милисекунды с <span style="color:#008c00; ">1970</span> года считается

примеры
<span style="color:#e66170; font-weight:bold; ">getHours</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>
<span style="color:#e66170; font-weight:bold; ">getMinutes</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>
getSecond<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>

Data<span style="color:#d2cd86; ">.</span>now<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">-</span> получение сразу тайм стемпа

дата из строки <span style="color:#d2cd86; ">-</span> <span style="color:#e66170; font-weight:bold; ">const</span> ts <span style="color:#d2cd86; ">=</span> Date<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">parse</span><span style="color:#d2cd86; ">(</span>string<span style="color:#d2cd86; ">)</span> ts<span style="color:#d2cd86; ">-</span> time stemp

<span style="color:#e66170; font-weight:bold; ">new</span> Date<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">2019-04-25</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span>
</pre>
    </GC_area_code_lessons>

    <GC_link_doca href="https://learn.javascript.ru/datetime"
      >Ссылка на доку</GC_link_doca
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>