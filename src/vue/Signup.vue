<template>
  <div class="sub-root">
    <process />
    <app-footer />
  </div>
</template>

<script>
import Process from "./signup/SignupProcess.vue";
import AppFooter from "./Footer.vue";
export default {
  name: "Signup",
  components: {
    Process,
    AppFooter,
  },
};
</script>
