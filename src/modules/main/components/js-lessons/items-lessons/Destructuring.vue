<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Деструктуризация</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre style="color: #d1d1d1; background: #000000">деструктуризация 

const obj = <span style="color:#b060b0; ">{</span>
 name<span style="color:#d2cd86; ">:</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">WFM</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
 age:<span style="color:#00a800; ">23</span>
<span style="color:#b060b0; ">}</span>

let name = obj<span style="color:#d2cd86; ">.</span>name
let age = obj<span style="color:#d2cd86; ">.</span>age

// будет что и выше

//вариант 1
let <span style="color:#b060b0; ">{</span>name<span style="color:#b060b0; ">}</span> = obj
let <span style="color:#b060b0; ">{</span>age<span style="color:#b060b0; ">}</span> = obj

//вариант 2
let <span style="color:#b060b0; ">{</span>name, age<span style="color:#b060b0; ">}</span> = obj

//пример 3
//<span style="color:#b060b0; ">{</span>name<span style="color:#d2cd86; ">:</span>n<span style="color:#d2cd86; ">,</span> age:a<span style="color:#b060b0; ">}</span> - присваиваем переменной n = name (name<span style="color:#b060b0; ">:</span>n)
//так же и <span style="color:#e66170; font-weight:bold; ">a</span>
let <span style="color:#b060b0; ">{</span>name<span style="color:#d2cd86; ">:</span>n<span style="color:#d2cd86; ">,</span> age:a<span style="color:#b060b0; ">}</span> = obj

//массивы (все по порядку индекса делается)
//старый способ
const <span style="color:#e66170; font-weight:bold; ">array</span> = <span style="color:#d2cd86; ">[</span>3,3,1,2<span style="color:#d2cd86; ">]</span>

let name = <span style="color:#e66170; font-weight:bold; ">array</span><span style="color:#d2cd86; ">[</span>0<span style="color:#d2cd86; ">]</span>
let name2 = <span style="color:#e66170; font-weight:bold; ">array</span><span style="color:#d2cd86; ">[</span>1<span style="color:#d2cd86; ">]</span>

// новый способ создания переменных
let <span style="color:#d2cd86; ">[</span>name,age,color<span style="color:#d2cd86; ">]</span> = <span style="color:#e66170; font-weight:bold; ">array</span>
// если нужны не все значения
let <span style="color:#d2cd86; ">[</span>name, ,color<span style="color:#d2cd86; ">]</span> = <span style="color:#e66170; font-weight:bold; ">array</span> - выведет 0 и 2 элемент в переменные

//значение по умолчанию 'red'
const arr = <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">wef</span><span style="color:#02d045; ">'</span>, второго элемента нету<span style="color:#d2cd86; ">]</span>
const arr = <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">wef</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span>
let <span style="color:#d2cd86; ">[</span>,color <span style="color:#d2cd86; ">=</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">red</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span> = arr
console<span style="color:#d2cd86; ">.</span>log(color) =<span style="color:#d2cd86; ">&gt;</span> red
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>