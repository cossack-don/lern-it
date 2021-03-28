<template>
  <div class="templates-for-lessons">
<!-- ------------------------------------------------------------------------------------------------ -->
    <nav class="templates-for-lessons__navigation">
    <!-- Cсылки -->
        <router-link :to="{ name: 'Home' }">Главная</router-link>
    <!-- #Cсылки -->
    </nav>

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- если ошибка будет то писать v-slot:default -->
<GC_area_code_lessons slot:default>

<p>сайт для генерация кода https://tohtml.com/xhtml-strict/</p>

<pre style="color:#d1d1d1;background:#000000;"><span style="color:#e66170; font-weight:bold; ">const</span> go <span style="color:#d2cd86; ">=</span> <span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#d2cd86; ">=</span><span style="color:#d2cd86; ">&gt;</span> <span style="color:#b060b0; ">{</span>
 <span style="color:#e66170; font-weight:bold; ">return</span> <span style="color:#008c00; ">1</span><span style="color:#d2cd86; ">+</span> <span style="color:#008c00; ">2</span>
<span style="color:#b060b0; ">}</span>
</pre>

</GC_area_code_lessons>
<!-- ------------------------------------------------------------------------------------------------ -->


<!-- цикл для компонентов -->
  <div v-for="(item,index) in componentsTemplate" :key="index" class="wrapper-template-and-code">

  <!-- визуальный пример компонента -->
  <span class="wrapper-template-and-code__title">{{item.visualPart}}</span>
  <span v-html="item.templateComponent"></span>

  <!-- пример кода, как выглядит компонент -->
  <span class="wrapper-template-and-code__code">{{item.visualCode}}</span>
<!-- ------------------------------------------------------------------------------------------------ -->
  <div class="wrapper-template-and-code__wrapper-native-code">
    <div class="wrapper-template-and-code__native-code" 
    :class="`wrapper-template-and-code__native-code-id-${item.id}`">{{item.codeComponent}}</div>

       <!-- кнопки для компьютера и мобайл -->
      <b-button
        @click="copyCode(`wrapper-template-and-code__native-code-id-${item.id}`)"
        variant="primary"
        class="wrapper-template-and-code__btn-copy-code wrapper-template-and-code__btn-copy-code--comp"
        >Скопировать</b-button
      >

      <b-button
        @click="copyCode(`wrapper-template-and-code__native-code-id-${item.id}`)"
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
      { id:1,
        visualPart:'Как выглядит компонент визуально.',
        templateComponent:'<h2 class="global-h2-text-align">Заголовок</h2>',
        visualCode:'Код компонента.',
        codeComponent:'<GC_h2_lessons v-slot:default>Заголовок</GC_h2_lessons>'
      },

      { id:2,
        visualPart:'Как выглядит компонент визуально.',    
        templateComponent:'<div class="global-block-code-lesson">Для кода, вставляем pre сгенерированный код</div>',
        visualCode:'Код компонента.',
        codeComponent:'<GC_area_code_lessons v-slot:default>Место для примера кода</GC_area_code_lessons>'
      },

      { 
        id:3,
        visualPart:'Как выглядит компонент визуально.',    
        templateComponent:'<a href="/link" class="global-link-page" to="link">Название страницы</a>',
        visualCode:'Код компонента.',
        codeComponent:'<GC_link_page to="link">Название страницы</GC_link_page>',
      },

      { 
        id:4,
        visualPart:'Как выглядит компонент визуально.',    
        templateComponent:'<div>< -------------------------------------Комментарий------------------------------------------- ></div>',
        visualCode:'Код компонента.',
        codeComponent:'<!-- ------------------------------------------------------------------------------------------------ -->',
      },
            { 
        id:5,
        visualPart:'Как выглядит компонент визуально.',    
        templateComponent:'<div>доделать</div>',
        visualCode:'Код компонента.',
        codeComponent:'GC_definition',
      },
    ]
  }
},
methods:{
  copyCode(idComponent) {

    // получаем название класса контейнера которого хотим скопировать
  const getNameClassBlock = document.querySelector(`.${idComponent}`)


    // производим его выделение
  const rangeBlock = document.createRange();
  rangeBlock.selectNode(getNameClassBlock); 
  window.getSelection().addRange(rangeBlock);
  
  //пытаемся скопировать текст в буфер обмена
    try { 
    document.execCommand('copy'); 
    console.log(12)
  } catch(err) { 
    console.log('Не скопировался код в буфер обмена'); 
  } 

  //очистим выделение текста
  window.getSelection().removeAllRanges();

  // Ссылка исходников
  // https://shra.ru/2017/02/kopiruem-v-bufer-obmena-sredstvami-javascript/
  }
}

};
</script>

<style>
.templates-for-lessons__navigation {
margin: 20px;
}

.wrapper-template-and-code {
    background: #f5e7c6;
    padding: 30px;
    display: flex;
    flex-direction: column;
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
  text-align: center;
}

.wrapper-template-and-code__wrapper-native-code {
  display: flex;
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

/* ADAPTIVE */
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