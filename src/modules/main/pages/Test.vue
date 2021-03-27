<template>
  <div>
    test test 111
    <!-- router-link если name: home в роутах поменяется, то 404 ошибки не будет, будет ошибка в консоли -->
    <router-link :to="{ name: 'Home' }">На главную</router-link>

<div v-for="(item,index) in componentsTemplate" :key="index">
  <div v-html="item.template"></div>
  <div>{{item.code}}</div>

  </div>
  </div>
</template>

<script>
export default {data() {
  return {
    componentsTemplate:[
      {
        template:'<h1>test 1</h1>',
        code:'<h1>test__1</h1>'
      },
      {template:'<h1>TEST 2</h1>',
        code:'<h1>TEST___2</h1>'
      }
    ]
  }
}};
</script>

<style>
</style>