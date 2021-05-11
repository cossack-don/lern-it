<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Замыкания js </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
<pre style="color:#d1d1d1;background:#000000;">замыкания

<span style="color:#e66170; font-weight:bold; ">function</span> make<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
<span style="color:#9999a9; ">//</span>
  <span style="color:#e66170; font-weight:bold; ">let</span> count <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">10</span><span style="color:#b060b0; ">;</span>
  console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>count<span style="color:#d2cd86; ">++</span><span style="color:#d2cd86; ">)</span>
  <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#e66170; font-weight:bold; ">function</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
<span style="color:#9999a9; ">//</span>
    <span style="color:#e66170; font-weight:bold; ">let</span> count <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">3</span><span style="color:#b060b0; ">;</span>
    console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>count<span style="color:#d2cd86; ">++</span><span style="color:#d2cd86; ">)</span>
  <span style="color:#b060b0; ">}</span>
<span style="color:#b060b0; ">}</span>

<span style="color:#e66170; font-weight:bold; ">const</span> c <span style="color:#d2cd86; ">=</span> make<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

c<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>

console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span> <span style="color:#d2cd86; ">-</span> выведет вначале<span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">10</span><span style="color:#d2cd86; ">,</span> потом <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">.</span> 
<span style="color:#008c00; ">1</span><span style="color:#ffffff; background:#dd0000; ">)</span> выведет <span style="color:#008c00; ">10</span> и <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> а не <span style="color:#008c00; ">11</span> и <span style="color:#008c00; ">4</span> из<span style="color:#d2cd86; ">-</span>за count<span style="color:#d2cd86; ">++</span><span style="color:#d2cd86; ">,</span> то что увелечение<span style="color:#d2cd86; ">++</span> стоит после названием переменной
а не перед<span style="color:#d2cd86; ">.</span>
<span style="color:#008c00; ">2</span><span style="color:#ffffff; background:#dd0000; ">)</span> count <span style="color:#008c00; ">10</span> лежит в главной области видимости<span style="color:#d2cd86; ">,</span> потом погружаемся в возвращаемый результат и там выдает <span style="color:#008c00; ">3</span>
<span style="color:#008c00; ">3</span><span style="color:#ffffff; background:#dd0000; ">)</span> если убрать count <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> оставить count <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">10</span><span style="color:#d2cd86; ">,</span> то выдаст вначале <span style="color:#008c00; ">10</span><span style="color:#d2cd86; ">,</span> потом будет возвращать результат функцию<span style="color:#d2cd86; ">,</span> 
где вызывает еще раз count<span style="color:#d2cd86; ">,</span> но он берется уже из главной области видимости<span style="color:#d2cd86; ">,</span> и получим <span style="color:#008c00; ">11</span><span style="color:#d2cd86; ">.</span> <span style="color:#d2cd86; ">(</span>ответ <span style="color:#008c00; ">10</span> и <span style="color:#008c00; ">11</span><span style="color:#d2cd86; ">)</span>
</pre>
</GC_area_code_lessons>

ссылка на урок - https://www.youtube.com/watch?v=lXE7N5afUtk&list=PL-wEcSTifrSlpk8Jf-Jz-vXMsBve_q2-Y&index=2&t=1s
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>