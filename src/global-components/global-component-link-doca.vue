<template>
  <a class="global-block-link-doca" v-bind="$attrs" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss">
.global-block-link-doca {
  display: block;
  text-align: center;
  margin: 0 auto;
  max-width: 400px;
  background: #6f42c1;
  color: #fff;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #6f42c1;
  margin-top: 15px;
  margin-bottom: 15px;

  &:hover {
    transition: 0.5s;
    color: #6f42c1;
    background: #fff;
    border: 2px solid #6f42c1;
    border-radius: 15px;
  }
}
</style>