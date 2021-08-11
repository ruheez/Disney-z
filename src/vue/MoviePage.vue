<template>
  <div class="sub-root">
    <bar />
    <movie-details />
  </div>
</template>

<script>
import Bar from "./NavigationBar.vue";
import MovieDetails from "./MovieDetails.vue";
export default {
  name: "MoviePage",
  components: {
    Bar,
    MovieDetails,
  },
};
</script>
