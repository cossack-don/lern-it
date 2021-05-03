<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Цикл for of</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      ><span style="color:#9999a9; ">//используют для масива, строк for of</span>

<span style="color:#e66170; font-weight:bold; ">const</span> array  <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>


<span style="color:#e66170; font-weight:bold; ">for</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">let</span> <span style="color:#e66170; font-weight:bold; ">item</span> of array<span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
   console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">item</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>	
<span style="color:#b060b0; ">}</span>

<span style="color:#9999a9; ">//для строк</span>

<span style="color:#e66170; font-weight:bold; ">for</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">let</span> <span style="color:#e66170; font-weight:bold; ">item</span> of <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">nazvanieStroki</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
   console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">item</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>	
<span style="color:#b060b0; ">}</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>