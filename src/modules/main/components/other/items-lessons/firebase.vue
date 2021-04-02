<template>
  <div class="firebase-api">
    <a href="https://firebase.google.com/" target="_blank"
      >Firebase - сервис API - ссылка</a
    >
    <GC_area_code_lessons slot:default>
      <pre
        style="color: #d1d1d1; background: #000000"
      >пример url с firebase<span style="color:#d2cd86; ">,</span> чтобы получать данные с помощью fetch<span style="color:#d2cd86; ">,</span> axios

<span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">--</span><span style="color:#d2cd86; ">--</span>   https<span style="color:#b060b0; ">:</span><span style="color:#9999a9; ">//nxt-blog-3562d-default-rtdb.firebaseio.com/posts.json   ----</span>


<span style="color:#9999a9; ">// пример JSON</span>

<span style="color:#b060b0; ">{</span>
  <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">-MWEPAAdudgwPNmZF0_V</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">content</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">ContentContentContentContentContentContentContentContent</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">discr</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">OPISANIE 1</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">id</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">-MWEPAAdudgwPNmZF0_V</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">img</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">https://avatars.mds.yandex.net/get-zen_doc/3737694/pub_5f912e9fc2b29d2294c0831a_5f912eb1be60787eb9f01d7c/scale_1200</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">title</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">fs titlt1111</span><span style="color:#02d045; ">"</span>
  <span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
  <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">-MWEPSvazbvoe_CjTmjB</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">content</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">ContentContentContentContentContent2-2-2</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">discr</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">OPISANIE 2</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">id</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">-MWEPSvazbvoe_CjTmjB</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">img</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">https://iohotnik.ru/wp-content/uploads/2019/02/yuc0vsaxd8.jpg</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">title</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">TITLE 2</span><span style="color:#02d045; ">"</span>
  <span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
  <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">-MWESqW1JHuAXnnkUhfr</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">content</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">Content-3-3-3-3</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">discr</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">OPISANIE 3</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">img</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">https://static.tildacdn.com/tild6137-3333-4130-b563-353963626636/iStock-901300342.jpg</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">title</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">TITLE 3</span><span style="color:#02d045; ">"</span>
  <span style="color:#b060b0; ">}</span><span style="color:#d2cd86; ">,</span>
  <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">-MWIvFAeQMKR463MpnCB</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#b060b0; ">{</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">content</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">wdf</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">discr</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">img</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">https://weaversbc.ru/wp-content/uploads/2016/04/HOFF_Case2_1200x600-nocdn.jpg</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">,</span>
    <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">title</span><span style="color:#02d045; ">"</span><span style="color:#b060b0; ">:</span> <span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">w</span><span style="color:#02d045; ">"</span>
  <span style="color:#b060b0; ">}</span>
<span style="color:#b060b0; ">}</span>
</pre>
    </GC_area_code_lessons>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.firebase-api {
  /* display: flex;
  justify-content: center; */
  margin-top: 35px;
  /* height: 100vh; */
  a {
    // margin-top: 35px;
    display: flex;
    justify-content: center;
  }
}
</style>