<template>
  <div class="sub-root">
    <bar />
    <youtube :ykey="youtubeKey" />
    <movies />
    <app-footer />
  </div>
</template>

<script>
import Bar from "./components/NavigationBar.vue";
import Movies from "./components/MoviesCollection.vue";
import Youtube from "./components/Youtube.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Bar,
    Youtube,
    Movies,
    AppFooter,
  },
  data() {
    return {
      searchedWord: "",
      youtubeKey:
        "https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0",
    };
  },
  created() {
    const htmlTag = document.querySelector("html");
    htmlTag.setAttribute("dir", "ltr");
    htmlTag.setAttribute("lang", "en");
  },
};
</script>
