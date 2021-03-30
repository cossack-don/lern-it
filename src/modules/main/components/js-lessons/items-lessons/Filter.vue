<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - Filter </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      ><span style="color:#e66170; font-weight:bold; ">filter</span> <span style="color:#d2cd86; ">-</span> возвращает новый массив<span style="color:#d2cd86; ">,</span> где лежат все отфильтрованные данные
старый массив не изменяет<span style="color:#d2cd86; ">!</span>

<span style="color:#e66170; font-weight:bold; ">filter</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">,</span> index<span style="color:#d2cd86; ">,</span> array<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры


<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">5</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">6</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">7</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> newArray <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">filter</span><span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>

    <span style="color:#e66170; font-weight:bold; ">if</span><span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">===</span> <span style="color:#0f4d75; ">true</span> <span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> вернет значение и положит в массив новый<span style="color:#d2cd86; ">,</span>
    <span style="color:#e66170; font-weight:bold; ">if</span><span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">===</span> <span style="color:#0f4d75; ">false</span> <span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> пропустит значение и не положит в массив новый
    сноска<span style="color:#d2cd86; ">*</span> <span style="color:#008c00; ">0</span> <span style="color:#d2cd86; ">-</span> это <span style="color:#0f4d75; ">false</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>