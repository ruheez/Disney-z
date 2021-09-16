<template>
  <div class="movie-details_trailer">
    <iframe
      class="youtube_iframe"
      :src="ykey"
      title="YouTube video player"
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
  object-fit: fill;
  width: 100%;
  height: 350px;
}
.youtube_iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
