<template>
  <div>
    <HeaderNavigation />
    <FeedbackForm />
  </div>
</template>

<script>
import HeaderNavigation from "@/modules/header/components/HeaderNavigation.vue";
import FeedbackForm from "@/modules/header/pages/FeedbackForm.vue";
export default {
  // layout
  name: "feedback-form",
  components: { HeaderNavigation, FeedbackForm },
};
</script>

<style>
</style>