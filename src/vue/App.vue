<template>
  <div>
    <bar />
    <home />
    <movies />
  </div>
</template>

<script>
import Bar from "./NavigationBar.vue";
import Home from "./Home.vue";
import Movies from "./MoviesCollection.vue"
export default {
  name: "App",
  components: {
    Bar,
    Home,
    Movies
  },
};
</script>
