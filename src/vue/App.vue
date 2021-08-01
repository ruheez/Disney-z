<template>
  <div>
    <bar />
    <home />
  </div>
</template>

<script>
import Bar from "./NavigationBar.vue";
import Home from "./Home.vue";
export default {
  name: "App",
  components: {
    Bar,
    Home,
  },
};
</script>
