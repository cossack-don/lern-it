<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>Rest и Spread</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
      <pre style="color: #d1d1d1; background: #000000">rest и spread 

//обычный пример
function go( num<span style="color:#d2cd86; ">,</span> str ) <span style="color:#b060b0; ">{</span>
 console.log(num, str)
<span style="color:#b060b0; ">}</span>

go(20<span style="color:#d2cd86; ">,</span>'WTF')


//новый вариант
// если мы хотим передавать не 2 параметра<span style="color:#d2cd86; ">,</span>а 50<span style="color:#d2cd86; ">,</span> 100
// то используем 

..<span style="color:#d2cd86; ">.</span> - rest - разворачивает

function go( ..<span style="color:#d2cd86; ">.</span>args ) <span style="color:#b060b0; ">{</span>
 console.log(args)
<span style="color:#b060b0; ">}</span>

выдаст массив со значениями!!!

go(20<span style="color:#d2cd86; ">,</span>'WTF') - можно указвать сколько угодно переменных 
выдаст <span style="color:#d2cd86; ">[</span>20,<span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">WTF</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">]</span>

________________________________________________________
spread - ..<span style="color:#d2cd86; ">.</span> разворачивает в один массив в отдельную переменную<span style="color:#d2cd86; ">,</span> через запятую

const spreadaArr = <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">ww</span><span style="color:#02d045; ">'</span>,<span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">zz</span><span style="color:#02d045; ">'</span>,<span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">ff</span><span style="color:#02d045; ">'</span>,<span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">zzwd</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span>


function go( ..<span style="color:#d2cd86; ">.</span>args ) <span style="color:#b060b0; ">{</span>
 console.log(args)
<span style="color:#b060b0; ">}</span>

Обе записи идентичны
старый вариант - go("ww"<span style="color:#d2cd86; ">,</span>"zz"<span style="color:#d2cd86; ">,</span>"ff"<span style="color:#d2cd86; ">,</span>"zzwd")
новый вариант - go(..<span style="color:#d2cd86; ">.</span>spreadaArr) вернет <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">ww</span><span style="color:#02d045; ">"</span>,<span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">zz</span><span style="color:#02d045; ">"</span>,<span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">ff</span><span style="color:#02d045; ">"</span>,<span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">zzwd</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">]</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>