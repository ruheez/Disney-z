<template>
  <video class="home-video" autoplay muted loop playsinline>
    <source
      type="video/mp4"
      src="https://media.githubusercontent.com/media/Srizza93/streaming/main/src/videos/home.mp4"
    />
  </video>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home-video {
  position: relative;
  object-fit: fill;
  width: 100%;
  height: 600px;
}
@media only screen and (max-width: 600px) {
  .home-video {
    height: 300px;
  }
}
</style>
