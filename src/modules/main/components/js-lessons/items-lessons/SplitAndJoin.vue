<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >Метод для массивов - Split и Join
    </GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      ><span style="color:#e66170; font-weight:bold; ">split</span> <span style="color:#d2cd86; ">-</span> разбивает строку и возвращает массив с ее значениями
если не указывать разделитель<span style="color:#d2cd86; ">,</span> вернет массив<span style="color:#d2cd86; ">,</span> со значением строки

<span style="color:#e66170; font-weight:bold; ">split</span><span style="color:#d2cd86; ">(</span>тут указывать разделитель<span style="color:#d2cd86; ">,</span> кол<span style="color:#d2cd86; ">-</span>во возвращаемых элементов с начало строки<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры
в параметр <span style="color:#d2cd86; ">(</span>разделитель<span style="color:#d2cd86; ">)</span> можно класть регулярное вырожение

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> str <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">hello</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> str<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">split</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">h</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">e</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">l</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">l</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">o</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">]</span> <span style="color:#d2cd86; ">(</span>без пробела<span style="color:#d2cd86; ">)</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> str <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">hello igi w</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> str<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">split</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; "> </span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> ставим один пробел
res вернет <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">hello</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">igi</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">]</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> str <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">hello,igi,w</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> str<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">split</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">,</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> 
res вернет <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">hello</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">igi</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">]</span>


<span style="color:#e66170; font-weight:bold; ">join</span> <span style="color:#d2cd86; ">-</span> позволяет объеденить массив в сроку
если разделитель в параметре не указан<span style="color:#d2cd86; ">,</span> идет разделение через запятую
<span style="color:#e66170; font-weight:bold; ">join</span><span style="color:#d2cd86; ">(</span>разделитель<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры
исходный массив не изменяется

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">h</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">r</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">1</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">join</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> 
res вернет строку <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">h,r,w,1</span><span style="color:#02d045; ">"</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">h</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">r</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">1</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">join</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span> 
res вернет строку <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">hrw1</span><span style="color:#02d045; ">"</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">h</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">r</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">1</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">join</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">-</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span> 
res вернет строку <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">h-r-w-1</span><span style="color:#02d045; ">"</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>