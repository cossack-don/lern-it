<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - indexOf </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >    Если значение не будет найдено в массиве<span style="color:#d2cd86; ">,</span> вернет <span style="color:#d2cd86; ">-</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">.</span>
    Если найдет элемент<span style="color:#d2cd86; ">,</span> то вернет первый найденный элемент в массиве<span style="color:#d2cd86; ">(</span> его индекс<span style="color:#d2cd86; ">)</span>
    Сравнение всегда идет строгое <span style="color:#008c00; ">9</span> <span style="color:#d2cd86; ">===</span> <span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">9</span><span style="color:#02d045; ">"</span> <span style="color:#d2cd86; ">===</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">9</span><span style="color:#02d045; ">"</span>
    Учитывать регистр<span style="color:#d2cd86; ">,</span>чувствителен <span style="color:#e66170; font-weight:bold; ">indexOf</span>

    <span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">5</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
    console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>arr<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">indexOf</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">7</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> вернет <span style="color:#d2cd86; ">-</span><span style="color:#008c00; ">1</span>
    console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>arr<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">indexOf</span><span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> вернет <span style="color:#008c00; ">0</span><span style="color:#d2cd86; ">(</span>индекс<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">(</span>если введем <span style="color:#008c00; ">9</span><span style="color:#d2cd86; ">,</span> индекс <span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">)</span>

    arr<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">indexOf</span><span style="color:#d2cd86; ">(</span>поиск элемента<span style="color:#d2cd86; ">,</span> с какой позиции искать в массиве<span style="color:#d2cd86; ">)</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>