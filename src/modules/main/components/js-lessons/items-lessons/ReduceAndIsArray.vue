<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - Reduce и isArray </GC_h2_lessons>

    <GC_area_code_lessons slot:default>

<pre style="color:#d1d1d1;background:#000000;"><span style="color:#e66170; font-weight:bold; ">reduce</span> <span style="color:#d2cd86; ">-</span> возвращает результат обработки массива<span style="color:#d2cd86; ">,</span> строки

<span style="color:#e66170; font-weight:bold; ">reduce</span><span style="color:#d2cd86; ">(</span>накопитель<span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">,</span> index<span style="color:#d2cd86; ">,</span> array<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры
может и перебрать и вернуть значение и обработать <span style="color:#d2cd86; ">(</span>роль фильтра и переборщика в одном<span style="color:#d2cd86; ">)</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> result <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">reduce</span><span style="color:#d2cd86; ">(</span> <span style="color:#d2cd86; ">(</span>accum<span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
   accum <span style="color:#d2cd86; ">=</span> accum <span style="color:#d2cd86; ">+</span> <span style="color:#e66170; font-weight:bold; ">item</span>  <span style="color:#d2cd86; ">(</span>cумма чисел из массива<span style="color:#d2cd86; ">)</span>
   <span style="color:#e66170; font-weight:bold; ">return</span> accum
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>

result <span style="color:#d2cd86; ">-</span> выведет <span style="color:#008c00; ">8</span> 

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#008c00; ">2</span> <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">let</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span>
    <span style="color:#b060b0; ">{</span>id<span style="color:#b060b0; ">:</span><span style="color:#008c00; ">21</span><span style="color:#d2cd86; ">,</span> city<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">moskow</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#b060b0; ">{</span>id<span style="color:#b060b0; ">:</span><span style="color:#008c00; ">123</span><span style="color:#d2cd86; ">,</span> city<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">kiev</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#b060b0; ">{</span>id<span style="color:#b060b0; ">:</span><span style="color:#008c00; ">23</span><span style="color:#d2cd86; ">,</span> city<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">doneck</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
<span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> b <span style="color:#d2cd86; ">=</span> arr<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">reduce</span><span style="color:#d2cd86; ">(</span> <span style="color:#d2cd86; ">(</span>accum<span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>

    accum<span style="color:#d2cd86; ">.</span>push<span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">.</span>id<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
    <span style="color:#e66170; font-weight:bold; ">return</span> accum<span style="color:#b060b0; ">;</span>

<span style="color:#9999a9; ">// создали пустой массив []</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">[</span><span style="color:#d2cd86; ">]</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>b<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">21</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">123</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">23</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>


<span style="color:#e66170; font-weight:bold; ">Array.isArray(obj)</span> <span style="color:#d2cd86; ">-</span> определяет<span style="color:#d2cd86; ">,</span> массив это или нет<span style="color:#d2cd86; ">,</span> возвращает <span style="color:#0f4d75; ">true</span> или <span style="color:#0f4d75; ">false</span>
</pre>

    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>