<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>СallBack - функции</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >callback <span style="color:#d2cd86; ">-</span> функция которая должна быть выполнина<span style="color:#d2cd86; ">,</span> как другая функция выполнилась<span style="color:#d2cd86; ">(</span>отработала<span style="color:#d2cd86; ">)</span>

        <span style="color:#e66170; font-weight:bold; ">function</span> lern<span style="color:#d2cd86; ">(</span> lang<span style="color:#d2cd86; ">,</span> callback<span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>

        как выполнится консоль лог<span style="color:#d2cd86; ">,</span> после этого сработает только callback
        console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">`</span><span style="color:#00c4c4; ">я учу: </span><span style="color:#02d045; ">${</span><span style="color:#00c4c4; ">lang</span><span style="color:#02d045; ">}</span><span style="color:#02d045; ">`</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

        <span style="color:#9999a9; ">//вызываем калл-бек функцию</span>
        callback<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
        <span style="color:#b060b0; ">}</span>

                        <span style="color:#9999a9; ">// тут начинается аргумент callback (с function</span>
        lern<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">javascript</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">function</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>

        console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Я прошел этот урок!</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
        <span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>


        второй вариант передачи callback

        где done круглые скобки не ставим<span style="color:#d2cd86; ">!</span><span style="color:#d2cd86; ">!</span>
        lern<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">javascript, done);</span>
        <span style="color:#00c4c4; "></span>
        <span style="color:#00c4c4; ">function done () {</span>
        <span style="color:#00c4c4; ">console.log(</span><span style="color:#02d045; ">'</span>сработал каллбек<span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">);</span>
        <span style="color:#00c4c4; ">}</span>
    </pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>