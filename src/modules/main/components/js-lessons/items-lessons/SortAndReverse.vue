<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default
      >Метод для массивов - Sort и Reverse</GC_h2_lessons
    >

    <GC_area_code_lessons slot:default>
      <pre style="color: #d1d1d1; background: #000000">sort() - сортирует массив
меняет исходный массив!


по умолчанию сортирует по строкам 
если использовать <span style="color:#e66170; font-weight:bold; ">array</span><span style="color:#d2cd86; ">.</span>sort() - отсортирует по алфавиту

с числами будут проблемы<span style="color:#d2cd86; ">,</span> нужно сортировать иначе


const <span style="color:#e66170; font-weight:bold; ">array</span> = <span style="color:#d2cd86; ">[</span>2,4,2,1,11<span style="color:#d2cd86; ">]</span>

пример 1 

  function go(<span style="color:#e66170; font-weight:bold; ">a</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">b</span>) <span style="color:#b060b0; ">{</span>

    if(a &gt; b) return 1<span style="color:#b060b0; ">;</span> // если первое значение больше второго
    if(a == b) return 0<span style="color:#b060b0; ">;</span>  // если равны
    if(a &lt; b) return -1<span style="color:#b060b0; ">;</span> // если первое значение меньще второго

    либо 

    retrun a - b
  <span style="color:#b060b0; ">}</span>

пример 2
<span style="color:#e66170; font-weight:bold; ">array</span><span style="color:#d2cd86; ">.</span>sort( (<span style="color:#e66170; font-weight:bold; ">a</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">b</span>) =<span style="color:#d2cd86; ">&gt;</span> <span style="color:#e66170; font-weight:bold; ">a</span> - <span style="color:#e66170; font-weight:bold; ">b</span> )


пример 3

const <span style="color:#e66170; font-weight:bold; ">array</span> = <span style="color:#d2cd86; ">[</span>2,4,22,1,11<span style="color:#d2cd86; ">]</span>

// отсортирует НЕ от меньшего к большему
// console<span style="color:#d2cd86; ">.</span>log(<span style="color:#e66170; font-weight:bold; ">array</span><span style="color:#d2cd86; ">.</span>sort())

// отсортирует от меньшего к большему

  console<span style="color:#d2cd86; ">.</span>log(<span style="color:#e66170; font-weight:bold; ">array</span><span style="color:#d2cd86; ">.</span>sort((<span style="color:#e66170; font-weight:bold; ">a</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">b</span>) =<span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
      
    if(a &gt; b) return 1<span style="color:#b060b0; ">;</span> 
    if(a == b) return 0<span style="color:#b060b0; ">;</span> 
    if(a &lt; b) return -1<span style="color:#b060b0; ">;</span>

  <span style="color:#b060b0; ">}</span>))

// 
// 
Метод reverse изменяет порядок элементов в массиве на обратный<span style="color:#d2cd86; ">.</span>

Метод изменяет исходный массив
(он станет перевернутым) и возвращает также перевернутый массив
(можно пользоваться и так<span style="color:#d2cd86; ">,</span> и так)<span style="color:#d2cd86; ">.</span>
Обращаю �'аше внимание<span style="color:#d2cd86; ">,</span> что если массив не является непрерывным 
(существуют разрывы между индексами)<span style="color:#d2cd86; ">,</span> то метод reverse() заполняет эти разрывы элементами со значением undefined<span style="color:#d2cd86; ">.</span>

let arr = <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">a</span><span style="color:#02d045; ">'</span>, <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">b</span><span style="color:#02d045; ">'</span>, <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">c</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span>

arr<span style="color:#d2cd86; ">.</span>reverse()

Результат выполнения кода<span style="color:#d2cd86; ">:</span>

<span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">c</span><span style="color:#02d045; ">'</span>, <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">b</span><span style="color:#02d045; ">'</span>, <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">a</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>