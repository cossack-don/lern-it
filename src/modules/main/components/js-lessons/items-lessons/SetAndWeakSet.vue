<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Set и WeakSet - ES6 конструкторы</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre style="color: #d1d1d1; background: #000000">Set и WeakSet

Сет может хранить только уникальные значение<span style="color:#d2cd86; ">(</span>как айди<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">,</span> 
нельзя чтобы повторялись значения

<span style="color:#e66170; font-weight:bold; ">let</span> set <span style="color:#d2cd86; ">=</span> <span style="color:#e66170; font-weight:bold; ">new</span> Set<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> <span style="color:#d2cd86; ">-</span> объект

add <span style="color:#d2cd86; ">-</span> добавляет в сет значение
size <span style="color:#d2cd86; ">-</span> размер сета <span style="color:#d2cd86; ">(</span>длинна <span style="color:#d2cd86; ">-</span> <span style="color:#008c00; ">2</span> элемента<span style="color:#d2cd86; ">)</span>


set<span style="color:#d2cd86; ">.</span>add<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">10</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

set<span style="color:#d2cd86; ">.</span>size

можно сразу чейнить сет <span style="color:#e66170; font-weight:bold; ">new</span> Set<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">.</span>add<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">.</span>add<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

set<span style="color:#d2cd86; ">.</span>has<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> лежит ли <span style="color:#008c00; ">3</span> в сете<span style="color:#b060b0; ">?</span>  <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">/</span><span style="color:#0f4d75; ">false</span>
set<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">delete</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> удаляем значение <span style="color:#008c00; ">3</span> из сета
set<span style="color:#d2cd86; ">.</span>clear<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> очищает полностью наш сет


есть конструктор weakset <span style="color:#d2cd86; ">-</span> отличие от set 
то<span style="color:#d2cd86; ">,</span> что в set если указываем для значение <span style="color:#0f4d75; ">null</span><span style="color:#d2cd86; ">,</span>
оно так же дальше хранится в сет<span style="color:#d2cd86; ">,</span> а если используем weakset<span style="color:#d2cd86; ">,</span>
то оно удаляется<span style="color:#d2cd86; ">,</span> не хранится и выдаст <span style="color:#0f4d75; ">undefined</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>