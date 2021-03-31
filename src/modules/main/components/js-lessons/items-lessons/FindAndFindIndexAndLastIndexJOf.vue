<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >Методы для массивов - Find, FindIndex, LastIndexOf</GC_h2_lessons
    >

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >используют для поиска конкретного элемента или первого попадающий элемента поподающие под условие <span style="color:#d2cd86; ">(</span>наше<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">.</span> 

find запускает для каждого элемента функцию<span style="color:#d2cd86; ">,</span> если фукнция вернет <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">,</span>
find будет остановлен и будет возвращено значение<span style="color:#d2cd86; ">,</span> на котором сработало <span style="color:#0f4d75; ">true</span>
если ничего не нашло<span style="color:#d2cd86; ">(</span>с <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">,</span> вернет <span style="color:#0f4d75; ">undefined</span>
find<span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span><span style="color:#d2cd86; ">,</span> index<span style="color:#d2cd86; ">,</span> array<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> параметры

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">let</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span>find<span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#e66170; font-weight:bold; ">if</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">===</span> <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
        <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#0f4d75; ">true</span><span style="color:#b060b0; ">;</span>
    <span style="color:#b060b0; ">}</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>

res <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">4</span> <span style="color:#d2cd86; ">-</span> возвращает <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span> так как число есть в массиве
если сравнение будет <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">===</span> <span style="color:#008c00; ">10</span> <span style="color:#d2cd86; ">-</span> результат вернет <span style="color:#0f4d75; ">undefined</span><span style="color:#d2cd86; ">!</span>

findIndex применяет метод к каждому элементу массива по очереди<span style="color:#d2cd86; ">,</span>
если функция возвращает <span style="color:#0f4d75; ">true</span><span style="color:#d2cd86; ">,</span> то вернет не его значение<span style="color:#d2cd86; ">,</span> а index элемента
<span style="color:#d2cd86; ">-</span>не работает со строками

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> array <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">[</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">2</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">3</span><span style="color:#d2cd86; ">,</span><span style="color:#008c00; ">20</span><span style="color:#d2cd86; ">]</span><span style="color:#b060b0; ">;</span>

<span style="color:#e66170; font-weight:bold; ">let</span> res <span style="color:#d2cd86; ">=</span> array<span style="color:#d2cd86; ">.</span>findIndex<span style="color:#d2cd86; ">(</span> <span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#e66170; font-weight:bold; ">if</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">item</span> <span style="color:#d2cd86; ">&gt;</span> <span style="color:#008c00; ">4</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
        <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#0f4d75; ">true</span><span style="color:#b060b0; ">;</span>
    <span style="color:#b060b0; ">}</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>

res <span style="color:#d2cd86; ">-</span> вернет index <span style="color:#008c00; ">4</span>
Если условие не возвращает ничего<span style="color:#d2cd86; ">,</span> вернет <span style="color:#d2cd86; ">-</span><span style="color:#008c00; ">1</span> 

<span style="color:#e66170; font-weight:bold; ">lastIndexOf</span> <span style="color:#d2cd86; ">-</span> ищет индекс последнего элемента в строке
если не находит<span style="color:#d2cd86; ">,</span> возвращает <span style="color:#d2cd86; ">-</span><span style="color:#008c00; ">1</span>

<span style="color:#9999a9; ">&lt;!--</span> пример <span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">&gt;</span>
<span style="color:#e66170; font-weight:bold; ">const</span> str <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">owoa</span><span style="color:#02d045; ">'</span><span style="color:#b060b0; ">;</span>
str<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">lastIndexOf</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">o</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span> вернет index <span style="color:#008c00; ">3</span> т<span style="color:#d2cd86; ">.</span>к<span style="color:#d2cd86; ">.</span>
ищет последний совпадающий элемент в строке и выведет <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">о</span><span style="color:#02d045; ">"</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>