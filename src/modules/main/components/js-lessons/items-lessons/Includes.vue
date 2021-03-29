<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - Includes </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >includes похож на <span style="color:#e66170; font-weight:bold; ">indexOf</span>
includes возвращает <span style="color:#0f4d75; ">true</span> или <span style="color:#0f4d75; ">false</span>

arr<span style="color:#d2cd86; ">.</span>includes<span style="color:#d2cd86; ">(</span>что ищем<span style="color:#d2cd86; ">,</span> с какого элемента массива искать<span style="color:#d2cd86; ">)</span>
Так же зависит от регистра вроде как возвращает так же первый найденный элемент в массива

<span style="color:#9999a9; ">&lt;!--</span> Пример <span style="color:#008c00; ">1</span> <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">34</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">92</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>arr<span style="color:#d2cd86; ">.</span>includes<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">34</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">,</span> есть в массиве
console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>arr<span style="color:#d2cd86; ">.</span>includes<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">23</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> <span style="color:#0f4d75; ">false</span><span style="color:#d2cd86; ">,</span> нет в массиве

<span style="color:#9999a9; ">&lt;!--</span> Пример <span style="color:#008c00; ">2</span> <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> str <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">idjwdw</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>

console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>str<span style="color:#d2cd86; ">.</span>includes<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">wdw</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> вернет <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">,</span> так как wdw есть в строке<span style="color:#d2cd86; ">.</span>
ищет по всей строке<span style="color:#d2cd86; ">,</span> что укажу<span style="color:#d2cd86; ">.</span>

<span style="color:#9999a9; ">&lt;!--</span> Пример <span style="color:#008c00; ">3</span> <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> users <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span>
    <span style="color:#b060b0; ">{</span>name<span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">vasa</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span> age<span style="color:#b060b0; ">:</span> <span style="color:#008c00; ">22</span><span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#b060b0; ">{</span>name<span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">gasa</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span> age<span style="color:#b060b0; ">:</span> <span style="color:#008c00; ">25</span><span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#b060b0; ">{</span>name<span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">wasa</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span> age<span style="color:#b060b0; ">:</span> <span style="color:#008c00; ">21</span><span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
<span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>


<span style="color:#9999a9; ">&lt;!--</span> Поиск чувствителен к регистру <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#9999a9; ">&lt;!--</span> <span style="color:#e66170; font-weight:bold; ">filter</span> возвращает новый массив newUsers <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>

<span style="color:#9999a9; ">&lt;!--</span> берем массив<span style="color:#d2cd86; ">,</span> указываем по какому key искать <span style="color:#d2cd86; ">(</span>name<span style="color:#d2cd86; ">)</span> он же является строкой<span style="color:#d2cd86; ">,</span>
 ищет includes<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">указанное значение</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span> и возвращает <span style="color:#0f4d75; ">true</span> или <span style="color:#0f4d75; ">false</span> <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>

<span style="color:#e66170; font-weight:bold; ">let</span> newUsers <span style="color:#d2cd86; ">=</span> users<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">filter</span><span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">.</span>name<span style="color:#d2cd86; ">.</span>includes<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">g</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>

console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span>newUsers<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>