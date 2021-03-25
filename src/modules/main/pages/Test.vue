<template>
  <div>
    test test 111
    <!-- router-link если name: home в роутах поменяется, то 404 ошибки не будет, будет ошибка в консоли -->
    <router-link :to="{ name: 'Home' }">На главную</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>