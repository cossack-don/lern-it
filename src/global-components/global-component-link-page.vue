<template>
<router-link class="global-link-page" v-bind="$attrs">
<slot></slot>
</router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.global-link-page {
/* text-align: center; */
    border: 1px solid #007bff;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 5px;
    background:#007bff;
    color: #ffffff;
    
    &:hover {
        transition: 0.5s;
        background:#ffffff;
        color: #007bff;
    }
}
    
</style>