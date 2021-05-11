<template>
  <div>
    <nav style="margin: 20px">
      <!-- Cсылки -->
      <router-link to="/">Главная</router-link>
      <!-- #Cсылки -->
    </nav>

    <GC_h2_lessons slot:default>This, bind, call, apply</GC_h2_lessons>

    <GC_area_code_lessons slot:default>
<pre style="color:#d1d1d1;background:#000000;">контекст <span style="color:#d2cd86; ">-</span> <span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">методы: apply</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">call</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">bind</span>


<span style="color:#e66170; font-weight:bold; ">this</span> <span style="color:#d2cd86; ">-</span> это ссылка на объект который мы вызываем

<span style="color:#e66170; font-weight:bold; ">const</span> user <span style="color:#d2cd86; ">=</span> <span style="color:#b060b0; ">{</span>

	name<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Danil</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span>
	sayHello<span style="color:#d2cd86; ">(</span>param1<span style="color:#d2cd86; ">,</span>param2<span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
	console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">`</span><span style="color:#00c4c4; ">Hello, ya - </span><span style="color:#02d045; ">${</span><span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span><span style="color:#00c4c4; ">name</span><span style="color:#02d045; ">}</span><span style="color:#00c4c4; ">, this</span><span style="color:#02d045; ">`</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
	<span style="color:#b060b0; ">}</span>

<span style="color:#b060b0; ">}</span>
<span style="color:#9999a9; ">//this равно user</span>
user<span style="color:#d2cd86; ">.</span>sayHello<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> выведется Hello<span style="color:#d2cd86; ">,</span> ya Danil<span style="color:#d2cd86; ">,</span> <span style="color:#b060b0; ">{</span>name<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Danil</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span>sayHello<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">}</span>

<span style="color:#9999a9; ">//потеря контекста , считайте что мы создаем новую функцию и поэтому теряется контекст</span>
<span style="color:#e66170; font-weight:bold; ">const</span> f <span style="color:#d2cd86; ">=</span> user<span style="color:#d2cd86; ">.</span>sayHello

f<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> выведется Hello<span style="color:#d2cd86; ">,</span>ya <span style="color:#d2cd86; ">.</span><span style="color:#d2cd86; ">.</span><span style="color:#d2cd86; ">.</span><span style="color:#d2cd86; ">.</span> <span style="color:#d2cd86; ">,</span> объект Window


<span style="color:#9999a9; ">//пример</span>

<span style="color:#e66170; font-weight:bold; ">setTimeout</span><span style="color:#d2cd86; ">(</span>user<span style="color:#d2cd86; ">.</span>sayHello<span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">100</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> выведется объект Window<span style="color:#d2cd86; ">,</span> сам подставит не верный контекст


<span style="color:#9999a9; ">// как не терять контекст!</span>


метод <span style="color:#e66170; font-weight:bold; ">call</span> <span style="color:#d2cd86; ">-</span> помогает вызывать сразу функцию с конкретным объектом
<span style="color:#e66170; font-weight:bold; ">call</span><span style="color:#d2cd86; ">,</span><span style="color:#e66170; font-weight:bold; ">apply</span>  <span style="color:#d2cd86; ">-</span> сразу же вызывают функцию<span style="color:#d2cd86; ">!</span>

<span style="color:#e66170; font-weight:bold; ">const</span> f <span style="color:#d2cd86; ">=</span> user<span style="color:#d2cd86; ">.</span>sayHello
f<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">call</span><span style="color:#d2cd86; ">(</span>user<span style="color:#d2cd86; ">-</span> объект<span style="color:#d2cd86; ">,</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">param1</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">param2</span><span style="color:#02d045; ">'</span> <span style="color:#d2cd86; ">-</span> параметры вызванной функции<span style="color:#d2cd86; ">,</span> передаются в строке<span style="color:#d2cd86; ">)</span>

аналог <span style="color:#e66170; font-weight:bold; ">apply</span> f<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">apply</span><span style="color:#d2cd86; ">(</span>user<span style="color:#d2cd86; ">-</span> объект<span style="color:#d2cd86; ">,</span> <span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">param1</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span> <span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">param2</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">-</span> очень похож на <span style="color:#e66170; font-weight:bold; ">call</span><span style="color:#d2cd86; ">.</span> отличие то что принимает массив


метод <span style="color:#e66170; font-weight:bold; ">bind</span> <span style="color:#d2cd86; ">-</span> позволяет привязать конкретную функцию к определенному контексту
возвращает новую функцию<span style="color:#d2cd86; ">,</span> которая привязана к контексту

всегда будет правильный контекст
<span style="color:#e66170; font-weight:bold; ">const</span> f <span style="color:#d2cd86; ">=</span> user<span style="color:#d2cd86; ">.</span>sayHello<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">bind</span><span style="color:#d2cd86; ">(</span>user<span style="color:#d2cd86; ">)</span>
f<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> 
f<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span>

<span style="color:#e66170; font-weight:bold; ">setTimeout</span><span style="color:#d2cd86; ">(</span>user<span style="color:#d2cd86; ">.</span>sayHello<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">bind</span><span style="color:#d2cd86; ">(</span>user<span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">,</span> <span style="color:#008c00; ">100</span><span style="color:#d2cd86; ">)</span>


стрелочные функции  и их контекст
в стрелочных контекста нету


<span style="color:#e66170; font-weight:bold; ">const</span> user <span style="color:#d2cd86; ">=</span> <span style="color:#b060b0; ">{</span>

	name<span style="color:#b060b0; ">:</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Danil</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span>
	sayHello<span style="color:#b060b0; ">:</span><span style="color:#d2cd86; ">(</span>param1<span style="color:#d2cd86; ">,</span>param2<span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
	console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">`</span><span style="color:#00c4c4; ">Hello, ya - </span><span style="color:#02d045; ">${</span><span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span><span style="color:#00c4c4; ">name</span><span style="color:#02d045; ">}</span><span style="color:#00c4c4; ">, this</span><span style="color:#02d045; ">`</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
	<span style="color:#b060b0; ">}</span>

<span style="color:#b060b0; ">}</span>

выдаст window <span style="color:#d2cd86; ">,</span> так как выходит из объекта и <span style="color:#e66170; font-weight:bold; ">this</span> теряется


когда использовать стрелочную функцию<span style="color:#d2cd86; ">,</span>
тут сработает все хорошо

<span style="color:#e66170; font-weight:bold; ">const</span> user <span style="color:#d2cd86; ">=</span> <span style="color:#b060b0; ">{</span>

	names<span style="color:#b060b0; ">:</span><span style="color:#d2cd86; ">[</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Danil</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Danil</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">,</span><span style="color:#02d045; ">'</span><span style="color:#00c4c4; ">Danil</span><span style="color:#02d045; ">'</span><span style="color:#d2cd86; ">]</span><span style="color:#d2cd86; ">,</span>
	sayHello<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
	<span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span>names<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">forEach</span><span style="color:#d2cd86; ">(</span>el<span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span><span style="color:#b060b0; ">{</span>
	<span style="color:#e66170; font-weight:bold; ">setTimeout</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
	console<span style="color:#d2cd86; ">.</span><span style="color:#e66170; font-weight:bold; ">log</span><span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">`</span><span style="color:#00c4c4; ">hello </span><span style="color:#02d045; ">${</span><span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">.</span><span style="color:#00c4c4; ">names</span><span style="color:#02d045; ">}</span><span style="color:#02d045; ">`</span><span style="color:#d2cd86; ">,</span> <span style="color:#e66170; font-weight:bold; ">this</span><span style="color:#d2cd86; ">)</span>
<span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">)</span>
<span style="color:#b060b0; ">}</span>
<span style="color:#ffffff; background:#dd0000; ">}</span>

<span style="color:#ffffff; background:#dd0000; ">}</span>
</pre>
</GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>