<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - Push и Pop </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >push <span style="color:#d2cd86; ">-</span> добавляет элемент в конец массива

можно добавлять элемент по index<span style="color:#d2cd86; ">,</span> arr<span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">0</span><span style="color:#d2cd86; ">]</span>
если элемент существует и мы добавляем<span style="color:#d2cd86; ">,</span> то мы перезапишем элемент

arr<span style="color:#d2cd86; ">[</span>a<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">length</span><span style="color:#d2cd86; ">]</span> добавляет в конец массива
______________________________________________

новый вариант добавления в конец

<span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
arr<span style="color:#d2cd86; ">.</span>push<span style="color:#d2cd86; ">(</span>элемент<span style="color:#d2cd86; ">,</span> элемент<span style="color:#d2cd86; ">,</span> элемент<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> порядок важен<span style="color:#d2cd86; ">,</span> в том же порядке добавится в коне

console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>arr<span style="color:#d2cd86; ">.</span>push<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> вернет длинну массива<span style="color:#d2cd86; ">,</span> а не элемент или массив итоговый

______________________________________________
<span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">function</span> <span style="color:#e66170; font-weight:bold; ">test</span><span style="color:#d2cd86; ">(</span>a<span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#e66170; font-weight:bold; ">return</span> a<span style="color:#d2cd86; ">.</span>push<span style="color:#d2cd86; ">(</span>b<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">--</span> вернет длинну массива
<span style="color:#b060b0; ">}</span>

______________________________________________
pop <span style="color:#d2cd86; ">-</span> удаляет последний элемент массива
метод pop возвращает удаленный элемент arr<span style="color:#d2cd86; ">.</span>pop<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>

<span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>