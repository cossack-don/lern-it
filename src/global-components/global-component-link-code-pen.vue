<template>
  <a class="global-block-link-code-pen" v-bind="$attrs" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss">
.global-block-link-code-pen {
  background: #252830;
  color: #e3e4e8;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-radius: 5px;
  display: block;
  text-align: center;
  margin: 0 auto;
  max-width: 200px;
  cursor: pointer;
  //   box-shadow: 10px 10px 30px 10px rgb(34 60 80 / 20%);

  &:hover {
    transition: 0.5s;
    color: #ae63e4;
  }
}
</style>