<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - Map </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >    <span style="color:#e66170; font-weight:bold; ">map</span> <span style="color:#d2cd86; ">-</span> принимает функцию калл<span style="color:#d2cd86; ">-</span>бек<span style="color:#d2cd86; ">,</span> которая по очереди обрабатывает каждый элемент массива
    
    <span style="color:#e66170; font-weight:bold; ">map</span> возвращает массив той же длинны<span style="color:#d2cd86; ">,</span> что и обрабатывал<span style="color:#d2cd86; ">!</span>
    <span style="color:#e66170; font-weight:bold; ">map</span> <span style="color:#d2cd86; ">-</span> создает новый массив<span style="color:#d2cd86; ">,</span> куда кладутся новые данные<span style="color:#d2cd86; ">!</span>
    <span style="color:#e66170; font-weight:bold; ">map</span> <span style="color:#d2cd86; ">-</span> возвращает значение<span style="color:#d2cd86; ">(</span>новый массив<span style="color:#d2cd86; ">)</span>
    <span style="color:#e66170; font-weight:bold; ">map</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">,</span> array<span style="color:#d2cd86; ">,</span> array<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры

<span style="color:#9999a9; ">&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
    <span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">-</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

    <span style="color:#e66170; font-weight:bold; ">const</span> newArray <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">map</span><span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
        <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#008c00; ">10</span> <span style="color:#d2cd86; ">+</span> <span style="color:#e66170; font-weight:bold; ">item</span>
    <span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>
    
    вернет новый массив<span style="color:#d2cd86; ">,</span> newArray <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">13</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">14</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">19</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">19</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">7</span><span style="color:#d2cd86; ">]</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>