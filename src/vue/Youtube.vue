<template>
  <div class="movie-details_trailer">
    <iframe
      width="100%"
      height="100%"
      :src="ykey"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Youtube",
  props: {
    ykey: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.movie-details_trailer {
  position: relative;
  object-fit: fill;
  width: 100%;
  height: 350px;
}
</style>
