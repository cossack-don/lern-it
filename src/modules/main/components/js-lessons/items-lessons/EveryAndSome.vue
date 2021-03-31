<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >Методы для массивов - Every и Some
    </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      ><span style="color:#e66170; font-weight:bold; ">every</span> <span style="color:#d2cd86; ">-</span> применяется к массиву<span style="color:#d2cd86; ">,</span> обрабатывает каждый элемент массива
и если для всех элементов функция возвратит <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">,</span>
если для одного элемента возвращает <span style="color:#0f4d75; ">false</span><span style="color:#d2cd86; ">,</span> итоговый результат будет <span style="color:#0f4d75; ">false</span>
<span style="color:#e66170; font-weight:bold; ">every</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">,</span> index<span style="color:#d2cd86; ">,</span> array<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры 

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> result <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">every</span><span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#e66170; font-weight:bold; ">if</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">&gt;</span> <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
        <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#0f4d75; ">true</span><span style="color:#b060b0; ">;</span>
    <span style="color:#b060b0; ">}</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>

result <span style="color:#d2cd86; ">-</span> возвращает <span style="color:#0f4d75; ">true</span> т<span style="color:#d2cd86; ">.</span>к<span style="color:#d2cd86; ">.</span> для каждого элемента массива успешно возвратила <span style="color:#0f4d75; ">true</span>
и поэтому итоговый результат <span style="color:#0f4d75; ">true</span>


<span style="color:#e66170; font-weight:bold; ">some</span> <span style="color:#d2cd86; ">-</span> проверяет элементы массива и
если хотя бы один элемент подходит под условие<span style="color:#d2cd86; ">,</span> возвращает <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">,</span> иначе <span style="color:#0f4d75; ">false</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>