<template>
  <div class="sub-root">
    <a
      class="back-to-details small-screens-back-to-details"
      @click="backToMovieDetails()"
    >
      <img
        class="back-to-details_arrow"
        :src="getImgUrl(arrow.link)"
        :alt="arrow.alt"
      />
    </a>
    <youtube :ykey="youtubeKey.link" />
  </div>
</template>

<script>
import Youtube from "./components/Youtube.vue";
export default {
  name: "WatchMovie",
  components: {
    Youtube,
  },
  data() {
    return {
      youtubeKey: {
        id: 1,
        link: "https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0",
      },
      arrow: {
        id: 2,
        link: "left-arrow.png",
        alt: "left arrow",
      },
    };
  },
  created() {
    this.addHtmlLangandDir();
    this.mouseIsMoving();
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png$/);
      return images("./" + pic);
    },
    addHtmlLangandDir() {
      const htmlTag = document.querySelector("html");
      htmlTag.setAttribute("dir", "ltr");
      htmlTag.setAttribute("lang", "en");
    },
    mouseIsMoving() {
      document.addEventListener("mousemove", this.showArrow);
    },
    showArrow() {
      clearTimeout(id);
      const arrow = document.querySelector(".back-to-details");
      arrow.classList.add("show-arrow");
      var id = setTimeout(this.hideArrow, 3000);
    },
    hideArrow() {
      const arrow = document.querySelector(".back-to-details");
      arrow.classList.remove("show-arrow");
    },
    backToMovieDetails() {
      const urlParams = new URLSearchParams(window.location.search);
      var movie = urlParams.get("movie");
      window.open("./movie-page.html?movie=" + encodeURI(movie));
    },
  },
};
</script>

<style>
.app-root,
.sub-root,
.movie-details_trailer {
  height: 100%;
}

.back-to-details {
  opacity: 0;
  position: fixed;
  top: 30px;
  left: 0;
  padding: 5px;
  margin: 25px 0;
  border: 2px solid #1c55ff;
  border-radius: 0 10px 10px 0;
  font-size: 40px;
  font-weight: bold;
  color: #1c55ff;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  background-color: white;
  transition-duration: 5s;
}
.show-arrow {
  opacity: 1;
}
.back-to-details:hover {
  opacity: 0.7;
}
.back-to-details_arrow {
  width: 30px;
  height: auto;
}
@media only screen and (max-width: 750px) {
  .small-screens-back-to-details {
    opacity: 1;
  }
}
</style>
