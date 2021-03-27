<template>
  <div class="templates-for-lessons">

<!-- Cсылки -->
    <router-link :to="{ name: 'Home' }">На главную</router-link>
<!-- #Cсылки -->

для СОЗДАНИЯ КОДА В СТРАНИЦУ <br>
https://tohtml.com/xhtml-strict/ <br>
пример <br>



<GC_area_code_lessons v-slot:default>


<pre style="color:#d1d1d1;background:#000000;"><span style="color:#e66170; font-weight:bold; ">const</span> go <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
 <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">+</span> <span style="color:#008c00; ">2</span>
<span style="color:#b060b0; ">}</span>
</pre>


</GC_area_code_lessons>
<!-- цикл для компонентов -->
  <div v-for="(item,index) in componentsTemplate" :key="index" class="wrapper-template-and-code">

  <!-- визуальный пример компонента -->
  <span class="wrapper-template-and-code__title">{{item.visualPart}}</span>
  <span v-html="item.templateComponent"></span>

  <!-- пример кода, как выглядит компонент -->
  <span class="wrapper-template-and-code__code">{{item.visualCode}}</span>

  <div class="wrapper-template-and-code__wrapper-native-code">
    <div class="wrapper-template-and-code__native-code" >{{item.codeComponent}}</div>

       <!-- кнопки для компьютера и мобайл -->
      <b-button
      @click="copyCode"
        variant="primary"
        class="wrapper-template-and-code__btn-copy-code wrapper-template-and-code__btn-copy-code--comp"
        >Скопировать</b-button
      >

      <b-button
        variant="primary"
        class="wrapper-template-and-code__btn-copy-code wrapper-template-and-code__btn-copy-code--mobile"
        ><img src="@/assets/img/copy-icon.png" alt="" class="wrapper-template-and-code__mobile-icon"></b-button
      >
  </div>

  </div>
  <!--# цикл для компонентов -->
  </div>
</template>

<script>
export default {
  data() {
  return {

    componentsTemplate:[
      { visualPart:'Как выглядит компонент визуально.',
        templateComponent:'<h2 class="global-h2-text-align">Заголовок</h2>',
        visualCode:'Код компонента.',
        codeComponent:'<GC_h2_lessons v-slot:default>Заголовок</GC_h2_lessons>'
      },

      { visualPart:'Как выглядит компонент визуально.',    
        templateComponent:'<div class="global-block-code-lesson">Для кода</div>',
        visualCode:'Код компонента.',
        codeComponent:'<GC_area_code_lessons v-slot:default>Место для примера кода</GC_area_code_lessons>'
      },

      {
        visualPart:'Как выглядит компонент визуально.',    
        templateComponent:'<div class="global-block-code-lesson">Для кода</div>',
        visualCode:'Код компонента.',
        codeComponent:'  var elements = [Hydrogen,Helium,Lithium,Beryllium]',
      },

    ]
  }
},
methods:{
  copyCode() {
    // https://shra.ru/2017/02/kopiruem-v-bufer-obmena-sredstvami-javascript/
  }
}
};
</script>

<style>

.wrapper-template-and-code {
    background: #f5e7c6;
    /* margin-top: 40px; */
    /* margin-bottom: 40px; */
    padding: 30px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    max-width: 900px;
    margin: 20px auto;
    border-radius: 5px;
    position: relative;
}
.wrapper-template-and-code__title {
  background: #dc3545;
  color: white;
  padding: 10px;
  display: block;
  margin-bottom: 35px;
  max-width: 325px;
}
.wrapper-template-and-code__code {
  background: #ffc107;
  color: #dc3545;
  padding: 10px;
  display: block;
  margin-bottom: 15px;
  max-width: 325px;
  text-align: center;
  margin-top: 35px;
  font-weight: bold;
}
.wrapper-template-and-code__native-code {
  padding: 5px;
  font-weight: bold;
  font-size: 12px;
}

.wrapper-template-and-code__wrapper-native-code {
  display: flex;
}
.templates-for-lessons{

}
.wrapper-template-and-code__btn-copy-code {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 5px;
}
.wrapper-template-and-code__btn-copy-code--mobile {
  display: none;

}
.wrapper-template-and-code__mobile-icon {
    width: 25px;
    height: auto;
}
@media screen and (max-width:768px) {
 .wrapper-template-and-code__btn-copy-code {
   width:35px;
   height: 35px;
 } 

 .wrapper-template-and-code__btn-copy-code--comp {
   display: none;
 }

 .wrapper-template-and-code__btn-copy-code--mobile {
 
  display: flex;
    justify-content: center;
    align-items: center;
}
}
@media screen and (max-width:576px) {
 .wrapper-template-and-code__btn-copy-code {
   content: '222';
   color: red;
   width:35px;
   height: 35px;
 } 
 
}



</style>