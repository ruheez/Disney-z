<template>
  <video class="home-video" autoplay muted>
    <source src="../videos/home.mp4" type="video/mp4" />
  </video>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
.home-video {
  object-fit: fill;
  width: 100%;
}
</style>
