<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >Метод для массивов -Flat, Fill, Keys</GC_h2_lessons
    >

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >flat <span style="color:#d2cd86; ">-</span> применяется к вложенным массивам<span style="color:#d2cd86; ">,</span>
перебирает их и кладет их в один массив
flat<span style="color:#d2cd86; ">(</span>глубина вложенных массивов<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры

при глубокой вложенности массивов<span style="color:#d2cd86; ">,</span> нужно указывать параметр 
при <span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span><span style="color:#d2cd86; ">]</span><span style="color:#d2cd86; ">]</span> <span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span> <span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span>flat<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> <span style="color:#d2cd86; ">-</span> по умолчанию глубина <span style="color:#008c00; ">1</span>

res <span style="color:#d2cd86; ">-</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span>

_______________________________________________________________________________
fill <span style="color:#d2cd86; ">-</span> создает массив<span style="color:#d2cd86; ">,</span> и заполняет указанным значением<span style="color:#d2cd86; ">,</span> по указанным параметрам
fill<span style="color:#d2cd86; ">(</span>чем заполнить массив<span style="color:#d2cd86; ">,</span> где начать <span style="color:#d2cd86; ">(</span>index<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">,</span>
где закончить<span style="color:#d2cd86; ">(</span>до<span style="color:#d2cd86; ">,</span> не включительно<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">(</span>index<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">const</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span>fill<span style="color:#d2cd86; ">(</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">0</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
res <span style="color:#d2cd86; ">-</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">]</span>

_______________________________________________________________________________
<span style="color:#e66170; font-weight:bold; ">keys</span> <span style="color:#d2cd86; ">-</span> извлекает ключи из массива<span style="color:#d2cd86; ">,</span> массива<span style="color:#d2cd86; ">-</span>подобного объекта<span style="color:#d2cd86; ">,</span> объекта
извлекает без глубины<span style="color:#d2cd86; ">,</span> без вложенных массивов в массиве
Object<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">keys</span><span style="color:#d2cd86; ">(</span>кладем объект<span style="color:#d2cd86; ">)</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> obj <span style="color:#d2cd86; ">=</span> <span style="color:#b060b0; ">{</span>
    tes<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">one</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#e66170; font-weight:bold; ">test</span><span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">2</span><span style="color:#02d045; ">'</span>
<span style="color:#b060b0; ">}</span>

Object<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">keys</span><span style="color:#d2cd86; ">(</span>obj<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> вернет <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">tes</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">test</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">]</span> <span style="color:#d2cd86; ">(</span>ключи<span style="color:#d2cd86; ">-</span>строки<span style="color:#d2cd86; ">)</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>