<template>
  <div>
    <HeaderNavigation />
    <Registration />
  </div>
</template>

<script>
import HeaderNavigation from "@/modules/header/components/HeaderNavigation.vue";
import Registration from "@/modules/admin/Registration.vue";
export default {
  // layout
  name: "registration",
  components: { HeaderNavigation, Registration },
};
</script>

<style>
</style>