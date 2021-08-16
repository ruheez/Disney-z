<template>
  <div class="sub-root">
    <bar />
    <movie-details />
    <app-footer />
  </div>
</template>

<script>
import Bar from "./NavigationBar.vue";
import MovieDetails from "./MovieDetails.vue";
import AppFooter from "./Footer.vue"
export default {
  name: "MoviePage",
  components: {
    Bar,
    MovieDetails,
    AppFooter
  },
};
</script>
