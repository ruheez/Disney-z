<template>
  <video class="home-video" autoplay muted>
    <source type="video/mp4" :src="getVideoUrl('home.mp4')" />
  </video>
</template>

<script>
export default {
  name: "Home",
  methods: {
    getVideoUrl(video) {
      var videos = require.context("../videos/", false, /\.mp4$/);
      return videos("./" + video);
    },
  },
};
</script>

<style>
.home-video {
  object-fit: fill;
  width: 100%;
  height: 600px;
}
</style>
