<template>
  <div class="sub-root">
    <process />
    <app-footer />
  </div>
</template>

<script>
import Process from "./components/SignupProcess.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "Signup",
  components: {
    Process,
    AppFooter,
  },
};
</script>
