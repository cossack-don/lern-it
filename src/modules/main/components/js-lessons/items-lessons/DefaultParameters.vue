<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Параметры по умолчанию ES6</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >параметры по умолчанию ES6

<span style="color:#e66170; font-weight:bold; ">const</span> func <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">(</span>a <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">20</span><span style="color:#d2cd86; ">,</span> b <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">30</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
	<span style="color:#e66170; font-weight:bold; ">return</span> a <span style="color:#d2cd86; ">+</span> b<span style="color:#b060b0; ">;</span>
<span style="color:#b060b0; ">}</span><span style="color:#b060b0; ">;</span>


если запускаем функцию func<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>
выведется <span style="color:#008c00; ">20</span><span style="color:#d2cd86; ">+</span><span style="color:#008c00; ">30</span> <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">50</span> <span style="color:#d2cd86; ">(</span> так как числа стоят по умолчанию<span style="color:#d2cd86; ">)</span>

если запустим функцию func<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">30</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">90</span><span style="color:#d2cd86; ">)</span>
выведется <span style="color:#008c00; ">30</span> <span style="color:#d2cd86; ">+</span> <span style="color:#008c00; ">90</span> <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">120</span> <span style="color:#d2cd86; ">(</span>значение не по умолчанию<span style="color:#d2cd86; ">)</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>