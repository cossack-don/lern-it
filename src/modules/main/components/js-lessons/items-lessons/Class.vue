<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>
    SET GET - ПОДРОБНЕЕ О КЛАССАХ
    <GC_h2_lessons slot:default>Class ES6</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      ><span style="color:#9999a9; ">//название класса с большой буквы</span>
<span style="color:#e66170; font-weight:bold; ">class</span> Car <span style="color:#b060b0; ">{</span>
   
<span style="color:#9999a9; ">//больше используют конструктор для переменных</span>
   constructor<span style="color:#d2cd86; ">(</span>name<span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
	<span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span>name <span style="color:#d2cd86; ">=</span> name<span style="color:#b060b0; ">;</span>
  <span style="color:#b060b0; ">}</span>


<span style="color:#9999a9; ">//методы</span>

logName<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
   console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Родитель-класс</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span>name<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
<span style="color:#b060b0; ">}</span>


<span style="color:#9999a9; ">//статические методы</span>
<span style="color:#e66170; font-weight:bold; ">static</span> staticFunction<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
   console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">static method class</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
<span style="color:#b060b0; ">}</span>

<span style="color:#b060b0; ">}</span>



<span style="color:#9999a9; ">//создаем новый экземпляр класса</span>
<span style="color:#e66170; font-weight:bold; ">let</span> car <span style="color:#d2cd86; ">=</span> <span style="color:#e66170; font-weight:bold; ">new</span> Car<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">BMV</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

<span style="color:#9999a9; ">//вызываем метод класса</span>
car<span style="color:#d2cd86; ">.</span>logName<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

<span style="color:#9999a9; ">//использование статического метода для класса самого!</span>
Car<span style="color:#d2cd86; ">.</span>staticFunction<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>



<span style="color:#9999a9; ">//наследование класса - extends </span>

<span style="color:#e66170; font-weight:bold; ">class</span> BMV <span style="color:#e66170; font-weight:bold; ">extends</span> Car <span style="color:#b060b0; ">{</span>

<span style="color:#9999a9; ">//чтобы вызвать конструктор главного класса нужно использовать super()</span>
   constructor<span style="color:#d2cd86; ">(</span>name<span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
        <span style="color:#e66170; font-weight:bold; ">super</span><span style="color:#d2cd86; ">(</span>name<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
	console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">BMV constructor</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
  <span style="color:#b060b0; ">}</span>


<span style="color:#9999a9; ">// перезаписываем метод главного класса(родителя)</span>
logName<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
   console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">BMV name is</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span>name<span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

<span style="color:#9999a9; ">//если хотим не перезаписывать метод класса, от которого наследуемся</span>
<span style="color:#9999a9; ">//то пишем в функции logName() { super.logName(); } т.е. тут</span>
<span style="color:#b060b0; ">}</span>


<span style="color:#b060b0; ">}</span>


<span style="color:#e66170; font-weight:bold; ">let</span> bmv <span style="color:#d2cd86; ">=</span> <span style="color:#e66170; font-weight:bold; ">new</span> BMV<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">X6</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>

<span style="color:#9999a9; ">//можем использовать методы главного класса от которого наследуемся</span>
bmv<span style="color:#d2cd86; ">.</span>logName<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>