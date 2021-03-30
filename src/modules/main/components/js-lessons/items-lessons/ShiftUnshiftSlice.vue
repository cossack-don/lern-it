<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >Метод для массивов - shift, unshift, slice
    </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >    <span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">6</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

    <span style="color:#e66170; font-weight:bold; ">let</span> a <span style="color:#d2cd86; ">=</span> arr<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">shift</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> вернет <span style="color:#008c00; ">4</span>
    вернет удаленный элемент <span style="color:#d2cd86; ">,</span> можем положить в переменную


    <span style="color:#e66170; font-weight:bold; ">unshift</span> <span style="color:#d2cd86; ">-</span> добавляет элемент в начало массива и так же перестраивает массив<span style="color:#d2cd86; ">(</span>индексы<span style="color:#d2cd86; ">,</span>длинна<span style="color:#d2cd86; ">)</span>
    <span style="color:#e66170; font-weight:bold; ">let</span> a <span style="color:#d2cd86; ">=</span> arr<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">unshift</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> добавит <span style="color:#008c00; ">2</span> в начало массива


    <span style="color:#d2cd86; ">-</span><span style="color:#e66170; font-weight:bold; ">slice</span> <span style="color:#d2cd86; ">-</span> не меняет исходный массив<span style="color:#d2cd86; ">,</span>
    создает новый массив с указанной позиции<span style="color:#d2cd86; ">(</span>включительно с ней<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">,</span>
    которую указали в параметре и до указанной позиции<span style="color:#d2cd86; ">,</span> не включительно
    <span style="color:#d2cd86; ">-</span><span style="color:#e66170; font-weight:bold; ">slice</span> <span style="color:#d2cd86; ">-</span> так же можно применять и для типа String
    
    варианты использования
    array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">slice</span><span style="color:#d2cd86; ">(</span> с какой позиции <span style="color:#d2cd86; ">(</span>включительно<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">,</span> по какую позицию <span style="color:#d2cd86; ">(</span>не включительно<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">)</span>
    array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">slice</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span>
    array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">slice</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">)</span>

<span style="color:#9999a9; ">&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
    <span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
    <span style="color:#e66170; font-weight:bold; ">let</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">slice</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span>
    массив res равен array с <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">-</span>его элемента<span style="color:#d2cd86; ">,</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>