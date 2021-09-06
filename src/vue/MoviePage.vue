<template>
  <div class="sub-root">
    <bar />
    <movie-details />
    <app-footer />
  </div>
</template>

<script>
import Bar from "./components/NavigationBar.vue";
import MovieDetails from "./components/MovieDetails.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "MoviePage",
  components: {
    Bar,
    MovieDetails,
    AppFooter,
  },
  created() {
    const htmlTag = document.querySelector("html");
    htmlTag.setAttribute("dir", "ltr");
    htmlTag.setAttribute("lang", "en");
  },
};
</script>
