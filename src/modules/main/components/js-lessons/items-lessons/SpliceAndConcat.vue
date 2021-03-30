<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Метод для массивов - splice и concat </GC_h2_lessons>

    <GC_area_code_lessons slot:default>

<pre style="color:#d1d1d1;background:#000000;"><span style="color:#e66170; font-weight:bold; ">concat</span> <span style="color:#d2cd86; ">-</span> соеденяет массивы в один<span style="color:#d2cd86; ">,</span> возвращает новый массив
исходные массивы не меняются

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> arrayTwo <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> newArray <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">concat</span><span style="color:#d2cd86; ">(</span>arrayTwo<span style="color:#d2cd86; ">,</span> можно еще массив<span style="color:#d2cd86; ">,</span> еще массив<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

newArray <span style="color:#d2cd86; ">-</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span>


<span style="color:#9999a9; ">&lt;!--</span> пример со строкой <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> strOne <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">hello</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> strTwo <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">hi</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> f <span style="color:#d2cd86; ">=</span> strOne<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">concat</span><span style="color:#d2cd86; ">(</span>strTwo<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
f <span style="color:#d2cd86; ">-</span> вернет <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">hellohi</span><span style="color:#02d045; ">'</span>

________________________________________________
splice <span style="color:#d2cd86; ">-</span> изменяет содержимое массива <span style="color:#d2cd86; ">(</span>исходного<span style="color:#d2cd86; ">)</span>
новый не создает<span style="color:#d2cd86; ">!</span>

splice<span style="color:#d2cd86; ">(</span>откуда начинаем<span style="color:#d2cd86; ">,</span> кол<span style="color:#d2cd86; ">-</span>во удаляемых элементов<span style="color:#d2cd86; ">,</span>
вместо удаляемых элементов вставляем наш элемент<span style="color:#d2cd86; ">,</span>элементы<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">33</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">32</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">11</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">22</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

arr<span style="color:#d2cd86; ">.</span>splice<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> удалили <span style="color:#008c00; ">11</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">22</span>
arr <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">33</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">32</span><span style="color:#d2cd86; ">]</span> <span style="color:#d2cd86; ">-</span> массив стал
</pre>

    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>